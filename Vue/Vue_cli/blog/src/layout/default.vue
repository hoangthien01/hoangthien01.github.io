<template>
  <div class="default-layout">
      <Nav></Nav>
      <slot></slot>
      <Footer></Footer>
  </div>
</template>

<script>
import Nav from '../components/common/Nav.vue'
import Footer from '../components/common/Footer.vue'
export default {
    components: {
        Footer,Nav
    }
}
</script>

<style>
.default-layout {

    padding: 0 25px ;
}
</style>