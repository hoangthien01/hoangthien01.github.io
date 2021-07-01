<template>
  <div class="default-layout">
    <router-view
      class="animate__animated animate__fadeIn animate__faster 500ms"
    ></router-view>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.default-layout {
  width: 100wh;
  height: 100vh;
  background-image: url('../assets/image/bg-default.jpeg');
  /* background-color: rgb(48, 48, 48); */
}
</style>