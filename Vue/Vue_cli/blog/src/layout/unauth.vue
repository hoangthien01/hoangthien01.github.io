<template>
  <div class="unauth-layout">
      <!-- <Nav></Nav>    -->
      <!-- <Login></Login> -->
      <router-view></router-view>
  </div>
</template>
<script>
// import Nav from '../components/common/Nav.vue'
// import Login from '../components/Login.vue'
export default {
    components: {
        // Login,
        // Nav
    }
}
</script>

<style scoped>
.unauth-layout {
    width: 100wh;
    height: 100vh;
    background-image: url('../assets/image/login.jpeg');
    position: relative;
}

</style>