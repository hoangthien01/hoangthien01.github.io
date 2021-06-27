<template>
  <div class="wraper">
    <div class="login animate__animated animate__fadeIn">
      <h2>Welcome back!</h2>
      <p>Sign in to get the most out of nuntium</p>
      <form action=""  v-on:submit.prevent="$router.push({
      path: '/dashboard'
    })">
        <input
          class="form-control"
          type="text"
          placeholder="Username"
          v-model="user"
          required
        />
        <input
          class="form-control"
          type="password"
          placeholder="Password"
          v-model="password"
          required
        />
        <div class="subcontent">
          <input type="checkbox" id="check" />
          <label for="check">Remember me</label>
          <span>Forgot Password?</span>
        </div>
        <button
          type="submit"
          class="btn-submit"
        >
          Login
        </button>
        <!-- <div class="more">
          <a href=""><i class="fab fa-facebook-square"></i> Facebook</a>
          <a href=""><i class="fab fa-google"></i>Google </a>
        </div> -->
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.wraper {
  /* width: 100%;
  height: 80vh;
  background-color: rgb(98, 184, 124);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%; */
}
.login {
  width: 400px;
  height: 430px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  text-align: center;
  padding: 30px;
  border: 1px solid #000;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.85);
}

.login h2 {
  font-size: 35px;
}
.login p {
  font-size: 20px;
  margin-top: 14px;
}
.form-control {
  font-size: 20px;
  width: 100%;
  height: 50px;
  background: #f8f8f8;
  border-radius: 10px;
  margin-top: 23px;
  border: none;
  outline: none;
  padding: 0 10px;
}
.subcontent {
  margin: 13px 0;
  left: 0;
  display: flex;
  align-items: center;
}
.subcontent input {
  width: 18px;
  height: 17px;
  margin-right: 5px;
  border: 1px solid #1c1c1c;
  box-sizing: border-box;
  border-radius: 5px;
}
.subcontent span,
.subcontent label {
  font-family: Open Sans;
  color: rgba(28, 28, 28, 0.5);
  font-size: 15px;
  cursor: pointer;
}
.subcontent span:last-child {
  margin-left: 105px;
}
.btn-submit {
  margin-top: 30px;
  width: 100%;
  height: 50px;
  border: 2px solid #1c1c1c;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  font-size: 24px;
  font-family: Libre Baskerville;
  background-color: #fff;
}
.btn-submit:hover {
  background-color: rgb(31, 46, 36);
  color: #fff;
}
.more {
  margin-top: 15px;
  display: flex;
  height: 35px;
  justify-content: space-between;
}
.more a {
  display: block;
  width: 47%;
  height: 35px;
  background-color: #1877f2;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
}
.more a:hover {
  opacity: 0.9;
}
.more a i {
  line-height: 35px;
  margin-right: 10px;
}
</style>
