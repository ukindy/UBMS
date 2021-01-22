import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state: {
    //存放的键值对就是所要管理的状态
    dynamic: {
      isMobile: false,
      showMenu: false,
      modalName: null,
      screenWidth:1920,
      theme: '#122665',
      themeSon: '#1b5ca5',
      themeGrandson: '#3a8dcc',
      simulationRequest: 'https://uworkplace.cn/static/simulationRequest/',
      requestUrl: 'https://uworkplace.cn/static/simulationRequest/',
    },
    login: {},
    cache: {}
  }
})

export default store
