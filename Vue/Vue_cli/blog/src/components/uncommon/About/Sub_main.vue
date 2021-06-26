<template>
  <div class="sub-main">
    <div class="info">
      <p class="title">Because we are you. Humans.</p>
      <p class="description">
        Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui
        dolor cillum fugiat ad.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sub-main {
  position: relative;
  height: 80vh;
}
.info {
  position: absolute;
  width: 450px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.title {
  font-family: Libre Baskerville;
  font-size: 53px;
  text-align: center;
  color: #1c1c1c;
}
.description {
  font-family: Open Sans;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #1c1c1c;
  padding: 0 20px;
}
</style>