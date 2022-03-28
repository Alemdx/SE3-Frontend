<template>
  <div class="myrelease">
  <div>
    <h1 style="margin-right:30%">我的发布</h1>
    <el-button v-on:click="createtask" type="primary"  class="el-icon-plus" plain style="margin-left:70%;color:red">发布任务</el-button>
  </div>
    <template v-for="site in sites">
      <div>
        <el-descriptions title="任务信息">
        <el-descriptions-item label="任务名称">{{site.name}}</el-descriptions-item>
        <el-descriptions-item label="所需工人数量">{{site.workerNum}}</el-descriptions-item>
        <el-descriptions-item label="任务类型">
        <el-tag size="small">{{site.type}}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="任务简介">{{site.brief}}</el-descriptions-item>
        </el-descriptions>
      </div>
    </template>
  </div>
</template>
<style scoped>
.myrelease{
    margin-left: 10%;
}
</style>
<script>
import userService from "../services/userService";
export default {
    data() {
    return {
      sites:{},
    };
  },
  methods: {
    createtask: function (event) {
      //   alert('Hello ')
      this.$router.push("/publisher/taskrelease");
    },
  },
  created() {
  let content = userService.getpublisherTasks();
  content.then(
    (response) => {
      if (response.status === 200) {      
        this.sites = response.data.data
        console.log(this.sites)
      } else {

      }
    },
    (error) => {
      console.log(error);
    }
  );
  } 
};
</script>