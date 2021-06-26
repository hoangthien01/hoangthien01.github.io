<template>
  <div class="about-head">
    <div class="about-head-content">
      <div class="logo">
        <div class="bg">
          <p><span>nu</span>ntium.</p>
        </div>
      </div>
      <p class="text">A publishing company that focuses on the essentials.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-head {
  position: relative;
  height: 80vh;
}
.about-head-content {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
}
.logo {
  margin: 0 auto;
}
.bg {
  width: 94px;
  height: 78px;
  background-color: #000;
  position: relative;
  cursor: pointer;
  transform: translateX(-50%);
  left: calc(50% - 60px);
}
.bg p {
  position: absolute;
  display: block;
  z-index: 10000;
  font-family: Libre Baskerville;
  font-weight: bold;
  font-size: 43px;
  line-height: 95px;
  width: 162px;
  margin-left: 45px;
}
.bg p span {
  color: #fff;
}

.text {
  width: 370px;
  font-family: Libre Baskerville;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #000000;
  margin: 26px auto 0;
}
</style>