<template>
  <div class="up-login bg-gray light">
    <div class="ui-loginForm flex shadow" :style="$store.state.dynamic.isMobile?'flex-direction:column;padding: 0 0;':'padding: 0 20%;'">
      <div class="flex-sub bg-white  padding-lr-xl" :class="$store.state.dynamic.isMobile?'':'flex align-center'">
        <div class="" style="width: 100%;padding: 80px 8%;position: relative;">
          <div class="u-logo padding-lr flex align-center" @click="$router.push('/index')">
            <img class="image margin-right-xs" src="@/assets/img/logo.png">
            <span class="text-xl">EMS</span>
          </div>
          <div>
          </div>
          <h2>登陆</h2>
          <el-form label-position="left" label-width="80px" :model="formLogin">
            <el-form-item label="用户名">
              <el-input v-model="formLogin.usr"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="formLogin.psd" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <div class="flex align-center justify-between">
                <el-button type="primary" @click="onSubmit">立即登陆</el-button>
                <el-checkbox v-model="rememberMe">记住我</el-checkbox>
              </div>
            </el-form-item>
          </el-form>
          <div class="border-bottom padding-bottom">
            <span class="text-sm pointer">忘记密码？</span>
          </div>
          <div class="flex justify-between padding-top">
            <div class="text-sm">
              <span class="text-gray">没有账号？</span>
              <span class="pointer text-theme">注册</span>
            </div>
            <div>
              <img src="@/assets/img/qq.png" class="pointer" style="width: 20px;height: 20px;background-color: rgba(0,0,0,0);" />
              <img src="@/assets/img/wechat.png" class="margin-left-xs pointer" style="width: 20px;height: 20px;background-color: rgba(0,0,0,0);" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex-sub bg-blue light">
        <el-carousel :interval="5000" :style="$store.state.dynamic.isMobile?'margin:200px auto;':'margin-top:200px;'"
          style="">
          <el-carousel-item>
            <img src="@/assets/img/logo.png" style="width: 100%;height: 100%;">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/qq.png" style="width: 100%;height: 100%;">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/wechat.png" style="width: 100%;height: 100%;">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
  let that
  export default {
    data() {
      return {
        formLogin: {
          usr: '',
          psd: '',
        },
        rememberMe: false
      }
    },
    components: {},
    created() {
      that = this
    },
    mounted() {

    },
    methods: {
      onSubmit() {
        that.$axios.get('/static/api/login.json', {})
          .then(res => {
            that.$router.replace('/')
          })
          .catch(() => {
            that.$message.error('服务器链接错误！')
          })
      }

    }
  }
</script>


<style>
  .up-login {
    height: 100vh;
    overflow-y: scroll;
  }

  .ui-loginForm {
    /* padding: 0 20%; */
    min-height: 100%;
  }

  .ui-loginForm.flex .flex-sub {
    min-height: 100%;
  }
</style>
