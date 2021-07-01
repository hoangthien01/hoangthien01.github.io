<template>
  <div class="user-info">
    <div class="head">
        <div>
            <i class="far fa-times-circle" @click="$router.push('/users')"></i>
        </div>
    </div>
    <div class="body">
      <div class="avatar">
        <div class="avatar-name">
          <div class="image">
            <img :src="user.avatar" alt="" srcset="" />
          </div>
          <span>{{ user.name }}</span>
        </div>
        <button class="btn-delete" @click="deleteUser">Delete</button>
      </div>
      <div class="infomation">
        <div class="line-wrap">
          <div>
            <p class="title">USERNAME</p>
            <p class="sub-title">{{ user.name }}</p>
          </div>
          <button class="btn-edit" @click="changeName = true">Edit</button>
        </div>
        <div class="line-wrap">
          <div>
            <p class="title">EMAIL</p>
            <p class="sub-title">{{user.email}}</p>
          </div>
          <button class="btn-edit" @click="changeEmail = true">Edit</button>
        </div>
        <div class="line-wrap">
          <div>
            <p class="title">PHONENUMBER</p>
            <p class="sub-title">{{ user.phoneNumber }}</p>
          </div>
          <button class="btn-edit" @click="changePhone = true">Edit</button>
        </div>
      </div>
    </div>
    <EditName v-if="changeName" @cancel="close"  @edited="close1"></EditName>
    <EditName v-if="changeEmail" @cancel="close" @edited="close1">
      <template v-slot:title> Enter an email address </template>
      <template v-slot:sub-title>
        Enter a new email address and your existing password
      </template>
      <span>EMAIL</span>
    </EditName>
    <EditName v-if="changePhone" @cancel="close"  @edited="close1">
      <template v-slot:title> Change your phonenumber </template>
      <template v-slot:sub-title>
        Enter a new phonenumber and your existing password
      </template>
      <span>PHONENUMBER</span>
    </EditName>
  </div>
</template>

<script>
import axios from "axios";
import EditName from "../components/uncommon/UserInfo/EditName.vue";
export default {
  components: { EditName },
  data() {
    return {
      user: {},
      changeName: false,
      changeEmail: false,
      changePhone: false,
    };
  },
  watch: {
    user (newval) {
      this.user = newval
      console.log('change')
      console.log(newval)
    }
  },
  methods: {
    close() {
      this.changeName = false;
      this.changeEmail = false;
      this.changePhone = false;
    },
    async close1 () {
      console.log('close1')
      this.close();
      const response = await axios.get(
      "https://60db1cba801dcb0017290e71.mockapi.io/v1/users/" +
        this.$route.params.id
    );
    this.user = response.data;
    console.log(this.user);
    },
    async deleteUser() {
      await axios
        .delete(
          "https://60db1cba801dcb0017290e71.mockapi.io/v1/users/" +
            this.$route.params.id
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
          this.$router.push("/users");
    },
  },
  async created() {
    const response = await axios.get(
      "https://60db1cba801dcb0017290e71.mockapi.io/v1/users/" +
        this.$route.params.id
    );
    this.user = response.data;
    console.log('created' +this.$route.params.id);
  },
};
</script>

<style scoped>
.user-info {
  width: 660px;
  position: relative;
  transform: translate(-50%,-50%);
  top: 50%;;
  left: 50%;
  
  border-radius: 10px;
  overflow: hidden;
}
.user-info::before {
  content: "";
  position: absolute;
  z-index: 1000;
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.1);
}
.head {
  height: 100px;
  background-color: goldenrod;
}
.head div {
    text-align: right;
    padding: 10px;
}
.head div i{
    font-size: 30px;
    cursor: pointer;
}
.body {
  background-color: rgb(32, 32, 32);
  padding: 70px 20px 20px;
  position: relative;
}
.image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
}

.image img {
  width: 100%;
}
.avatar {
  position: absolute;
  top: -18px;
  width: 93%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.avatar-name {
  display: flex;
  align-items: center;
}
.btn-delete {
  width: 86px;
  height: 28px;
  color: #fff;
  background-color: darkslategray;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  border: none;
}
.btn-delete:hover {
  opacity: 0.7;
}
.avatar span {
  color: rgba(250, 250, 250, 0.9);
  margin-left: 20px;
  font-size: 19px;
}
.infomation {
  color: #fff;
  background-color: rgb(40, 40, 40);
  border-radius: 8px;
  padding: 20px;
}
.line-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.line-wrap div {
  margin-top: 20px;
}
.title {
  text-align: left;
  color: rgba(250, 250, 250, 0.5);
  font-size: 13px;
}
.title:first-child {
  margin-top: 0;
}
.sub-title {
  text-align: left;
  color: rgba(250, 250, 250, 0.9);
  font-size: 14px;
  margin-top: 5px;
}
.btn-edit {
  width: 56px;
  height: 28px;
  color: #fff;
  background-color: rgba(250, 250, 250, 0.2);
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  border: none;
}
</style>