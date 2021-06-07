import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const storeData = {
    state : {
        currentInput: "",
        editAble: 'false',
        editLocation: "",
        items : [
            {
                name: 'Lam Bai Tap',
                done: true
            },
             {
                name: 'Code',
                done: false
            },
             {
                name: 'On Tap',
                done: false 
            }
        ]
    },
    gettters: {
        editAble: state => state.editAble,
        input : state => state.currentInput
    },
    mutations: {
        SET_CURRENTINPUT (state, item){
            state.currentInput = item.name;
            state.editAble = 'true';
            state.editLocation = state.items.findIndex(c => c.name ===  item.name)
        },
        MARK_DONE(state, payload){
            state.items.map((item,index) => {
                if(index === payload) item.done = !item.done;
                return item
            })
        },
        ADD_ITEM (state, payload) {
            if(state.items.findIndex(c=> c.name === payload) === -1 && payload != "") {

                state.items.push({
                    name : payload,
                    done: false
                })
                state.currentInput = ""
            } else {
                alert('ERROR Task!!')
            }
        },
        REMOVE_ITEM(state, index) {
           state.items.splice(index,1)
           state.editAble = false
           state.editLocation =""
        },
        EDIT_ITEM: (state,input) => {
            if(state.items.findIndex(c=> c.name === input) === -1 && input != "") {
                state.items.splice(state.editLocation,1,{
                    name: input,
                    done: state.items[state.editLocation].done
                })
                state.editAble = 'false'
            }  else {
                alert('ERROR Task!!')
            }
        }
    },
}

const store = new VueX.Store(storeData)
export default store
