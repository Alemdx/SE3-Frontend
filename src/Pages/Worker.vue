<template>
    <div id="worker"> 
    <el-card class="box-card" style="flex:0.75;">
        <div >
        <h3 style=" color: black">我的菜单</h3>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title"
                ><router-link to="/worker/mytask">我的任务</router-link></span
              >
            </template>
            <el-menu-item-group>
              <span slot="title">任务一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="任务二">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title"><router-link to="/worker/browse">任务广场</router-link></span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/worker/profile">个人信息</router-link></span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-card>
      <el-card class="box-card" style="flex:3.35;margin-left:2%;margin-right:3%">
              <div>
        <router-view></router-view>
      </div>
    </el-card>
    </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 200px;
}
#worker{
  display:flex;
  flex-direction: row;
  padding-top: 5%;
  padding-bottom:5%;
  padding-left: 3%;
}
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
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  //这段代码是什么意思？
  // methods: {
  //   handleOpen(key, keyPath) {
  //     console.log(key, keyPath);
  //   },
  //   handleClose(key, keyPath) {
  //     console.log(key, keyPath);
  //   },
  // },
    mounted(){
    this.$router.push("/worker/mytask");
  },
};

</script>

