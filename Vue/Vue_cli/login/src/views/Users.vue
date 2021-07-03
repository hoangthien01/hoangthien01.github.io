<template>
<div>
  <Nav @searchUsers="searchUsersByName"></Nav>
  <div class="home-contain">
    <h1 class="title">List Users</h1>
    <div class="list-users">
      <p
        v-for="(user, index) in users"
        :key="index"
        @click="$router.push('/user/' + user.id)"
        class="user"
      >
        {{ user.name }}
      </p>
    </div>
  </div>
</div>
</template>

<script>
import Nav from "../components/common/Nav.vue";
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async searchUsersByName(nameUser) {
       try {
        const response = await axios.get(
          "https://60db1cba801dcb0017290e71.mockapi.io/v1/users?name=" +
            nameUser
        );
        this.users = response.data
      } catch(error) {
        console.log(error)
      }
    }
  },
  async created() {
    const response = await axios.get(
      "https://60db1cba801dcb0017290e71.mockapi.io/v1/users"
    );
    this.users = response.data;
        console.log('users');
    console.log(this.users);
  },
  components: {
    Nav
  }
};
</script>

<style scoped>
.home-contain {
  width: 70%;
  max-width: 1000px;
  margin: 30px auto 0;
  padding: 0 30px;
}
.title {
  color: rgba(250, 250, 250, 0.9);
}
.list-users {
  background-color: rgba(250, 250, 250, 0.9);
  height: 500px;
  margin-top: 30px;
  padding: 20px;
}
.user {
  font-size: 22px;
  color: rgba(0, 0, 0, 0.8);
  margin-right: 20px;
  cursor: pointer;
  line-height: 30px;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  margin-bottom: 15px;
}
</style>