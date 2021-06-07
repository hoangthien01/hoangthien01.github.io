<template>
  <div id="app">
    <button class="btn" :class="{active:currentLayout === 'Home'}" @click="btnClick('Home')">Home</button> /
    <button class="btn" :class="{active:currentLayout === 'Blogs'}" @click="btnClick('Blogs')">Blogs</button> /
    <Button class="btn" :class="{active:currentLayout === 'Contact'}" @click="btnClick('Contact')">Contact</Button>
    <div class="">
      <component v-bind:is="currentLayout" class="tab"></component>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Blogs from './components/Blogs.vue'
import Contact from './components/Contact.vue'


export default {
  name: 'App',
  components: {
    Home, Blogs, Contact
  },
  data() {
    return {
      currentLayout : "Home",
    }
  },
  methods : {
    btnClick(message) {
      this.currentLayout = message
    }
  }
}
</script>

<style >
* {
  font-family: 'Indie Flower', cursive;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  background-color: #fff;
  border: none;
  text-decoration: underline;
  font-size: 25px;
  font-style: italic;
  cursor: pointer;
}
.active {
  color: green;
}
.layout {
  width: 70%;
  max-width: 1000px;
  height: 600px;
  border: 1px solid #000;
  margin: 20px auto 0 auto;
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

@media (max-width: 991.98px) {
   .tab {
       width: 80%;
   }
   
}

</style>
