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
      <div class="text-3" >
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
  width: 40%;
  overflow: hidden;
}
.image-1 img {
  width: 100%;
  object-fit: contain;
}
.text {
  margin-left: 0;
  width: 40%;
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
  width: 40%;
  margin-top: 70px;
  margin-left: 35%;
  position: relative;
  z-index: 1000;
}
.image-2 {
  display: block;
  bottom: 110%;
  width: 100%;
  overflow: hidden;
}
.image-2 img {
  width: 100%;
}
.content-wrap-3 {
  margin-left:25%;
  margin-top: 15%;
}
.text-3 {
  padding-right: 20%;
}
.image-3 {
  margin-top: 76px;
  display: flex;
  justify-content: space-between;
}
.image-3 img {
  width: 100%;
}
.line-1 {
  height: 50%;
  width: 8px;
  background-color: #ffffff;
  position: absolute;
  right: 15%;
}
.line-2 {
  height: 60%;
  width: 8px;
  background-color: #ffffff;
  position: absolute;
  left: 15%;
  bottom: 0;
}
@media (min-width: 576px) {  }

@media (max-width: 767.98px) {  }

@media (min-width: 768px) and (max-width: 991.98px) { 

 }

@media (min-width: 992px) and (max-width: 1199.98px) {
.title {
  font-size: 28px;
  line-height: 32px;
}
.description {
  font-size: 18px;
  line-height: 22px;
}
 }
</style>