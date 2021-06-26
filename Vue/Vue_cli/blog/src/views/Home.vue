<template>
  <div class="main-contain">
    <HomeHeader></HomeHeader>
    <Blog1 :blogs="blogs"></Blog1>
    <Article></Article>
    <Blog2 :blogs="blogs" :tags="tags"></Blog2>
  </div>
</template>

<script>
import HomeHeader from "../components/uncommon/Home/HomeHeader.vue";
import Blog1 from "../components/uncommon/Home/Blog1.vue";
import Blog2 from "../components/uncommon/Home/Blog2.vue";
import Article from "../components/uncommon/Home/Article2.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    Blog1,
    Article,
    Blog2,
  },
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
      tags: [
        "Technology",
        "Open Source",
        "JavaScript",
        "Minimalism",
        "Self-help",
        "Animals",
        "Herbivores",
        "HTML",
        "CSS",
        "PHP",
        "Web Technologies",
        "Career",
        "Life",
        "Spirituality",
        "Food",
        "Cooking",
        "Sports",
        "Racing",
        "Mountain Hiking",
        "Cruising",
      ],
    };
  },
};
</script>

<style scoped>
.main-contain {
  margin-top: 74px;
}
</style>
