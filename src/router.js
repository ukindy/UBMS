import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// pages
// import second from './pages/second.vue'

const router = new Router({
  mode: "hash", //去掉url中的#
  routes: [{
      path: "/",
      component: () => import("@/components/Main"),
      children: [{
        path: "/",
        component: () => import("@/components/Index")
      }],
      redirect: "/index" //在children的后面加一个redirect：'/想要默认展示的子路由名字'
    },
    {
      path: "/login",
      component: () => import("@/components/Login")
    },
    {
      path: "/404",
      component: () => import("@/components/404")
    }
  ]

})

router.beforeEach((to, from, next) => {
  // console.log(
  //   "**********************************************router start**********************************************")
  // console.log(to)
  // console.log(to.path)
  // console.log(to.path.slice(1))
  // console.log(from)
  // console.log(next)
  // console.log(
  //   "**********************************************router end**********************************************")
  // // http:// 或 https:// 转跳外链
  let httpIndex = to.path.indexOf('http://');
  let httpsIndex = to.path.indexOf('https://');
  if (httpIndex != -1) {
    // console.log(to.path.slice(httpIndex))
    window.open(to.path.slice(httpIndex)) // 在另外新建窗口中打开窗口
    return
  }

  if (httpsIndex != -1) {
    // console.log(to.path.slice(httpsIndex))
    window.open(to.path.slice(httpsIndex)) // 在另外新建窗口中打开窗口
    return
  }

  if (to.matched.length === 0) {
    next("/404"); //匹配前往的路由不存在
  } else {
    next(); //如果匹配到正确跳转
  }
})
/**
 * 重写路由的push方法
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router;
