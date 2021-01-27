<template>
  <div class="up-grid">
    <div class="ui-bar bg-white  margin-top solid-bottom">
      <div class="action">
        <span class="uiIcon-title text-blue"></span>等分列
      </div>
      <div class="action"></div>
    </div>
    <div class="bg-white padding">
      <div class="grid margin-bottom text-center" v-for="(item,index) in 5" :key="index" :class="'col-' + (index+1)">
        <div class="padding" :class="indexs%2==0?'bg-gray ligh':'bg-blue light'" v-for="(item,indexs) in (index+1)*2"
          :key="indexs">{{indexs+1}}</div>
      </div>
    </div>
    <div class="ui-bar bg-white  margin-top solid-bottom">
      <div class="action">
        <span class="uiIcon-title text-blue"></span>等高
      </div>
      <div class="action"></div>
    </div>
    <div class="bg-white padding">
      <div class="grid col-4 grid-square">
        <div class="bg-img" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></div>
      </div>
    </div>
  </div>
</template>

<script>
  let that
  export default {
    data() {
      return {
        TabCur: 0,
        avatar: ['../../../../static/img/uice.jpg',
          '../../../../static/img/uice.jpg',
          '../../../../static/img/uice.jpg',
          '../../../../static/img/uice.jpg',
        ],
      };
    },


    components: {},
    created() {
      that = this
    },
    mounted() {

    },
    methods: {
      tabSelect(e) {
        this.TabCur = e.currentTarget.dataset.id;
        this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
      }
    }
  }
</script>


<style>
</style>
