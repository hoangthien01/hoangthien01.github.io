<template>
  <div class="footer">
    <div class="content">
      <h2 class="title">want to connect?</h2>
      <p class="desciption">
        Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
        qui..
      </p>
      <div class="socials">
        <a href="#"> <i class="fab fa-twitter"></i> </a>
        <a href="#"> <i class="fab fa-instagram"></i></a>
        <a href="#"> <i class="fab fa-linkedin"></i> </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  margin: 0 35px;
  background-color: #1c1c1c;
  text-align: center;
  height: 390px;
  position: relative;
}
.title {
  left: 526px;
  top: 3551px;
  font-family: Libre Baskerville;
  font-size: 45px;
  text-align: center;
  color: #ffffff;
}
.content {
  width: 332px;
  max-height: 186px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.desciption {
  font-family: Open Sans;
  margin-top: 17px;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
}
.socials {
  margin-top: 17px;
}
.socials a {
  font-size: 30px;
  color: #fff;
  padding: 0 7.5px;
}
.socials a:hover i {
  transform: scale(1.2);
}
@media (min-width: 576px) {  }

@media (min-width: 768px) {  }

@media (min-width: 992px) {  }

@media (max-width: 1200px) {
.footer {
  height : 300px
}
.socials a {
  font-size: 26px;
}
.desciption {
  font-size: 17px;
  line-height: 21px;
}
.title {
  font-size: 40px;
}


}

</style>