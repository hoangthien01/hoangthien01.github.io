<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/blogs">Blogs</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="tab">
    <router-view/>

    </div>
  </div>
</template>

<script>
import {onBeforeMount} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import firebase from 'firebase'
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
    firebase.auth().onAuthStateChanged((user) =>{
      if(!user) {
        router.replace('/login');
      } else if (route.path == "/login" || route.path == "/register") {
        router.replace('/');
      }
    });
    });
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  width: 80%;
  max-width: 1000px;
  margin: auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.tab {
  width: 70%;
  max-width: 900px ;
  max-height: 550px;
  overflow-y: auto;
  border: 2px solid #000;
  margin: 20px auto 0 auto;
  padding: 0 35px;
}
</style>
