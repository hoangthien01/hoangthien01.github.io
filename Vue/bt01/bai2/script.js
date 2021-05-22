new Vue ({
    el: '#app',
    data: {
        currentSelect : {},
        totalPrice : 0,
        arr: [
            {
                name: 'Web Development',
                price : 300.00,
                status : false
            },
            {
                name: 'Design',
                price : 400.00,
                status : false
            },
            {
                name: 'Integration',
                price : 250.00,
                status : false
            },
            {
                name: 'Training',
                price : 220.00,
                status : false
            }
        ],
    },
    methods: {
        addPrice(item) {
            currentSelect = item
            this.arr.find(item => item.name === currentSelect.name).status = !this.arr.find(item => item.name === currentSelect.name).status
            if( currentSelect.status) {
                this.totalPrice += currentSelect.price
            } else {
                this.totalPrice -= currentSelect.price
            }         
        }
    },
})