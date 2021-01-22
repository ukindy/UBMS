<template>
  <div class="up-main" :class="$store.state.dynamic.showMenu?'show-u-sidebar-menu':''">
    <div class="u-sidebar left">
      <div class="u-logo padding-lr flex align-center">
        <img class="image margin-right" src="../assets/imgs/logo.png">
        <span class="text-xl">EMS</span>
      </div>
      <u-nav class="padding-lr"></u-nav>
    </div>
    <div class="u-content">
      <u-header></u-header>
      <div class="upc padding-top-xs">
        <router-view class="padding-lr" style="min-height: calc(100% - 60px);"></router-view>
        <u-foot></u-foot>
      </div>
      <div class="u-shade" :class="$store.state.dynamic.showMenu?'active':''" @click="$store.state.dynamic.showMenu=false;$store.state.dynamic.modalName=null"></div>
      <u-message></u-message>
      <u-notice></u-notice>
    </div>
    <!-- <iframe class="shadow border bg-black"  src="https://uworkplace.cn/GMUMarket" style="box-shadow: 1px 1px 50px rgba(0,0,0,.3);position: fixed;bottom: 0;right: 0;width: 300px;height: 600px;"></iframe> -->
  </div>
</template>

<script>
  let that
  export default {
    data() {
      return {}
    },
    components: {},
    mounted() {
      that = this
    },

    methods: {}
  }
</script>

<style>

</style>
