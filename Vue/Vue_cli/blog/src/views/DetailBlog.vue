<template>
  <div class="blog-detail">
    <Head :image="activeBlog.image"></Head>
    <div class="content">
      <div class="blog-memo">
        <p class="title">{{ activeBlog.title }}</p>
        <p class="sub-title">{{ activeBlog.subTitle }}</p>
        <p class="tag">#{{ activeBlog.head }}</p>
        <p class="description">{{ activeBlog.description }}</p>
        <p class="description">
          Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore.
          Aliquip consectetur labore consectetur dolor exercitation est minim
          quis. Magna non irure qui ex est laborum nulla excepteur qui. Anim
          Lorem dolore cupidatat pariatur ex tempor. Duis ea excepteur proident
          ex commodo irure est.
        </p>
        <p class="description">
          Nisi commodo qui pariatur enim sint laborum consequat enim in officia.
          Officia fugiat incididunt commodo et mollit aliqua non aute. Enim
          dolor eiusmod aliqua amet ipsum in enim eiusmod. Quis exercitation sit
          velit duis.
        </p>
        <p class="description">
          Est Lorem labore consectetur minim sit eu eiusmod mollit velit.
          Consectetur voluptate ex amet id eiusmod laborum irure. Aliquip ad qui
          id exercitation irure amet commodo nisi quis. Occaecat minim
          incididunt eiusmod nostrud veniam quis culpa.Nisi ipsum et consequat
          id deserunt excepteur. Cillum non pariatur culpa ut occaecat laboris
          eu. Ullamco ad Lorem et elit laboris eu qui irure nulla qui culpa et.
          Cupidatat sunt ipsum proident aute exercitation do tempor aliqua
          cupidatat quis non exercitation. Adipisicing do minim dolore nulla
          mollit. Adipisicing incididunt irure ipsum et in esse ipsum elit
          tempor.
        </p>
      </div>
      <Author></Author>
    </div>
  </div>
</template>

<script>
import Head from "../components/uncommon/Blog/Head.vue";
import Author from "../components/uncommon/Blog/Author.vue";
export default {
  components: {
    Head,
    Author,
  },
  computed: {
    activeBlog() {
      return this.blogs[this.$route.params.id];
    },
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
    };
  },
};
</script>

<style scoped>
.blog-detail {
  margin-top: 74px;
}
.content {
  width: 652px;
  margin: 54px auto 0;
}
.title {
  font-family: Libre Baskerville;
  font-weight: bold;
  font-size: 50px;
  line-height: 58px;
  text-align: center;
  color: #000000;
}
.sub-title,
.tag {
  margin-top: 17px;
  font-size: 22px;
  line-height: 22px;
  color: rgba(28, 28, 28, 0.5);
  text-align: center;
}
.tag {
  margin-top: 13px;
}
.description {
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  margin-top: 26px;
}
</style>