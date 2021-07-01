<template>
  <div class="login-form">
    <div class="info">
      <h2 class="title">Welcome back!</h2>
      <p class="sub-title">We're so excited to see you again!</p>
      <form action="" v-on:submit.prevent="login">
        <p class="input-name">EMAIL</p>
        <input type="text" class="form-control" v-model="email" required/>
        <p class="input-name">PASSWORD</p>
        <input type="password" class="form-control" v-model="passWord" required/>
        <p class="inform" v-show="wrongPassWord">
          Your password is not correct
        </p>
        <p class="forgot">Forgot your password?</p>
        <button type="submit" class="btn-login">Login</button>
        <p class="register">
          Need an account? <span @click="$router.push('/')">Register</span>
        </p>
      </form>
    </div>
    <div class="more-info">
      <div class="qr-code">
        <img src="../assets/image/qr.png" alt="" srcset="" />
      </div>
      <h2 class="qr-title">Log in with QR Code</h2>
      <p class="qr-description">
        Scan this with Mobile app to log in instantly
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      passWord: "",
      wrongPassWord: false,
      user: {},
    };
  },
  methods: {
    async login() {
      const response = await axios.get(
        "https://60db1cba801dcb0017290e71.mockapi.io/v1/users?email=" +
          this.email
      );
      response.data.forEach((user) => {
        if (user.email === this.email && user.passWord == this.passWord) {
            // this.$route.params.id = user.id;
            this.$store.commit("SET_CURRENTUSER",user.id)
            this.$router.push("/users");
            console.log(user.id)
        }
      });
      this.wrongPassWord = true;
    },
  },
};
</script>

<style scoped>
.info {
  width: 55%;
}
.login-form {
  width: 780px;
  position: absolute;
  background-color: rgb(40, 40, 40);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 40px 30px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
}
.title {
  color: rgba(250, 250, 250, 0.9);
  text-align: left;
}
.sub-title {
  color: rgba(250, 250, 250, 0.5);
  text-align: left;
  margin-top: 10px;
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
.inform {
  text-align: left;
  color: rgb(199, 58, 58);
  margin-top: 5px;
  font-size: 14px;
}
.forgot {
  margin-top: 10px;
  color: deepskyblue;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
}
.btn-login {
  width: 100%;
  padding: 12px 0;
  border-radius: 5px;
  background-color: darkslategray;
  outline: none;
  border: none;
  margin-top: 20px;
  cursor: pointer;
}
.btn-login:hover {
  opacity: 0.7;
}
.register {
  margin-top: 10px;
  text-align: left;
  color: rgba(250, 250, 250, 0.5);
  font-size: 13px;
}
.register span {
  color: deepskyblue;
  cursor: pointer;
}
.more-info {
  width: 40%;
}
.qr-code {
  width: 150px;
  height: 150px;
  overflow: hidden;
  background-color: #fff;
  margin: 30px auto 0;
}
.qr-code img {
  width: 100%;
  object-fit: cover;
}
.qr-title {
  color: rgba(250, 250, 250, 0.9);
  margin-top: 30px;
}
.qr-description {
  color: rgba(250, 250, 250, 0.8);
  margin-top: 10px;
}
</style>