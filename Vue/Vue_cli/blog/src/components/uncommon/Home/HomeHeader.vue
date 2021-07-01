<template>
  <div>
    <div class="article">
      <img src="../../../assets/image/Article1.png" alt="" srcset="" />
      <div class="article-content-1">
        <p class="head">FEATURED ARTICLE</p>
        <h2 class="title">World’s Most Dangerous Technology Ever Made.</h2>
        <p class="sub-title">Ralph Hawkins - May 7, 2019 (10 mins read)</p>
        <p class="description">
          Proident aliquip velit qui commodo officia qui consectetur dolor
          ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex
          laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
          Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat
          velit magna.
        </p>
      </div>
    </div>
  </div>
</template>
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
.article-content-1 {
  position: absolute;
  width: 35%;
  max-width: 509px;
  max-height: 660px;
  background: #ffffff;
  padding: 68px 39px 40px;
  left: 70px;
  top: 0;
}

.head {
  font-size: 20px;
  line-height: 25px;
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
  .article-content-1 {
  padding: 20px 10px 20px;
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

@media (min-width: 992px) and (max-width: 1199.98px)  {
.article-content-1 {
  padding: 40px 20px 30px;
}
.title {
  font-size: 24px;
  line-height: 28px;
}
.sub-title,.description,.head {
  font-size: 16px;
  line-height: 20px;
}
.sub-title {
  margin-top: 5px;
}
 }

</style>