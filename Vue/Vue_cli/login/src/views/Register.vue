<template>
  <div class="register-form">
    <h2 class="title">Create an account</h2>
    <form action="" v-on:submit.prevent="register">
      <p class="input-name">EMAIL</p>
      <input type="text" class="form-control" v-model="email" required />
      <p class="input-name">USERNAME</p>
      <input type="text" class="form-control" v-model="userName" required />
      <p class="input-name">PASSWORD</p>
      <input type="password" class="form-control" v-model="passWord" required />
      <p class="input-name">PHONE NUMBER</p>
      <input type="text" class="form-control" v-model="phoneNumber" required />
      <button type="submit" class="btn-register">Register</button>
      <p class="login" @click="$router.push('/login')">
        Already have an account?
      </p>
      <p class="policy">
        By registering, you agree to Alaak <span>Teams of Service</span> and
        <span>Privacy policy</span>
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      passWord: "",
      userName: "",
      phoneNumber: "",
    };
  },
  methods: {
    register() {
      axios
        .post("https://60db1cba801dcb0017290e71.mockapi.io/v1/users", {
          name: this.userName,
          passWord: this.passWord,
          email: this.email,
          phoneNumber: this.phoneNumber,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.register-form {
  position: absolute;
  background-color: rgb(40, 40, 40);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 40px 30px;
  border-radius: 5px;
}
.title {
  color: rgba(250, 250, 250, 0.9);
  text-align: center;
}
.input-name {
  text-align: left;
  color: rgba(250, 250, 250, 0.5);
  font-size: 13px;
  margin-top: 20px;
}
.form-control {
  width: 100%;
  padding: 10px 20px;
  background-color: rgb(32, 32, 32);
  outline: none;
  border: 1px solid#000;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 20px;
  color: rgba(250, 250, 250, 0.9);
}
.btn-register {
  width: 100%;
  padding: 12px 0;
  border-radius: 5px;
  background-color: darkslategray;
  outline: none;
  border: none;
  margin-top: 20px;
  cursor: pointer;
}
.btn-register:hover {
  opacity: 0.7;
}
.login {
  margin-top: 10px;
  color: deepskyblue;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
}
.policy {
  margin-top: 20px;
  text-align: left;
  color: rgba(250, 250, 250, 0.5);
  font-size: 13px;
}
.policy span {
  color: deepskyblue;
  cursor: pointer;
}
</style>