<template>
  <div class="edit-box">
    <h2 class="title"><slot name="title">Change your username</slot></h2>
    <p class="sub-title">
      <slot name="sub-title">Enter a new username and existing password</slot>
    </p>
    <form action="" v-on:submit.prevent="update"  v-on:keyup.enter="update" >
      <p class="input-name" ref="formName">
        <slot><span>USERNAME</span> </slot>
      </p>
      <input type="text" class="form-control" v-model="newInfo" required />
      <p class="input-name">CURRENT PASSWORD</p>
      <input type="password" class="form-control" v-model="passWord" required />
      <p class="inform" v-show="wrongPassWord">Your password is not correct</p>
      <div class="btn-area">
        <button class="btn-cancel" @click.prevent="closeForm">Cancel</button>
        <button type="submit" class="btn-done" autofocus>Done</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      value: true,
      newInfo: "",
      passWord: "",
      wrongPassWord: false,
    };
  },
  methods: {
    closeForm() {
      this.$emit("cancel");
    },
    closeFormEdited() {
      this.$emit("edited");
    },
    async update() {
      const response = await axios.get(
        "https://60db1cba801dcb0017290e71.mockapi.io/v1/users/" +
          this.$route.params.id
      );
      if (this.passWord === response.data.passWord) {
        this.wrongPassWord = false;
        switch (this.$refs.formName.textContent) {
          case "USERNAME":
           await axios
              .put(
                "https://60db1cba801dcb0017290e71.mockapi.io/v1/users/" +
                  this.$route.params.id,
                {
                  name: this.newInfo,
                }
              )
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            break;
          case "PHONENUMBER":
            await axios
              .put(
                "https://60db1cba801dcb0017290e71.mockapi.io/v1/users/" +
                  this.$route.params.id,
                {
                  phoneNumber: this.newInfo,
                }
              )
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            break;
          case "EMAIL":
            await axios
              .put(
                "https://60db1cba801dcb0017290e71.mockapi.io/v1/users/" +
                  this.$route.params.id,
                {
                  email: this.newInfo,
                }
              )
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        this.closeFormEdited();
      } else {
        this.wrongPassWord = true;
      }
    },
  },
};
</script>

<style scoped>
.edit-box {
  width: 435px;
  background-color: rgb(40, 40, 40);
  padding: 20px 20px 0;
  border-radius: 8px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

.title {
  color: rgba(250, 250, 250, 0.9);
  text-align: center;
}
.sub-title {
  text-align: center;
  color: rgba(250, 250, 250, 0.5);
  font-size: 13px;
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
  padding: 8px 20px;
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
.btn-area {
  height: 64px;
  background-color: rgb(32, 32, 32);
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: flex-end;
}
.btn-cancel {
  width: 95px;
  height: 35px;
  margin-right: 10px;
  color: rgba(250, 250, 250, 0.9);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.btn-done {
  width: 95px;
  height: 35px;
  color: rgba(250, 250, 250, 0.9);
  background-color: darkslategray;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}
</style>