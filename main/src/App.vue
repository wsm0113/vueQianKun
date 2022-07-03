<template>
  <div id="app">
    <layoutHomeVue>
      <router-view></router-view>
      <div id="#subapp-container"></div>
    </layoutHomeVue>
  </div>
</template>
<script>
import layoutHomeVue from "./layout/layout-home.vue";
export default {
  name: "AppContainer",
  components: {
    layoutHomeVue,
  },
};
</script>

<style lang="stylus">
#app
  width 100%
  height: 100%
  font-size: 15px
  // font-family Avenir, Helvetica, Arial, sans-serif
  // -webkit-font-smoothing antialiased
  // -moz-osx-font-smoothing grayscale
  // text-align center
  // color #2c3e50
  // margin-top 60px
</style>
