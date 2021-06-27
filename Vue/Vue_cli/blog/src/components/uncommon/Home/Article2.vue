<template>
  <div class="article mt-75">
    <img src="../../../assets/image/Article2.png" alt="" srcset="" />
    <div class="article-content-2">
      <p class="head">INTERIOR</p>
      <h2 class="title">Laborum Ullamco Sunt id ut Sunt</h2>
      <p class="sub-title">Bessie Hawkins - May 7, 2019 (10 mins read)</p>
      <p class="description">
        Proident aliquip velit qui commodo officia qui consectetur dolor ullamco
        aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum
        nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis
        dolor anim excepteur. In aliquip mollit nulla consequat velit magna.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.article {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 600px;
}
.article img {
  width: 100%;
  object-fit: cover;
}
.article-content-2 {
  position: absolute;
  width: 35%;
  max-width: 509px;
  max-height: 480px;
  height: 70%;
  background: #ffffff;
  padding: 76px 39px 0;
}
.article-content-2 {
  right: 78px;
  top: 54px;
}
.head {
  font-size: 20px;
  line-height: 27px;
  color: rgba(28, 28, 28, 0.5);
}
.title {
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  color: #000000;
  line-height: 37px;
}
.sub-title {
  margin-top: 12px;
  font-size: 17px;
  line-height: 22px;
  color: rgba(28, 28, 28, 0.5);
}

.description {
  margin-top: 14px;
  font-size: 17px;
  line-height: 24px;
  color: #000000;
}
</style>