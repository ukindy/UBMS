<template>
  <div class="u-header  padding-lr text-lg">
    <div class="content flex justify-between align-center">
      <div>
        <span class="uiIcon-list padding-xs pointer" @click.stop="$store.state.dynamic.showMenu=!$store.state.dynamic.showMenu"></span>
        <span class="uiIcon-full padding-xs pointer" @click="toggleFullscreen" v-if="!$store.state.dynamic.isMobile"></span>
        <span class="uiIcon-search padding-xs pointer" @click="$store.state.dynamic.modalName='search'"></span>
      </div>
      <div class="flex align-center">
        <span class="uiIcon-mark padding-xs pointer" @click="$store.state.dynamic.modalName='message'"></span>
        <span class="uiIcon-notice padding-xs pointer" @click="$store.state.dynamic.modalName='notice'"></span>
        <el-popover placement="bottom" title="名字" width="200" trigger="click"  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          <el-button class="bg-img" size="medium" circle slot="reference" style="width: 40px;height: 40px;background-size: cover;background-position: center;background-repeat: no-repeat;" :style="{backgroundImage:'url(https://uworkplace.cn/img/uice.jpg)'}"></el-button>
          <img class="ui-avatar lg round pointer" style="background-color: rgba(0,0,0,0)" src="@/assets/img/logo.png">
        </el-popover>

      </div>

    </div>

    <form ref="formSearch" @keyup.enter="handleSubmitSearch(true)">
      <div class="ui-search-input flex justify-between align-center bg-white" :class="$store.state.dynamic.modalName=='search'?'active':''">
        <input type="text" v-model="formSearch.text" class="form-control search-input" placeholder="请输入关键字...">
        <button class="bg-white text-df" @click="$store.state.dynamic.modalName=null" type="button"><span class="uiIcon-close"></span></button>
      </div>
    </form>
  </div>
</template>

<script>
  let that
  export default {
    data() {
      return {
        formSearch: {
          text: ''
        }
      }
    },
    components: {},
    mounted() {
      that = this
    },

    methods: {
      toggleFullscreen() {
        return (
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement ?
          document.exitFullscreen ?
          document.exitFullscreen() :
          document.msExitFullscreen ?
          document.msExitFullscreen() :
          document.mozCancelFullScreen ?
          document.mozCancelFullScreen() :
          document.webkitExitFullscreen && document.webkitExitFullscreen() :
          document.documentElement.requestFullscreen ?
          document.documentElement.requestFullscreen() :
          document.documentElement.msRequestFullscreen ?
          document.documentElement.msRequestFullscreen() :
          document.documentElement.mozRequestFullScreen ?
          document.documentElement.mozRequestFullScreen() :
          document.documentElement.webkitRequestFullscreen &&
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          ),
          !1
        )
      },

      handleSubmitSearch() {
        if (!that.formSearch.text.length) {
          that.$message('搜索内容不能为空！')
          return
        }
        console.log(that.formSearch)
      }
    }
  }
</script>


<style>
  .ui-search-input {
    position: absolute;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 100%;
  }

  .ui-search-input.active {
    bottom: 0 !important;
  }

  .ui-search-input input,
  .ui-search-input button {
    height: 100%;
  }

  .ui-search-input input {
    text-indent: 1em;
    font-size: .8em;
    width: calc(100% - 80px);
  }

  .ui-search-input button {
    width: 70px;
  }
</style>
