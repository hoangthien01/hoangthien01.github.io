<template>
<div>
    <div class="createitem">
        <input type="text" class="inp" autofocus placeholder="What needs to be done?"
            v-model="currentInput"
            v-on:keyup.enter="addItem" 
        >
        <button class="btnCheck" 
          @click="addItem"
        >
            <i class="fas fa-chevron-right"></i>
        </button>
    </div>
</div>
</template>

<script>
export default {
    name : 'CreateItem',
    data() {
        return {
            currentInput : "",
        }
    },
    methods: {
        addItem() {
            if(this.editAble === 'true') {
                this.$store.commit("EDIT_ITEM",this.currentInput)
                this.currentInput = ""
            } else {
                this.$store.commit("ADD_ITEM",this.currentInput)
                this.currentInput = ""
            }
        }
    },
    computed: {
        editAble() {
            return this.$store.state.editAble
        },
        input() { 
            return this.$store.state.currentInput
        }
    },
    watch: {
        input() {
            this.currentInput = this.input
        }
    }
}
</script>

<style scoped>
.createitem {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
}
.inp {
    padding: 5px 20px;
    width: 80%;
    font-size: 25px;
    border: none;
    outline: none;
    border-bottom: 2px solid green;
}
.btnCheck {
    width: 50px;
    height: 50px;
    border: none;
    margin-left: 10px;
    font-size: 20px;
    color: green;
    cursor: pointer;
}
</style>