new Vue ({
    el: '#app',
    data: {
        currentSelect: 'HOME',
        arr: [
            {
                name : 'HOME',
                status: true
            },
            {
                name : 'PROJECTS',
                status: false
            },
            {
                name : 'SERVICES',
                status: false
            },
            {
                name : 'CONTACT',
                status: false
            }
        ]
    },
    methods: {
        xuLiNavBar(item) {
             this.arr.find(item => item.name === this.currentSelect).status = false ;
             this.currentSelect = item.name
             this.arr.find(item => item.name === this.currentSelect).status = true ;

        }
    },
})