<template>
  <div id="taskreport">
    <el-card class="box-card">
    <template v-for="site in sites" >
      <div style="margin-top:5%">
        <el-descriptions title="报告信息">
        <el-descriptions-item label="任务描述">{{site.description}}</el-descriptions-item>
        <el-descriptions-item label="设备信息">{{site.equipmentInfo}}</el-descriptions-item>
        <el-descriptions-item label="复现步骤">{{site.recoverySteps}}</el-descriptions-item>
        </el-descriptions>
      </div>
    </template>
    </el-card>
    <el-card class="box-card">
      <div class="block">
        <p style="margin-left: ">提交报告</p>
        <!-- 必选参数上传的地址  -->
        <p>缺陷情况说明</p>
        <el-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="sizeForm.description"
        >
        </el-input>
        <div style="margin: 20px 0"></div>
        <p>缺陷复先步骤</p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="请输入内容"
          v-model="sizeForm.recoverySteps"
        >
        </el-input>
        <p>测试设备信息</p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="请输入内容"
          v-model="sizeForm.equipmentInfo"
        >
        </el-input>
        <p>图片上传</p>
        <input type="file" ref="input"/>
        <el-button
          size="small"
          type="primary"
          @click="mysubmit"
          style="margin-top: 30px"
          >确认提交</el-button
        >
      </div>
    </el-card>
  </div>
</template>
<style scoped>
.text {
  font-size: 30px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 900px;
  height: 600px;
  margin-left: 10%;
}
#taskreport {
  display: flex;
  flex-direction: row;
  padding-top: 5%;
}
</style>
<script>
import userService from "../services/userService";
export default {
   created() {
    let content = userService.getreportinfo(this.$route.params.id);
    console.log(this.$route.params.id)
    content.then(
      (response) => {
        if (response.data.code === "200") {
          // this.sites = response.data.data
          this.sites = response.data.data;
          console.log(this.sites);
        } else {
          alert("获取任务失败");
        }
      },
      (error) => {
        console.log(error);
      }
    );},
  data() {
    return {
      sizeForm: {
        description: "",
        equipmentInfo: "",
        recoverySteps: "",
      },
      fileList: [],
      sites:{},
    };
  },
  methods: {  
    //提交按钮
    mysubmit() {
      let formData = new FormData();
      console.log(this.sizeForm.description)
      console.log(this.sizeForm.equipmentInfo)
      console.log(this.sizeForm.recoverySteps)
      formData.append("description", this.sizeForm.description);
      formData.append("equipmentInfo", this.sizeForm.equipmentInfo);
      formData.append("recoverySteps", this.sizeForm.recoverySteps);
      formData.append("file", this.$refs.input.files[0]);
      let content = userService.uploadReport(formData,this.$route.params.id);
      content.then(
        (response) => {
          console.log(response.data)
          if (response.data.code === "200") {
            alert("创建成功！");
          } else {
            alert("获取任务失败");
          }
        },
        (error) => {
            console.log(error)
            console.log(this.$route.params.id)
        }
      );
    },
  },
};
</script>