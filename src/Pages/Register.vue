<template>
  <div class="reg">
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
    <div class="registerbox">
      <p style="color: black; margin-left: 10%; font-size: 30px">立即注册</p>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="margin-left: 20%"
      >
        <el-form-item label="用户名" prop="name" style="width: 500px">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <!-- 这里做了修改 -->
        <el-form-item label="用户密码" prop="password" style="width: 500px">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <!-- <el-form-item label="用户邮箱" prop="mail" style="width: 500px">
          <el-input v-model="ruleForm.mail"></el-input>
        </el-form-item> -->
        <!-- 这里做了修改 -->
        <el-form-item label="用户分组" prop="group" style="width: 500px">
          <el-select
            v-model="ruleForm.group"
            placeholder="用户类型"
            style="width: 400px"
          >
            <el-option label="发包方" value="publisher"></el-option>
            <el-option label="众包工人" value="worker"></el-option>
            <el-option label="管理员" value="admin"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            style="margin-right: 20%"
            >立即创建</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import User from "../models/user";
import authService from '../services/authService'
export default {
  //     mounted() {
  //     let script = document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.src = '../../static/login1.js';
  //     document.body.appendChild(script);
  // },
  data() {
    return {
      user: new User("", ""),
      ruleForm: {
        name: "",
        group: "",
        password: "",
        // mail: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户姓名", trigger: "blur" },
          { min: 3, max: 15, message: "长度在3-15个字符", trigger: "blur" },
        ],
        password: [
          {
            required: true,
            message: "请输入用户密码，长度在6-15个字符",
            trigger: "blur",
          },
          { min: 6, max: 15, message: "长度在6-15个字符", trigger: "blur" },
        ],
        // mail: [
        //   { required: true, message: "请输入邮箱", trigger: "blur" },
        //   { min: 2, max: 20, trigger: "blur" },
        // ],
        group: [
          { required: true, message: "请选择你的用户分组", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.group === "admin") {
            this.user.identity = 1;
          } else if (this.ruleForm.group === "publisher") {
            this.user.identity = 2;
          } else {
            this.user.identity = 3;
          }
          this.user.userId = this.ruleForm.name
          this.user.password =this.ruleForm.password
          // this.user.email = this.ruleForm.mail;
          authService.register(this.user).then(
            response =>{
              if(response.data.code === "200"){
                  this.$router.push('/login')
              }else{
                  alert("注册失败")
              }
            },
            error =>{
              console.log(error);
            }
          )
          // this.$store.dispatch('auth/register', this.user).then(
          //   response => {

          //       if(response.code){
          //         console.log("wrong");
          //         alert("注册失败，用户名重复")
          //         // this.$router.push('/hello')
          //       }else{
          //         this.$router.push('/login')

          //       }
          //       console.log("right")
          //     // }
          //   } ,
          //   error =>{
          //     console.log(error)
          //   }
          // )

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style>
/* html, */
.reg {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;

  /*Fallback if gradeints don't work */
  background: #141e6e;
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
  color: rgb(219, 38, 38);
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
.registerbox {
  width: 50%;
  margin: auto;
  margin-top: 10%;
  padding-bottom: 5%;
  padding-top: 5%;
  padding-left: 1%;
  padding-right: 3%;
  /* background:rgb(240, 240, 241); */
}
</style>
