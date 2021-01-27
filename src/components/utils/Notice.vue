<template>
  <div class="u-sidebar right notice" :class="$store.state.dynamic.modalName=='notice'?'active':''">
    <div class="title padding-lr flex justify-between align-center border-bottom" style="">
      <span class="padding-right" style="position: relative;">
        <span>通知</span>
        <span class='ui-tag badge lg'>99</span>
      </span>
      <span class="uiIcon-close pointer padding" @click="$store.state.dynamic.modalName=null"></span>
    </div>
    <div class="content">
      <div class="ui-card padding-top-xs">
        <div v-for="(item , i) in 10" :key="i" class="item borders padding-xs margin-bottom margin-lr-xs pointer">
          <div class="title padding-lr-xs flex justify-between align-center border-bottom">
            <span class="text-bold text-sm text-theme-son">
              <span>名字</span>
            </span>
            <span class="uiIcon-close pointer padding-sm" @click="$store.state.dynamic.modalName=null"></span>
          </div>
          <div class="content padding-tb padding-lr-xs flex align-start">
            <span class="ui-avatar lg round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></span>
            <span class="margin-left padding-top-xs">hello world!</span>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
</script>

<style>
  .u-sidebar.notice{
    /* position: relative; */
  }


  .ui-card>.item:hover {
    box-shadow: 0 0 5px 0 var(--theme);
    border: 1px solid var(--theme);
  }
</style>
