<template>
  <div class="nav-contain">
    <input type="text" class="form-control" v-model="inputSearch" />
    <div class="search-icon">
      <i class="fas fa-search"></i>
    </div>
    <div class="profile">
      <div class="image">
        <img :src="user.avatar" alt="" srcset="" />
      </div>
      <span class="name-user">{{ user.name }}</span>
      <div class="profile-content">
        <p class="title">Hi, {{ user.name }}</p>
        <ul class="list-setting">
          <li><i class="fas fa-folder"></i>Manage Subcription</li>
          <li><i class="fas fa-cog"></i>Setting</li>
          <li @click="$router.push('/login')">
            <i class="fas fa-sign-out-alt"></i>Logout
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      inputSearch: "",
      idUser: "",
      user: {},
    };
  },
  computed: {
    currentUser () {
      return this.$store.getters.currentUser;
    }
  },
  async created() {
    console.log(this.$route.params.id);
    const response = await axios.get(
      "https://60db1cba801dcb0017290e71.mockapi.io/v1/users/" +
        this.currentUser
    );
    this.user = response.data;
  },
};
</script>

<style scoped>
.nav-contain {
  height: 57px;
  border-bottom: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;
  position: relative;
  /* background-color: rgb(48, 48, 48); */
}
.form-control {
  width: 300px;
  padding: 8px 20px;
  background-color: rgb(48, 48, 48);
  /* background-color: rgb(14, 13, 13); */
  outline: none;
  border: 1px solid#000;
  border-radius: 5px;
  font-size: 20px;
  color: rgba(250, 250, 250, 0.9);
}
.search-icon {
  display: block;
  width: 58px;
  height: 58px;
  line-height: 58px;
  margin-right: 30px;
  cursor: pointer;
}
.search-icon i {
  color: rgba(250, 250, 250, 0.9);
  font-size: 20px;
}
.image {
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
  object-fit: contain;
  border: 3px solid #ccc;
}
.profile {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}
.profile::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 30px;
  background-color: transparent;
  top: 30px;
}
.profile:hover .profile-content {
  display: block;
}
.profile-content {
  content: "";
  display: none;
  position: absolute;
  width: 192px;
  background-color: rgb(48, 48, 48);
  /* background-color: rgb(14, 13, 13); */
  right: 0px;
  top: 140%;
  border-radius: 8px;
  z-index: 1000;
  overflow: hidden;
}
.profile-content::before {
  content: "";
  height: 30px;
  position: absolute;
  border: 25px solid;
  border-color: transparent transparent rgb(14, 13, 13) transparent;
  top: -70px;
  right: 5px;
}
.title {
  color: rgba(250, 250, 250, 0.9);
  font-size: 15px;
  text-align: left;
  padding: 10px 10px 0;
  cursor: default;
  user-select: none;
}
.list-setting {
  list-style: none;
}
.list-setting li {
  color: rgba(250, 250, 250, 0.9);
  text-align: left;
  cursor: pointer;
  padding: 10px;
}
.list-setting li:hover {
  background-color: darkslategray;
}
.list-setting li i {
  margin-right: 5px;
}
.image img {
  width: 100%;
}
.name-user {
  color: rgba(250, 250, 250, 0.9);
  margin-left: 10px;
  font-size: 20px;
}
</style>