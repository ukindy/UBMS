// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import echarts from 'echarts' //引入echarts

import "./assets/css/main.css"
import "./assets/css/style.css"
import "./assets/css/icon.css"
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
Vue.use(ElementUI)
// Vue.prototype.$echarts = echarts

Vue.component("u-nav", () => import("@/components/utils/Nav.vue"))
Vue.component("u-header", () => import("@/components/utils/Header.vue"))
Vue.component("u-message", () => import("@/components/utils/Message.vue"))
Vue.component("u-notice", () => import("@/components/utils/Notice.vue"))
Vue.component("u-foot", () => import("@/components/utils/Foot.vue"))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  echarts,
  components: {
    App
  },
  template: '<App/>'
})
