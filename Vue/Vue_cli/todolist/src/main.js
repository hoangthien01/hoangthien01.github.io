import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWk_sX8UnjKWxtfMZfAiguRcgzqPxWDVQ",
  authDomain: "vue-auth-todo-48e66.firebaseapp.com",
  projectId: "vue-auth-todo-48e66",
  storageBucket: "vue-auth-todo-48e66.appspot.com",
  messagingSenderId: "846369420965",
  appId: "1:846369420965:web:ecd44092f9ab86cca57f4c",
  measurementId: "G-82PKDVVLVX"
};

firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
