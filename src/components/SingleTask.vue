<template>
  <el-card class="box-card" style="margin-left:25%">
    <el-form
      ref="form"
      :model="sizeForm"
      label-width="100px"
      size="mini"
      style="width: 800px; margin-top: 10%"
    >
      <el-form-item label="任务名称" style="width: 800px; height: 50px">
        <span>{{ sizeForm.name }}</span>
      </el-form-item>
      <el-form-item label="任务类型" style="width: 800px; height: 50px">
        <span>{{ sizeForm.type }}</span>
      </el-form-item>
      <el-form-item label="开始时间" style="width: 800px; height: 50px">
        <span>{{ sizeForm.startTime }}</span>
      </el-form-item>
      <el-form-item label="结束时间" style="width: 800px; height: 50px">
        <span>{{ sizeForm.finishTime }}</span>
      </el-form-item>
      <el-form-item label="发布者" style="width: 800px; height: 50px">
        <span>{{ sizeForm.userId }}</span>
      </el-form-item>
      <el-form-item label="详细描述" style="width: 800px; height: 50px">
        <span>{{ sizeForm.brief }}</span>
      </el-form-item>
      <el-form-item label="任务状态" style="width: 800px; height: 50px">
        <span>{{ sizeForm.status }}</span>
      </el-form-item>
      <el-form-item id="btngroup">
        <el-button type="primary" @click="ondownload">立即下载资源</el-button>
        <el-button type="primary" @click="onsubmit" style="margin_left:1%">添加到我的任务</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped>
#btngroup {
  display: flex;
  flex-direction: row;
}
.text {
  font-size: 30px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 900px;
  height: 700px;
  margin-left: 10%;
}
</style>
<script>
import userService from "../services/userService";
export default {
  created() {
    let content = userService.getsingleTask(this.$route.params.id);
    content.then(
      (response) => {
        if (response.data.code === "200") {
          // this.sites = response.data.data
          this.sizeForm = response.data.data;
        } else {
          alert("获取任务失败");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  },
  data() {
    return {
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: "",
        resource: "",
        desc: "",
        files: [],
      },
    };
  },
  methods: {
    ondownload() {
      console.log(this.sizeForm.files[0].fileId);
      window.open(
        "http://1.117.157.26:9999/file-info/download/" +
          this.sizeForm.files[0].fileId
      );
    },
    onsubmit() {
      console.log(this.$route.params.id)
      let content = userService.uptomytastks(this.$route.params.id);
      content.then(
        (response) => {
          if (response.data.code === "200") {
            console.log("该任务已经成功提交到了列表中")
          } else {
            alert("获取任务失败");
          }
        },
        (error) => {
          console.log(error);
        }
      );
      console.log("submit!");
    },
  },
};
</script>