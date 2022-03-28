<template>
  <div style="margin-left: 5%">
    <div>
      <h1 style="margin-right: 20%">任务广场</h1>
    </div>
    <div id="taskground">
      <template v-for="site in sites">
        <el-card
          class="box-card"
          style="width: 220px; margin-left: 20px; margin-bottom: 10px"
        >
          <div slot="header" class="clearfix">
            <span>{{ site.name }}</span>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              v-on:click="say(site.taskId)"
              >了解详情</el-button
            >
          </div>
          <div>任务类型 : {{ site.type }}</div>
          <div>工人数量 :{{ site.workerNum }}</div>
          <div>任务状态 : {{ site.status }}</div>
          <div>任务结束时间 : {{ site.finishTime }}</div>
        </el-card>
      </template>
    </div>
  </div>
</template>
<style scoped>
#taskground {
  /* background-color: aqua; */
  margin-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
<script>
import userService from "../services/userService";
import axios from "axios";

export default {
  created() {
    let content = userService.getAllTasks();
    content.then(
      (response) => {
        if (response.data.code === "200") {
          // this.sites = response.data.data
          this.sites = response.data.data;
          // console.log(this.sites);
        } else {
          alter("获取任务失败");
        }
      },
      (error) => {
        console.log(error);
      }
    );

    // const API_URL = "http://1.116.83.75:9999/";
    // const response =  axios.get(API_URL + "task-info/getAllTasks", {
    //   headers: authHeader(),
    // });
    console.log("created");
    // console.log(response);
    // return response;
  },
  data() {
    return {
      sites: [],
    };
  },
  methods: {
    say: function (id) {
      this.$router.push
      ({
          path: `/singletask/${id}`,
        })
      
    }
  },
};
</script>
