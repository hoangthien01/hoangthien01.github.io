import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const storeData = {
    state : {
        currentUser: "",
    },
    getters: {
        currentUser: state => state.currentUser,
    },
    mutations: {
        SET_CURRENTUSER (state, index){
            state.currentUser = index;
        },
    },
}

const store = new VueX.Store(storeData)
export default store
