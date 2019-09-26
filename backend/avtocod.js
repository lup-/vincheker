const axios = require('axios');

module.exports = {
    getToken: async function (login, password) {
        try {
            let now = new Date;
            let isoNowWithoutMilliseconds = now.toISOString().split('.')[0]+"Z";
            let result = await axios.get('https://b2bapi.avtocod.ru/b2b/api/v1/dev/token', {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json',
                },
                params: {
                    "user": login,
                    "ishash": "false",
                    "pass": password,
                    "date": isoNowWithoutMilliseconds,
                    "age": 60
                }
            });

            console.log(result.data);
            return result.data;
        }
        catch (error) {
            console.error(error.response.data);
            return false;
        }
    },
    queryVin: async function (vin, token) {
        console.log(vin, token);
        let endpointUrl = 'https://b2bapi.avtocod.ru/b2b/api/v1/dev/user/reports/default/_make';
        let query = {
            "queryType": "VIN",
            "query": vin
        };
        let config = {
            url: endpointUrl,
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': token
            },
            data: query
        };

        try {
            let result = await axios(config);

            return result.data;
        }
        catch (error) {
            console.error(error.response.data);
            return error;
        }
    },

    queryReport: async function (reportUid, token) {
        console.log(reportUid, token);
        try {
            let endpointUrl = 'https://b2bapi.avtocod.ru/b2b/api/v1/dev/user/reports/'+reportUid;
            let result = await axios.get(endpointUrl, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json',
                    'Authorization': token
                },
                params: {
                    "_content": "true",
                    "_detailed": "true",
                }
            });

            console.log(result.data);
            return result.data;
        }
        catch (error) {
            console.error(error.response.data);
            return false;
        }

    }
};