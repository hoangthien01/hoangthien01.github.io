<template>
  <div id="app">
    <component :is="layout">
      <router-view class="animate__animated animate__fadeIn" />
    </component>
  </div>
</template>
<script>
import defaultLayout from "./layout/default.vue";
import unauthLayout from "./layout/unauth.vue";
import secretLayout from "./layout/secret.vue";
export default {
  components: {
    defaultLayout,
    unauthLayout,
    secretLayout,
  },
  computed: {
    layout() {
      switch (this.$route.meta.layout) {
        case "unauth":
          return "unauthLayout";
        case "default":
          return "defaultLayout";
        case "secret":
          return "secretLayout";
      }
      return "defaultLayout";
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Open Sans;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.mt-75 {
  margin-top: 75px;
}
</style>
