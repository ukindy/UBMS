<template>
  <div class="u-sidebar right message" :class="$store.state.dynamic.modalName=='message'?'active':''">
    <div class="padding-lr flex justify-between align-center border-bottom" style="height: 70px;">
      <span>消息</span>
      <span class="uiIcon-close pointer padding" @click="$store.state.dynamic.modalName=null"></span>
    </div>
    <iframe class="shadow border bg-black" src="https://uworkplace.cn/GMUMarket" style="box-shadow: 1px 1px 50px rgba(0,0,0,.3);width: 100%;height: calc(100vh - 70px);"></iframe>
  </div>

</template>

<script>
</script>

<style>
</style>
