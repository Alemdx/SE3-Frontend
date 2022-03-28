<template>
  <div id="app">
  <router-view/>
  </div>
</template>

<script>
export default {
  //   mounted(){
  //   this.$router.push("/login");
  // },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5%; 
  margin-bottom: 5%;
  background-color: #fde8c6;
}
</style>
