new Vue({
    el: '#app',
    data: {
        vin: 'Z94CB41AAGR323020',
        report: false
    },
    methods: {
        queryVin() {
            this.report = {
                vehicle: {
                    regNumber: 'М289АС750',
                    brand: 'KIA RIO',
                    model: '',
                    color: 'серый темный',
                    price: 750000,
                },
                analysis: [
                    {title: 'Бывших владельцев', value: '3', state: 'success'},
                    {title: 'Залог', value: 'есть', state: 'danger'},
                    {title: 'Серьезных аварий', value: '0', state: 'success'},
                    {title: 'Всего аварий', value: '1', state: 'warning'},
                    {title: 'Краденная', value: 'нет', state: 'success'},
                    {title: 'Продажа перекупщиком', value: 'нет', state: 'success'},
                    {title: 'Штрафы', value: 'нет', state: 'success'},
                    {title: 'Пробег', value: '30000', state: 'warning'},
                    {title: 'Смена регионов регистрации', value: 'да', state: 'warning'},
                ],
                result: {
                    type: 'danger',
                    text: 'Мы вас предупредили!'
                }
            }
        },
        getReportEntryClass(entry) {
            return 'list-group-item-' + entry.state;
        }
    },
    computed: {
        isVinOK() {
            return this.vin.length >= 15;
        }
    }
});