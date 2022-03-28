import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
// import Navi from '../components/Navi.vue'
import Login from "../Pages/Login.vue"; // 登录界面
import Register from "../Pages/Register.vue"; // 注册界面
import Publisher from "../Pages/Publisher.vue"; // 发布方
import Profile from "../components/Profile.vue"; // 个人主页
import Browse from "../components/Browse.vue"; //任务广场
import Release from "../components/Release.vue"; //任务发布
import Worker from "../Pages/Worker.vue"; // 众包工人
import Manage from "../Pages/Manage.vue"; // 管理员
import TaskRelease from "../components/TaskRelease.vue"; //新建任务
import Mytask from "../components/MyTask.vue"; // 众包工人的业务界面
import SingleTask from "../components/SingleTask.vue"; // 任务广场的单个任务，可以用来下载资源
import TaskReport from "../components/TaskReport.vue"; //众包工人在线填写众测报告，包括但不限于如下部分：出现缺陷的应用截图、缺陷情况说明、缺陷复先步骤（从应用启动到缺陷出现的操作步骤）、测试设备信息等。
import userService from "../services/userService";
import authService from "../services/authService";
// 懒加载方式  然后当路由被访问的时候才加载对应组件，这样就更加高效了
// const Login=()=>import('../Login.vue')
// 每个路由规则是一个对象，包括路径、路由名字，和路径匹配的组件
Vue.use(Router);
const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "登录",
      component: () => import("../Pages/Login.vue")
    },
    {
      path: "/hello",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/publisher",
      name: "publisher",
      component: Publisher,
      children: [
        {
          path: "/publisher/profile",
          component: Profile
        },
        {
          path: "/publisher/browse",
          component: Browse
        },
        {
          path: "/publisher/release",
          component: Release
        },
        {
          path: "/publisher/taskrelease",
          component: TaskRelease
        }
        // {
        //   path: "/singletask/:id",
        //   component: SingleTask
        // },
      ]
    },
    {
      path: "/worker",
      name: "worker",
      component: Worker,
      children: [
        {
          path: "/worker/profile",
          component: Profile
        },
        {
          path: "/worker/browse",
          component: Browse
        },
        {
          path: "/worker/mytask",
          component: Mytask
        },
        // {
        //   path: "/singletask/:id",
        //   component: SingleTask
        // },
        {
          path: "/worker/mytask/taskreport/:id",
          component: TaskReport
        }
      ]
    },
    {
      path: "/manage",
      name: "manage",
      component: Manage,
      children: [
        {
          path: "/manage/profile",
          component: Profile
        },
        {
          path: "/manage/browse",
          component: Browse
        }
      ]
    },
    {
      path: "/singletask/:id",
      component: SingleTask
    },
  ]
});

router.beforeEach((to, from, next) => {
  const API_URL = "http://1.117.157.26:9999/";
  const localToken = localStorage.getItem("token");
  if (to.name === "login" || to.name === "register") {
    next();
  } else {
    if (localToken !== null) {
      console.log("token exit ");
      const theResponse = axios.get(API_URL + "task-info/getAllTasks", {
        headers: {
          token: localToken
        }
      });
      theResponse.then(
        response =>{
          next()
          console.log("successful");
        },
        error =>{
          next({ name: "login" });
          console.log("failed");

        }
      )
    } else {
      next({ name: "login" });
    }
  }

});
export default router;
