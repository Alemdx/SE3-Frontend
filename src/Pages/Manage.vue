<template>
  <div>
    <h3 style="margin-right: 85%; color: black">我的菜单</h3>
    <div >
      <div style="float:left;width:20%">
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
                >发布任务</span
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
            <span slot="title">任务广场</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/profile">个人信息</router-link></span>
          </el-menu-item>
        </el-menu>
      </div>
      <div style="margin-left:2%;float:right;width:78%">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 200px;
}
</style>
<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
    mounted(){
    this.$router.push("/manage/profile");
  },
};

</script>

