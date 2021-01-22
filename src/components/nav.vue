<template>
  <div class="u-nav">
    <div class="item" :class="item.active?'active':''" v-for="(item,i) in list" :key="i">
      <div class="title" @click="toggleShow(i)" v-if="item.list.length">
        <div class="">
          <span :class="'uiIcon-'+item.icon"></span>
          <span class="padding-left">{{item.title}}</span>
        </div>
        <div class="uiIcon-back"></div>
      </div>
      <div class="title" @click="$router.push(item.url)" v-else>
        <div class="">
          <span :class="'uiIcon-'+item.icon"></span>
          <span class="padding-left">{{item.title}}</span>
        </div>
        <div class=""></div>
      </div>

      <div class="content" :style="item.active?'height:'+(item.list.length*30+10)+'px':''">
        <div class="action pointer" v-for="(citem,j) in item.list" :key="j" @click="$router.push(citem.url)">{{citem.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [''],
    data() {
      return {
        list: [{
            'title': '信息教学',
            'url': '',
            'active': false,
            'icon': 'home',
            'list': [{
              'title': '教务管理系统',
              'url': 'http://jw.gzmtu.edu.cn'
            }, {
              'title': '网络教学专网',
              'url': 'http://wljx.gzmtu.edu.cn'
            }, {
              'title': '网络自主学习平台',
              'url': 'http://cct.gzmtu.edu.cn'
            }, {
              'title': '尔雅网络课程平台',
              'url': 'http://gzmtu.fanya.chaoxing.com/portal'
            }]
          },
          {
            'title': '教学管理',
            'url': '',
            'active': false,
            'icon': 'same',
            'list': [{
              'title': '教务管理',
              'url': '/jxgl/jwgl'
            }, {
              'title': '考务管理',
              'url': '/jxgl/kwgl'
            }, {
              'title': '学籍管理',
              'url': '/jxgl/xjgl'
            }, {
              'title': '学位管理',
              'url': '/jxgl/xwgl'
            }, {
              'title': '办事流程',
              'url': '/jxgl/bslc'
            }]
          },
          {
            'title': '信息材料',
            'url': '',
            'active': false,
            'icon': 'baby',
            'list': [{
              'title': '校历',
              'url': '/xxcl/xl'
            }, {
              'title': '培训办班申请表',
              'url': '/info/pxbbsqb'
            }, {
              'title': '教务信箱',
              'url': '/info/jwxx'
            }]
          },
          {
            'title': '课程建设',
            'url': 'http://jwc.gzmtu.edu.cn/kcjs.htm',
            'active': false,
            'icon': 'repair',
            'list': [{
              'title': '省级精品课程',
              'url': '/kcjs/sjjpkc'
            }, {
              'title': '校级精品课程',
              'url': '/kcjs/xjjpkc'
            }, {
              'title': '优秀网络课程',
              'url': '/kcjs/yxwlkc'
            }, {
              'title': '合格网络课程',
              'url': '/kcjs/hgwlkc'
            }, {
              'title': '省级精品开放课程',
              'url': '/kcjs/sjjpkfkc'
            }, {
              'title': '校级精品开放课程',
              'url': '/kcjs/xjjpkfkc'
            }, {
              'title': '本科合格课程',
              'url': '/kcjs/bkhgkc'
            }, {
              'title': '广东省精品资源共享课',
              'url': '/kcjs/gdsjpzygxk'
            }]
          },

          {
            'title': '界面',
            'url': '',
            'active': false,
            'icon': 'command',
            'list': [{
              'title': '首页',
              'url': '/'
            }, {
              'title': '登陆',
              'url': '/login'
            }, {
              'title': '404',
              'url': '/404'
            }, ]
          },
          {
            'title': '教材建设',
            'url': '/jcjs',
            'active': false,
            'icon': 'record',
            'list': []
          },
          {
            'title': '实践教学',
            'url': '/sjjx',
            'active': false,
            'icon': 'newshot',
            'list': []
          }
        ]
      }
    },
    components: {

    },
    created() {
      for (let i = 0; i < this.list.length; i++) {
        this.list[i].active = false
      }
    },
    methods: {
      toggleShow(index) {
        for (let i = 0; i < this.list.length; i++) {
          if (i === index) {
            continue
          }
          this.list[i].active = false
        }
        this.list[index].active = !this.list[index].active
      }
    }

  }
</script>

<style>
  .u-nav {
    color: var(--theme-son);
  }

  .u-nav * {
    cursor: pointer;
  }

  .u-nav .item.active .uiIcon-back {
    transform: rotate(-90deg);
  }

  .u-nav .item .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: normal;
    height: 50px;

  }

  .u-nav .item.active .title {}

  .u-nav .item .content {
    height: 0;
    overflow: hidden;
    opacity: 0;
    color: var(--theme-grandson);
  }

  .u-nav .item.active .content {
    opacity: 1;
  }

  .u-nav .item .content .action {
    border-left: var(--greyLight) 1px solid;
    padding: 5px 20px;
    margin-left: 40px;
  }

  .u-nav .item .content .action:hover {
    color: var(--theme);
  }
</style>
