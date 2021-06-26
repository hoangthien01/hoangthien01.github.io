<template>
  <div class="about-contain">
    <Head></Head>
    <Main></Main>
    <subMain></subMain>
  </div>
</template>

<script>
import Head from "../components/uncommon/About/Head.vue";
import Main from "../components/uncommon/About/Main.vue";
import subMain from "../components/uncommon/About/Sub_main.vue";
export default {
  name: "About",
  components: {
    Head,
    Main,
    subMain,
  },
};
</script>

<style>
</style>