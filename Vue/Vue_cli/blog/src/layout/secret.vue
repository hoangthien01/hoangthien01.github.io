<template>
  <div class="secret-layout">
      <Sidebar></Sidebar>
      <div class="content">
        <NavSecret></NavSecret>
        <slot></slot>
      </div>
  </div>
</template>

<script>
import NavSecret from '../components/common/NavSecret.vue'
import Sidebar from '../components/common/Sidebar.vue'
export default {
    name:'secret',
    components: {
        NavSecret,Sidebar
    }
}
</script>

<style scoped>
.secret-layout {
    padding: 10px 25px 0;
}
.content {
    margin-left: 200px;
}

</style>