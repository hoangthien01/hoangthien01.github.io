<template>
  <div class="unauth-layout">
    <router-view
      class="animate__animated animate__fadeIn animate__faster 500ms"
    ></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.unauth-layout {
  width: 100wh;
  height: 100vh;
  background-image: url("../assets/image/bg-login.jpeg");
}
</style>