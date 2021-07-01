<template>
  <div class="blogs-contain">
    <slot>
      <div
        class="blog-item"
        v-for="(blog, index) in blogs"
        :key="index"
        @click="$router.push('/blog/' + blog.id)"
      >
        <div class="image">
          <img :src="blog.image" alt="" srcset="" />
        </div>
        <div class="blog-content">
          <p class="head">{{ blog.head }}</p>
          <h2 class="title">{{ blog.title }}</h2>
          <p class="sub-title">{{ blog.subTitle }}</p>
          <p class="description">{{ blog.description }}</p>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  data() {
    return {
      blogs: [
        {
          id: 0,
          head: "MINIMALISM",
          title: "Culpa sit Laboris Exercitation ea Fugiat",
          subTitle: "Leslie Pena - April 25, 2012 (6 mins read)",
          description:
            "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
          image: require("../assets/Blog/Blog0.jpeg"),
        },
        {
          id: 1,
          head: "TECHNOLOGY",
          title: " Amet non Ex Officia nulla Cupidatat",
          subTitle: "Jacob Henry-September 27, 2017 (8 mins read)",
          description:
            "Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit.",
          image: require("../assets/Blog/Blog1.jpeg"),
        },
        {
          id: 2,
          head: "ARTICLE",
          title: " Dolor ex Tempor Cotur Culpa li",
          subTitle: "Darrell Lane-May 16, 2017 (3 mins read)",
          description:
            "Incididunt sint nulla eu adipisicing eu reprehenderit proident consequat est. Nisi consectetur incididunt mollit officia ut cupidatat laborum proident eu velit Lorem deserunt deserunt voluptate. Proident nostrud laborum reprehenderit culpa irure id labore do ad do minim nisi. Incididunt ex.",
          image: require("../assets/Blog/Blog2.jpeg"),
        },
        {
          id: 3,
          head: "NATURE",
          title: "Tempor deserunt Sunt Qui",
          subTitle: "Connie Robertson - November 3, 2012",
          description:
            "Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.",
          image: require("../assets/Blog/Blog3.jpeg"),
        },
        {
          id: 4,
          head: "PLANTS",
          title: "Occaecat Anim eu Qui",
          subTitle: "Eleanor Williamson-September 28, 2014",
          description:
            "Qui ipsum consectetur ad incididunt et aliquip exercitation laboris nisi reprehenderit. Et excepteur commodo esse enim ea aliqua officia reprehenderit.",
          image: require("../assets/Blog/Blog4.jpeg"),
        },
        {
          id: 5,
          head: "FOOD",
          title: " Fugiat Incididunt Voluptate Consequat",
          subTitle: "Bessie Watson-June 13, 2012",
          description: "Mollit ea culpa ipsum pariatur eiusmod. Irure et.",
          image: require("../assets/Blog/Blog5.jpeg"),
        },
        {
          id: 6,
          head: "COLORFUL",
          title: "Occaecat Anim eu Qui",
          subTitle: "Ted Simmmons-June 21, 2015",
          description:
            "Amet ipsum occaecat aliqua aute nisi laboris nostrud culpa est do. Aliqua esse velit in excepteur esse qui voluptate laboris adipisicing qui irure elit amet excepteur.",
          image: require("../assets/Blog/Blog6.jpeg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.blogs-contain {
  margin-top: 74px;
  padding: 0 130px 50px;
}
.blog-item {
  display: flex;
  margin-top: 63px;
  cursor: pointer;
}
.blog-content {
  flex: 1;
}
.image {
  max-width: 475px;
  width: 50%;
  max-height: 270px;
  margin-right: 50px;
  overflow: hidden;
}
.image img {
  width: 100%;
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
@media (min-width: 576px) {  }

@media (max-width: 767.98px) { 
   .blogs-contain {
  padding: 0 100px 50px;
}
.blog-item{
  display: block;
}
.image {
  margin: 0 auto;
  width: 100%;
}
.blog-content {
  margin-top: 20px;
}
.title{
  font-size: 24px;
  line-height: 27px;
}
.sub-title,.head,.description {
  font-size: 16px;
  line-height: 20px;
}
.description {
  margin-top: 7px;
}
.sub-title {
  margin-top: 5px;
}
 }

@media (min-width: 768px) and (max-width: 991.98px) { 
 .blogs-contain {
  padding: 0 40px 50px;
}
.image {
  margin-right: 0;
  padding-right: 50px;
}
.title{
  font-size: 22px;
  line-height: 25px;
}
.sub-title,.head,.description {
  font-size: 14px;
  line-height: 17px;
}
.description {
  margin-top: 7px;
}
.sub-title {
  margin-top: 5px;
}
 }

@media (min-width: 992px) and (max-width: 1199.98px)  {
.blogs-contain {
  padding: 0 100px 50px;
}
.title{
  font-size: 26px;
  line-height: 30px;
}
.sub-title,.head,.description {
  font-size: 16px;
  line-height: 20px;
}
.description {
  margin-top: 7px;
}
.sub-title {
  margin-top: 5px;
}
 }
</style>