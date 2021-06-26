<template>
  <div class="editor-pick">
    <h1 class="editor-pick-head">Editor’s Picks</h1>
    <div class="line"></div>
    <div class="editor-pick-content">
      <div
        class="editor-pick-blog"
        v-for="(blog, index) in blogs.slice(0, 3)"
        :key="index"
        @click="$router.push('/blog/' + blog.id)"
      >
        <div class="image">
          <img :src="blog.image" alt="" srcset="" />
        </div>
        <div style="width: 50%">
          <p class="head">{{ blog.head }}</p>
          <h2 class="title">{{ blog.title }}</h2>
          <p class="sub-title">{{ blog.subTitle }}</p>
          <p class="description">{{ blog.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blogs"],
};
</script>

<style scoped>
.editor-pick {
  width: 900px;
  margin: 50px auto 0;
}
.editor-pick-head {
  font-size: 42px;
  line-height: 57px;
  text-align: center;
  color: #1c1c1c;
}
.line {
  width: 190px;
  margin: 10px auto 0;
  height: 3px;
  background-color: #1c1c1c;
}
.editor-pick-content {
  margin-top: 50px;
}
.editor-pick-blog {
  display: flex;
  margin-top: 63px;
  cursor: pointer;
}
.image {
  width: 50%;
  height: 300px;
  margin-right: 50px;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.head {
  font-size: 22px;
  line-height: 27px;
  color: rgba(28, 28, 28, 0.5);
}
.title {
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  color: #000000;
  line-height: 41px;
}
.sub-title {
  margin-top: 12px;
  font-size: 19px;
  line-height: 22px;
  color: rgba(28, 28, 28, 0.5);
}

.description {
  margin-top: 14px;
  font-size: 19px;
  line-height: 24px;
  color: #000000;
}
</style>