<template>
    <div class="newtask">
      <h2>新建任务</h2>
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="margin-left:20%"
      >
        <el-form-item label="任务名称" prop="name" style="width: 400px">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="测试类型" prop="type" style="width: 400px">
          <el-select v-model="ruleForm.type" placeholder="请选择任务种类">
            <el-option label="功能测试" value="funtest"></el-option>
            <el-option label="性能测试" value="etest"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始时间" required style="width: 400px">
          <el-col :span="11">
            <el-form-item prop="startTime">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.startTime"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="结束时间" required style="width: 400px">
          <el-col :span="11">
            <el-form-item prop="finishTime">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.finishTime"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="任务标签" prop="label" style="width: 400px">
          <el-checkbox-group v-model="ruleForm.label">
            <el-checkbox label="a" name="label"></el-checkbox>
            <el-checkbox label="b" name="label"></el-checkbox>
            <el-checkbox label="c" name="label"></el-checkbox>
            <el-checkbox label="d" name="label"></el-checkbox>
            <el-checkbox label="f" name="label"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="工人数量" prop="num" style="width: 400px">
          <el-input v-model="ruleForm.workerNum"></el-input>
        </el-form-item>
        <el-form-item label="任务描述" prop="desc" style="width: 400px">
          <el-input type="textarea" v-model="ruleForm.brief"></el-input>
        </el-form-item>
        <input type="file" ref="input" style="width:150px;margin-right:10%" />
      </el-form>
          <el-button type="primary" @click="submitForm" style="margin-top:2%">立即创建</el-button>
    </div>
</template>
<style scoped>
.newtask {
  padding-right: 8%;
  margin-left: 10%;
}
/* #outer {
  display: flex;
  flex-direction: row;
  padding-top: 5%;
} */
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>
<script>
import userService from "../services/userService";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        type: "",
        startTime: "",
        finishTime: "",
        label: [1],
        workerNum: 1,
        brief: "",
      },
    };
  },
  methods: {
    submitForm() {
      let formData = new FormData();
      formData.append("name", this.ruleForm.name);
      formData.append("type", this.ruleForm.type);
      formData.append("startTime", this.ruleForm.startTime);
      formData.append("finishTime", this.ruleForm.finishTime);
      formData.append("label", this.ruleForm.name);
      formData.append("workerNum", this.ruleForm.workerNum);
      formData.append("brief", this.ruleForm.brief);
      formData.append("file", this.$refs.input.files[0]);
      let content = userService.publishTask(formData);
      content.then(
        (response) => {
          if (response.data.code === "200") {
            console.log(typeof task);
            alert("创建成功！");
          } else {
            alter("获取任务失败");
          }
        },
        (error) => {
          console.log(this.$refs.input.files[0]);
          console.log(error);
        }
      );
    },
  },
};
</script>       