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
            'title': '基础',
            'url': '',
            'active': false,
            'icon': 'settings',
            'list': [{
              'title': 'Flex布局',
              'url': '/base/layout/flex'
            }, {
              'title': 'Grid布局',
              'url': '/base/layout/grid'
            }, {
              'title': '辅助布局',
              'url': '/base/layout/else'
            }, {
              'title': 'Text文本',
              'url': '/base/text'
            }, {
              'title': 'Icon图标',
              'url': '/base/icon'
            },  {
              'title': '背景',
              'url': '/base/background'
            }, ]
          },
          {
            'title': '界面',
            'url': '',
            'active': false,
            'icon': 'copy',
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
            'title': '关于',
            'url': '/about',
            'active': false,
            'icon': 'info',
            'list': []
          },
        ]
      }
    },
    // 监听,当路由发生变化的时候执行
    watch: {
      $route(to, from) {
        if (this.$store.state.dynamic.isMobile)
          this.$store.state.dynamic.showMenu = false;

      }
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
