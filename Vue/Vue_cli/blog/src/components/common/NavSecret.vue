<template>
  <div class="navSecret">
    <div class="nav-content">
      <div class="search-contain">
        <input
          type="text"
          class="search animate__animated animate__fadeIn"
          v-show="typing"
        />
        <i class="fas fa-search search-icon" @click="toggle"></i>
      </div>
      <i
        class="far fa-bell bell-icon"
        @mouseover="mouseInSide = true"
        @mouseleave="mouseInSide = false"
        :class="{ 'animate__animated animate__tada': mouseInSide }"
      ></i>
      <div class="profile">
        <img src="../../assets/image/profile.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavSecret",
  data() {
    return {
      typing: false,
      mouseInSide: false,
    };
  },
  methods: {
    toggle() {
      this.typing = !this.typing;
    },
  },
};
</script>

<style scoped>
.navSecret {
  height: 57px;
}
.nav-content {
  width: 600px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  float: right;
  position: relative;
}
.profile {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}
.profile img {
  width: 100%;
}
.bell-icon {
  display: inline-block;
  font-size: 30px;
  margin: 0 35px;
  cursor: pointer;
}

.search {
  font-size: 20px;
  width: 363px;
  padding: 10px 20px;
  color: #000;
  border: 2px solid #1c1c1c;
  border-radius: 10px;
  outline: none;
}
.search-icon {
  position: absolute;
  font-size: 27px;
  top: 9px;
  right: 155px;
  line-height: 40px;
  cursor: pointer;
}
</style>