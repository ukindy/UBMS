<template>
  <div class="u-foot bg-white margin-top-sm border-top" :style="$store.state.dynamic.isMobile?'':'height: 50px;'"
    :class="$store.state.dynamic.isMobile?'padding-tb':'flex justify-between align-center'">
    <div class="text-bold">UEMS</div>
    <div class="text-content" :class="$store.state.dynamic.isMobile?'flex flex-direction':''">
      <span>Copyright © 2020</span>
      <span class="text-bold pointer" @click="$router.push('https://uworkplace.cn')">uice</span>
      <span>All Rights Reserved</span>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .u-foot {
    box-shadow: 0 0 12px 0 rgba(55, 73, 72, .06);
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
