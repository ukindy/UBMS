<template>
  <div class="up-layout">
    <div class="ui-bar bg-white border-bottom margin-top">
      <div class="action">
        <span class="uiIcon-title text-theme"></span>固定尺寸(wrap)
      </div>
    </div>
    <div class="padding bg-white">
      <div class="flex flex-wrap">
        <div class="basis-xs bg-blue light margin-xs padding-sm">
          <span>basis-</span><div style="width: 30px;display:inline-block">xs</div>(20%)
        </div>
        <div class="basis-df"></div>
        <div class="basis-sm bg-blue light margin-xs padding-sm">
          <span>basis-</span><div style="width: 30px;display:inline-block">sm</div>(40%)
        </div>
        <div class="basis-df"></div>
        <div class="basis-df bg-blue light margin-xs padding-sm">
          <span>basis-</span><div style="width: 30px;display:inline-block">df</div>(50%)
        </div>
        <div class="basis-lg bg-blue light margin-xs padding-sm">
          <span>basis-</span><div style="width: 30px;display:inline-block">lg</div>(60%)
        </div>
        <div class="basis-xl bg-blue light margin-xs padding-sm">
          <span>basis-</span><div style="width: 30px;display:inline-block">xl</div>(80%)
        </div>
      </div>
    </div>

    <div class="ui-bar bg-white  margin-top border-bottom">
      <div class="action">
        <span class="uiIcon-title text-theme"></span>比例布局
      </div>
    </div>
    <div class="padding bg-white">
      <div class="flex">
        <div class="flex-sub bg-blue light padding-sm margin-xs text-center"><span>flex-</span>sub</div>
        <div class="flex-sub bg-blue light padding-sm margin-xs text-center"><span>flex-</span>sub</div>
      </div>
      <div class="flex margin-bottom-sm">
        <div class="flex-sub bg-blue light padding-sm margin-xs text-center"><span>flex-</span>sub</div>
        <div class="flex-twice bg-blue light padding-sm margin-xs text-center"><span>flex-</span>twice</div>
      </div>
      <div class="flex margin-bottom-sm">
        <div class="flex-sub bg-blue light padding-sm margin-xs text-center"><span>flex-</span>sub</div>
        <div class="flex-twice bg-blue light padding-sm margin-xs text-center"><span>flex-</span>twice</div>
        <div class="flex-treble bg-blue light padding-sm margin-xs text-center"><span>flex-</span>treble</div>
      </div>
      <div class="flex margin-bottom-sm">
        <div class="flex-sub bg-blue light padding-sm margin-xs text-center"><span>flex-</span>sub</div>
        <div class="flex-twice bg-blue light padding-sm margin-xs text-center"><span>flex-</span>twice</div>
        <div class="flex-treble bg-blue light padding-sm margin-xs text-center"><span>flex-</span>treble</div>
        <div class="flex-fourfold bg-blue light padding-sm margin-xs text-center"><span>flex-</span>fourfold</div>
      </div>
    </div>
    <div class="ui-bar bg-white  margin-top border-bottom">
      <div class="action">
        <span class="uiIcon-title text-theme"></span>水平对齐(justify)
      </div>
    </div>
    <div class="bg-white">
      <div class="flex border-bottom padding justify-start">
        <div class="bg-blue light padding-sm margin-xs"><span>justify-</span>start</div>
        <div class="bg-blue light padding-sm margin-xs"><span>justify-</span>start</div>
      </div>
      <div class="flex border-bottom padding justify-end">
        <div class="bg-blue light padding-sm margin-xs"><span>justify-</span>end</div>
        <div class="bg-blue light padding-sm margin-xs"><span>justify-</span>end</div>
      </div>
      <div class="flex border-bottom padding justify-center">
        <div class="bg-blue light padding-sm margin-xs"><span>justify-</span>center</div>
        <div class="bg-blue light padding-sm margin-xs"><span>justify-</span>center</div>
      </div>
      <div class="flex border-bottom padding justify-between">
        <div class="bg-blue light padding-sm margin-xs"><span>justify-</span>between</div>
        <div class="bg-blue light padding-sm margin-xs"><span>justify-</span>between</div>
      </div>
      <div class="flex border-bottom padding justify-around">
        <div class="bg-blue light padding-sm margin-xs"><span>justify-</span>around</div>
        <div class="bg-blue light padding-sm margin-xs"><span>justify-</span>around</div>
      </div>
    </div>
    <div class="ui-bar bg-white  margin-top border-bottom">
      <div class="action">
        <span class="uiIcon-title text-theme"></span>垂直对齐(align)
      </div>
    </div>
    <div class="bg-white">
      <div class="flex border-bottom padding align-start">
        <div class="bg-blue light padding-lg margin-xs">text</div>
        <div class="bg-blue light padding-sm margin-xs"><span>align-</span>start</div>
      </div>
      <div class="flex border-bottom padding align-center">
        <div class="bg-blue light padding-lg margin-xs">text</div>
        <div class="bg-blue light padding-sm margin-xs"><span>align-</span>center</div>
      </div>
      <div class="flex border-bottom padding align-end">
        <div class="bg-blue light padding-lg margin-xs">text</div>
        <div class="bg-blue light padding-sm margin-xs"><span>align-</span>end</div>
      </div>

    </div>

  </div>
</template>

<script>
  let that
  export default {
    data() {
      return {}
    },
    components: {},
    created() {
      that = this
    },
    mounted() {

    },
    methods: {}
  }
</script>


<style scoped>
  .flex div span{
    display: none;
  }

  .flex div:hover span{
    display: inline-block;
  }
</style>
