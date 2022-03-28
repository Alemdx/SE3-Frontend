<template>
  <div style="margin-left:10%">
  <div>
    <h1 style="margin-right:30%">我的任务</h1>
  </div>
    <template v-for="site in sites" >
      <div style="margin-top:5%" v-on:click="detailed(site.taskId)">
        <el-descriptions title="任务信息">
        <el-descriptions-item label="用户名">{{site.name}}</el-descriptions-item>
        <el-descriptions-item label="任务类型">{{site.type}}</el-descriptions-item>
        <el-descriptions-item label="发包方">{{site.userId}}</el-descriptions-item>
        <el-descriptions-item label="备注">
        <el-tag size="small">{{site.status}}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="任务结束时间">{{site.finishTime}}</el-descriptions-item>
        </el-descriptions>
      </div>
    </template>
  </div>
</template>
<style scoped>
</style>
<script>
import userService from "../services/userService";
export default {
    data() {
    return {
      sites:{},
    };
  },
  created() {
    let content = userService.getWorkerTasks();
    content.then(
      (response) => {
        // console.log(response.data)
        if (response.status === 200) {
        this.sites = response.data.data
        console.log(response.data)
        // console.log(this.sites)
          console.log("已经加载到了数据")
        // console.log(this.sites[0].name)
        } else {
          alert("获取任务失败");
        }
      },
      (error) => {
        console.log("error")
        console.log(error);
      }
    );
  },
  methods: {
    detailed: function (id) {
      // alert(id)
      this.$router.push
      ({
          path: `/worker/mytask/taskreport/${id}`,
        })
    }
  },
};
</script>