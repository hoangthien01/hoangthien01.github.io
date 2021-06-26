<template>
  <div>
    <div class="dashboard">
      <p>Dashboard</p>
      <button class="btn-custom">Customize</button>
    </div>
    <div class="memo">
      <div class="list-card">
        <div class="total-posts">
          <p class="title">Total Posts</p>
          <div class="info">
            <img src="../assets/image/totalposts.png" alt="" class="icon" />
            <span class="text">{{ totalPosts }}</span>
          </div>
          <p class="time">This month</p>
        </div>
        <div class="total-views">
          <p class="title">Total Views</p>
          <div class="info">
            <img src="../assets/image/totalviews.png" alt="" class="icon" />
            <span class="text">{{ totalViews }}K</span>
          </div>
          <p class="time">This month</p>
        </div>
        <div class="most-viewed">
          <p class="title">Most Viewed Article</p>
          <div class="info">
            <span>The Most Awesome Article Man Has Ever Written</span>
          </div>
          <p class="time">This month</p>
        </div>
      </div>
      <div class="main-content">
        <p class="main-content-head">Total Views</p>
        <div class="main-content-image">
          <img src="../assets/image/Graph.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  created() {
    this.counter();
  },
  data() {
    return {
      totalPosts: 0,
      totalViews: 0,
    };
  },
  methods: {
    counter() {
      setInterval(() => {
        if (this.totalPosts < 214) this.totalPosts++;
        if (this.totalViews < 130) this.totalViews++;
      }, 10);
    },
  },
};
</script>

<style scoped>
.dashboard {
  padding: 10px 42px;
  display: flex;
  justify-content: space-between;
  background: #fafafa;
  margin-top: 20px;
}
.dashboard p {
  font-family: Libre Baskerville;
  font-size: 30px;
  line-height: 32px;
}
.btn-custom {
  width: 94px;
  height: 35px;
  border: 2px solid #1c1c1c;
  border-radius: 5px;
  cursor: pointer;
}
.memo {
  margin-top: 25px;
}
.list-card {
  display: flex;
}
.total-posts,
.total-views,
.most-viewed {
  margin-left: 37px;
  width: 176px;
  height: 107px;
  border: 2px solid rgba(28, 28, 28, 0.35);
  border-radius: 10px;
  padding: 10px;
}
.most-viewed {
  flex: 1;
}
.most-viewed .info span {
  font-size: 29px;
  text-align: center;
  color: #1c1c1c;
}
.title {
  font-family: Roboto;
  font-size: 16px;
  line-height: 16px;
  color: #1c1c1c;
}
.icon {
  width: 33px;
  height: 33px;
}
.text {
  display: inline-block;
  font-family: Libre Baskerville;
  font-size: 40px;
  line-height: 41px;
  color: #1c1c1c;
  margin-left: 23px;
}
.info {
  margin: 5px 0;
  font-family: Libre Baskerville;
}
.time {
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: rgba(28, 28, 28, 0.5);
  text-align: right;
}
.main-content {
  padding: 25px 0 25px 37px;
}
.main-content-head {
  font-family: Libre Baskerville;
  font-weight: bold;
  font-size: 30px;
  line-height: 32px;
  color: #1c1c1c;
  margin-bottom: 27px;
}
.main-content-image {
  object-fit: cover;
}
.main-content-image img {
  width: 100%;
}
</style>