<template>
  <div class="sidebar">
    <div class="bg">
      <p><span>nu</span>ntium.</p>
    </div>
    <ul class="navigation">
      <li>
        <div class="image">
          <img src="../../assets/image/grid1.png" alt="" srcset="" />
        </div>
        <span> Dashboard </span>
      </li>
      <li>
        <div class="image">
          <img src="../../assets/image/user.png" alt="" srcset="" />
        </div>
        <span> Profile </span>
      </li>
      <li>
        <div class="image">
          <img src="../../assets/image/edit.png" alt="" srcset="" />
        </div>
        <span> Write a Post </span>
      </li>
      <li>
        <div class="image">
          <img src="../../assets/image/book-open.png" alt="" srcset="" />
        </div>
        <span> All Posts </span>
      </li>
      <li>
        <div class="image">
          <img src="../../assets/image/box.png" alt="" srcset="" />
        </div>
        <span> Resources </span>
      </li>
      <li>
        <div class="image">
          <img src="../../assets/image/settings.png" alt="" srcset="" />
        </div>
        <span> Settings </span>
      </li>
      <li>
        <div class="image">
          <img src="../../assets/image/help-circle.png" alt="" srcset="" />
        </div>
        <span> Settings </span>
      </li>
    </ul>
    <button class="logout" @click="$router.push('/home')">Logout</button>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
  width: 225px;
  height: 100%;
  left: 0px;
  top: 0px;
  background: #3b3f44;
  position: fixed;
}

.bg {
  width: 58px;
  height: 57px;
  background-color: #fff;
  position: relative;
  margin: 30px 0 0 30px;
  cursor: pointer;
}
.bg p {
  position: absolute;
  display: block;
  z-index: 10000;
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 57px;
  width: 162px;
  margin-left: 23px;
  color: #fff;
  letter-spacing: 1.2px;
}
.bg p span {
  color: #000;
}
.navigation {
  margin-top: 60px;
}
.navigation li {
  font-size: 20px;
  line-height: 22px;
  padding: 17px 30px;
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.navigation li:hover {
  background: #545a61;
}
.image {
  display: inline-block;
  width: 25px;
  height: 25px;
  object-fit: cover;
}
.image img {
  width: 100%;
}

.navigation span {
  margin-left: 10px;
}
.logout {
  background-color: transparent;
  width: 70px;
  height: 30px;
  right: 77.5px;
  top: 580px;
  position: absolute;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
</style>