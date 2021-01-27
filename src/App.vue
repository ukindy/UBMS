<template>
  <div id="app">
    <router-view :class="$store.state.dynamic.isMobile?'u-mobile':'u-pc'" />
  </div>
</template>

<script>
  let that
  export default {
    mounted() {
      that = this
      // console.log(that)
      // console.log(that.$store.state)
      // 注：window.onresize只能在项目内触发1次
      that.adjustScreen()
      that.$store.state.dynamic.showMenu = that.$store.state.dynamic.isMobile ? false : true
      window.onresize = function() {
        that.adjustScreen()
      }
    },
    methods: {
      adjustScreen() {
        that.$store.state.dynamic.isMobile = window.innerWidth < 1000
        that.$store.state.dynamic.screenWidth = window.innerWidth
      }
    }
  }
</script>


<style>
  #app {
    max-width: 100vw;
    overflow-x: hidden;
  }
</style>
