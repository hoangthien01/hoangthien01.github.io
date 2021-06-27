<template>
  <div class="recent-post-contain">
    <div class="recent-post-content">
      <div
        class="recent-post"
        v-for="(blog, index) in blogs.slice(3)"
        :key="index"
        @click="$router.push('/blog/' + blog.id)"
      >
        <div class="blog-image">
          <img :src="blog.image" alt="" srcset="" />
        </div>
        <div class="blog-content" style="flex: 1; margin-left: 37px">
          <p class="head">{{ blog.head }}</p>
          <h2 class="title">{{ blog.title }}</h2>
          <p class="sub-title">{{ blog.subTitle }}</p>
          <p class="description">{{ blog.description }}</p>
        </div>
      </div>
    </div>
    <div class="tag-contain">
      <h4>tags.</h4>
      <ul class="list-tags">
        <li v-for="(tag, index) in tags" :key="index">{{ tags[index] }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blogs", "tags"],
};
</script>

<style scoped>
.recent-post-contain {
  /* width: 812px; */
  width: 100%;
  margin: 0 auto;
  padding: 0 121px 76px;
  display: flex;
}
.recent-post-content {
  width: 80%;
}
.recent-post {
  display: flex;
  cursor: pointer;
  margin-top: 63px;
  padding-right: 100px;
}
.blog-image {
  width: 35%;
  max-height: 200px;
}
.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.tag-contain {
  width: 20%;
  margin-top: 63px;
}
.tag-contain h4 {
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  color: #1c1c1c;
}
.list-tags {
  list-style: none;
}
.list-tags li {
  font-size: 19px;
  line-height: 45px;
  color: #000000;
  cursor: pointer;
}
.list-tags li:hover {
  color: #0e1ea7;
  text-decoration: underline;
}
.head {
  font-size: 20px;
  line-height: 24px;
  color: rgba(28, 28, 28, 0.5);
}
.title {
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #000000;
  line-height: 39px;
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