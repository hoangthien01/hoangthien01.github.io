<template>
  <div class="author">
    <div class="left">
      <p>ABOUT THE AUTHOR</p>
      <img src="../../../assets/image/Profile1.png" alt="" srcset="" />
    </div>
    <div class="right">
      <p class="title">Arthur Black</p>
      <p class="sub-title">@arthurblack</p>
      <p class="description">
        Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam
        tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur
        ex sunt id mollit commodo ipsum deserunt quis.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Author",
};
</script>

<style scoped>
.author {
  display: flex;
  margin: 72px 0 50px;
}
.left {
  width: 33%;
}
.left p {
  font-family: Open Sans;
  font-size: 20px;
  line-height: 27px;
  color: rgba(28, 28, 28, 0.5);
}
.right {
  width: 67%;
}
.title {
  font-family: Libre Baskerville;
  font-weight: bold;
  font-size: 40px;
  line-height: 41px;
  color: #1c1c1c;
  margin-top: 20px;
}
.sub-title {
  font-size: 18px;
  line-height: 22px;
  color: rgba(28, 28, 28, 0.5);
}
.description {
  margin-top: 13px;
  font-size: 18px;
  line-height: 22px;
  color: #1c1c1c;
}
</style>