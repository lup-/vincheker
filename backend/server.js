'use strict';

const express = require('express');
const apiClient = require('./avtocod');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    let result = {'success': false};
    let tokenResult = await apiClient.getToken('guest@test', '123456');
    if (tokenResult) {
        let authToken = tokenResult.header;
        let generationResult = await apiClient.queryVin("Z94CB41AAGR323020", authToken);
        let reportUid = generationResult.data[0].uid;
        let reportResult = await apiClient.queryReport(reportUid, authToken);

        res.send(reportResult);
    }
});

app.listen(PORT, HOST);