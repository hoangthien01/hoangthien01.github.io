<template>
  <div class="about-main">
    <div class="line-1"></div>
    <div class="content-wrap-1">
      <div class="text">
        <p class="title">We tell stories that drives the heart.</p>
        <p class="description">
          Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
          qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui
          minim pariatur et officia elit id. Tempor cupidatat veniam esse ad
          veniam dolore excepteur tempor dolor consectetur ut id.
        </p>
      </div>
      <div class="image-1">
        <img src="../../../assets/about/Picture1.png" alt="" srcset="" />
      </div>
    </div>
    <div class="content-wrap-2">
      <div class="image-2">
        <img src="../../../assets/about/Picture2.png" alt="" srcset="" />
      </div>
      <div class="text-2">
        <p class="title">We tell the news that makes the most impact.</p>
        <p class="description">
          Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
          qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui
          minim pariatur et officia elit id. Tempor cupidatat veniam esse ad
          veniam dolore excepteur tempor dolor consectetur ut id.
        </p>
      </div>
    </div>
    <div class="content-wrap-3">
      <div class="text-3" style="margin-right: 450px">
        <p class="title">We share the little moments that shows we’re alive.</p>
        <p class="description">
          Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
          qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui
          minim pariatur et officia elit id. Tempor cupidatat veniam esse ad
          veniam dolore excepteur tempor dolor consectetur ut id.
        </p>
      </div>
      <div class="image-3">
        <div style="width: 33%; overflow: hidden">
          <img src="../../../assets/about/Picture3.png" alt="" srcset="" />
        </div>
        <div style="width: 33%; overflow: hidden">
          <img src="../../../assets/about/Picture4.png" alt="" srcset="" />
        </div>
        <div style="width: 25%; overflow: hidden">
          <img src="../../../assets/about/Picture5.png" alt="" srcset="" />
        </div>
      </div>
    </div>
    <div class="line-2"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-main {
  margin: 0 36px;
  background-color: #1c1c1c;
  position: relative;
}

.content-wrap-1 {
  display: flex;
  padding: 146px 85px 0 96px;
  position: relative;
}
.image-1 {
  position: absolute;
  right: 85px;
  z-index: 1;
}
.text {
  margin-right: 650px;
  padding-top: 20px;
}
.title {
  font-family: Libre Baskerville;
  font-size: 53px;
  line-height: 51px;
  color: #ffffff;
}
.description {
  font-family: Open Sans;
  font-size: 21px;
  line-height: 30px;
  color: #ffffff;
  margin-top: 13px;
}
.content-wrap-2 {
  width: 557px;
  margin: 70px 0 0 460px;
  position: relative;
  z-index: 1000;
}
.image-2 {
  display: block;
  bottom: 110%;
}
.content-wrap-3 {
  margin: 200px 0 0 350px;
}
.image-3 {
  margin-top: 76px;
  display: flex;
  justify-content: space-between;
}
.line-1 {
  height: 1018px;
  width: 8px;
  background-color: #ffffff;
  position: absolute;
  right: 180px;
}
.line-2 {
  height: 1312px;
  width: 8px;
  background-color: #ffffff;
  position: absolute;
  left: 180px;
  bottom: 0;
}
</style>