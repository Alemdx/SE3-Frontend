<template>
  <div class="logincss">
    <div
      id="particles-js"
      style="display: flex; align-items: center; justify-content: center"
    >
      <canvas
        class="particles-js-canvas-el"
        width="1960"
        height="1692"
        style="width: 100%; height: 100%"
      ></canvas>
    </div>
    <div class="context">
      <div class="container">
        <h1 class="text">协作式众包测试平台</h1>
        <form name="form" @submit.prevent="handleLogin">
          <input v-model="user.userId" type="text" placeholder="请输入账号" required />
          <input
            v-model="user.password"
            type="password"
            placeholder="请输入密码"
            required
          />
          <!-- <input  v-model="code" type="text"  name="verCode" placeholder="请输入验证码"   required >
	                <div class="ver" id="verify" ></div> -->
          <input type="submit" value="Submit"/>
          
          <!-- <button type="submit" id="btn_submit" v-on:click="login">Login</button>					 -->
        </form>
        <router-link to="/register">还没有账号 ？注册账号</router-link>
      </div>
    </div>
  </div>
</template>
<script scoped>
import axios from 'axios'
import User from "../models/user";
import authService from '../services/authService'
export default {
  data() {
    return {
      user: new User("", ""),
    };
  },

  methods: {
    handleLogin() {
      // console.log("fun")
      if (this.user.userId && this.user.password) {
        authService.login(this.user).then(
            response =>{
              if(response.data.code === "200"){
                let identity = response.data.data.identity
                if(identity === 1){
                  //admin
                  this.$router.push("/manage")
                }else if (identity ===2 ){
                  //publisher
                  this.$router.push("/publisher")

                }else{
                  //user
                  this.$router.push("/worker")

                }
              }
            },
            error =>{
              console.log(error);
              alert("登录失败")
            }
          )
        // this.$store.dispatch("auth/login", this.user).then(
        //   response => {
        //     if(response.code === "200"){
        //       console.log("200");
        //       // this.$router.push("/publisher");

        //     }else{
        //       console.log("0");
        //     }
        //     // console.log(response);
        //     // console.log("aaa");
        //   },
        //   error => {
        //     this.loading = false;
        //     console.log(error);
        //   }
        // );
      }
    },
  },
};
</script>

<style>
.logincss {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;

  /*Fallback if gradeints don't work */
  /* background: #141e6e; */
  /*Linear gradient... */
  background: radial-gradient(at center, #0075c3, #000b61);
}
.register_btn {
  filter: Alpha(opacity=0.3);
  -moz-opacity: 0.3;
  opacity: 0.3;
}
.text {
  color: black;
}
.apImgTitle {
  position: fixed;
  width: 42%;
  left: 30%;
  top: 30%;
}

.apTitle {
  font-size: 40px;
  color: #fff;
  position: fixed;
  top: 32%;
  width: 100%;
  text-align: center;
}

.logcon {
  position: fixed;
  width: 30%;
  top: 49%;
  right: 30%;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
}
.logcon input {
  padding: 10px 15px;
  border-radius: 3px;
  border: none;
  margin-right: 10px;
  width: 220px;
}

.logcon button {
  padding: 7px 20px 10px 20px;
  border: none;
  background: #fff;
  border-radius: 3px;
}

.logcon button:hover {
  cursor: pointer;
}

/* canvas {
	display: block;
	vertical-align: bottom;
} */

#particles-js {
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.cs {
  margin-top: 2%;
}
.context {
  /* background: #f7f8f8; */
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 400px;
  margin-top: -200px;
  overflow: hidden;
}
.container {
  max-width: 600px;
  height: 500px;
  padding: 10px 0;
  text-align: center;
  margin: 0 auto;
}
.container h1 {
  font-size: 40px;
  font-weight: 300;
}
/* form {
  padding: 20px 0;
} */
form input {
  border: 1px solid rgb(201, 41, 233);
  width: 220px;
  padding: 10px 15px;
  display: block;
  margin: 0 auto 10px auto;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
}
form button {
  background: rgb(212, 27, 197);
  border: 0;
  padding: 10px 15px;
  color: green;
  border-radius: 8px;
  width: 250px;
  font-size: 16px;
  margin-bottom: 20px;
}
form button:hover {
  background: rgb(27, 170, 111);
}
.ver {
  margin-bottom: 10px;
}
</style>
