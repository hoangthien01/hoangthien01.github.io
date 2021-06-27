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
  height: 600px;
}
.article img {
  width: 100%;
  object-fit: cover;
}
.article-content-1 {
  position: absolute;
  width: 35%;
  max-width: 509px;
  height: 80%;
  max-height: 460px;
  background: #ffffff;
  padding: 68px 39px 0;
}
.article-content-1 {
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
</style>