<template>
  <div class="up-page404 text-center flex align-center justify-center" style="height: 100vh;">
    <div>
      <div class="text-theme-son milky" style="font-size: 8em;">404</div>
      <h3 class="text-theme-grandson">界面走丢了</h3>
      <h4 class="text-theme-grandson">This page could not be load</h4>
      <h4>
        <span class="ui-btn pointer margin-right-xs" @click="$router.push('/')">网站首页</span>
        <span class="ui-btn pointer margin-left-xs" @click="$router.go(-1)">返回前页</span>
      </h4>
    </div>
  </div>
</template>

<script>
</script>

<style >
  .milky {
    font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
    /* text-shadow: 0 8px 9px var(--theme-son), 0px -2px 1px #fff; */
    font-weight: bold;
    text-align: center;
  }
</style>
