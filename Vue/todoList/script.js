new Vue ({
    el: '#app',
    data: {
        currentInput : '',
        editAble : false,
        index : null,
        check: false,
        arr: [
            {
                name : 'HomeWork',
                done : true
            },
            {
                name : 'BauCu',
                done : true
            },
            {
                name : 'DaGa',
                done : false
            }
        ]
    },
    methods: {
        addToArr() {
            if(this.editAble && this.currentInput != "")
            {
                this.arr[this.index].name = this.currentInput
                this.currentInput = ""
                this.editAble = false
            } else if(this.currentInput != "") {
                this.arr.push({
                    name: this.currentInput,
                    done: false
                })
                this.currentInput = "";
            } 
        },
        removeFromArr(item) {
            this.arr.splice(this.arr.findIndex(i => i.name === item.name),1)
        },
        checkAll(){
            this.check = !this.check
            for(let i=0;i<this.arr.length;i++){
                this.arr[i].done = this.check
            }
        },
        editRow(item) {
            this.index = this.arr.findIndex(i=>i.name === item.name)
            console.log(this.index)
            this.currentInput = item.name
            this.editAble = true
            
        }
    },
})