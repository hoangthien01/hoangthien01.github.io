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
  max-height: 600px;
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
  background: #ffffff;
  padding: 76px 40px 40px;
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
@media (min-width: 576px) {  }

@media (max-width: 767.98px) {  }

@media (min-width: 768px) and (max-width: 991.98px) { 
  .article-content-2 {
  padding: 20px 10px;
  top: 20px;
}
.title {
  font-size: 19px;
  line-height: 22px;
}
.sub-title,.description,.head {
  font-size: 14px;
  line-height: 18px;
}
.sub-title {
  margin-top: 5px;
}
.description{
  margin-top: 10px;
}
 }

@media (min-width: 992px) and (max-width: 1199.98px) {
.article-content-2{
  padding: 40px 20px 30px;
}
.title {
  font-size: 22px;
  line-height: 26px;
}
.sub-title,.description,.head {
  font-size: 15px;
  line-height: 17px;
}
.sub-title {
  margin-top: 5px;
}
 }
</style>