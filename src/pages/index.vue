<template>
  <div class="up-index">
    <div class="ui-grid">
      <div class="item">
        <div class="ui-card">
          <div class="item borders bg-white padding-xs pointer">
            <div class="title padding-lr padding-tb-sm flex justify-between align-center border-bottom">
              <span class="text-bold text-sm text-theme-son">
                <span>折线图</span>
              </span>
              <span></span>
            </div>
            <div class="content padding flex align-start">
              <div id="main" style="width: 100%;height:300px"> </div>
            </div>

          </div>

        </div>
      </div>
      <div class="item" v-for="(item , i) in 4" :key="i">
        <div class="ui-card">
          <div class="item borders bg-white padding-xs pointer">
            <div class="title padding-lr padding-tb-sm flex justify-between align-center border-bottom">
              <span class="text-bold text-sm text-theme-son">
                <span>名字</span>
              </span>
              <span>99%</span>
            </div>
            <div class="content padding flex align-start">
              <div class="ui-progress round xs striped active">
                <div class="bg-green" :style="[{ width:'60%'}]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="item">
        <div class="ui-card">
          <div class="item borders bg-white padding-xs">
            <div class="title padding-lr padding-tb-sm flex justify-between align-center border-bottom">
              <span class="text-bold text-sm text-theme-son">
                <span>动态</span>
              </span>
              <span class="text-sm">
                <span>更多</span>
                <span class="uiIcon-right"></span>
              </span>
            </div>
            <div class="content text-sm">
              <div class="ui-timeline">
                <div class="ui-time">昨天</div>
                <div class="ui-item cur cuIcon-noticefill">
                  <div class="content bg-green light">
                    <span>22:22</span> 【广州市】快件已到达地球
                  </div>
                </div>
                <div class="ui-item text-blue">
                  <div class="bg-blue light content">
                    <span>20:00</span> 【月球】快件已到达月球，准备发往地球
                  </div>
                  <div class="bg-cyan light content">
                    <span>10:00</span> 【银河系】快件已到达银河系，准备发往月球
                  </div>
                </div>

                <div class="ui-time">06-17</div>
                <div class="ui-item">
                  <div class="content">
                    <div class="ui-capsule radius">
                      <div class="ui-tag bg-cyan">上午</div>
                      <div class="ui-tag line-cyan">10:00</div>
                    </div>
                    <div class="margin-top">
                      <div class="text-cut">
                        这是第一次，我家的铲屎官走了这么久。久到足足有三天！！这是第一次，我家的铲屎官走了这么久。久到足足有三天！！
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>


      <div class="item">
        <div class="ui-card">
          <div class="item borders bg-white padding-xs">
            <div class="title padding-lr padding-tb-sm flex justify-between align-center border-bottom">
              <span class="text-bold text-sm text-theme-son">
                <span>动态</span>
              </span>
              <span class="text-sm">
                <span>更多</span>
                <span class="uiIcon-right"></span>
              </span>
            </div>
            <div class="content">
              <el-table :data="tableData" :size="$store.state.dynamic.isMobile?'mini':'medium'" style="width: 100%"
                :row-class-name="tableRowClassName">
                <el-table-column prop="date" label="日期"> </el-table-column>
                <el-table-column prop="name" label="姓名"> </el-table-column>
                <el-table-column prop="address" label="地址"> </el-table-column>
              </el-table>

            </div>
          </div>

        </div>

      </div>


    </div>
  </div>
</template>

<script>
  let that
  import echarts from 'echarts'
  export default {
    name: '',
    data() {
      return {
        timer: false,
        charts: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    created() {
      that = this
    },
    methods: {
      drawPie(id) {
        let option = {
          title: {
            text: '堆叠区域图',
            show: that.$store.state.dynamic.isMobile ? false : true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '25px',
            containLabel: false
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }],
          yAxis: [{
            type: 'value',
            show: that.$store.state.dynamic.isMobile ? false : true
          }],
          series: [{
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              areaStyle: {},
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };

        that.charts = echarts.init(document.getElementById(id))
        that.charts.setOption(option)
      },
      tableRowClassName({
        row,
        rowIndex
      }) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }

    },
    //调用
    mounted() {
      that.$nextTick(function() {
        that.drawPie('main')
      })
    },
    computed: {
      screenWidth() {
        return this.$store.state.dynamic.screenWidth;
      }
    },
    watch: { //监听值改变
      screenWidth(newVal, oldVal) {
        if (!that.timer) {
          that.timer = true
          setTimeout(() => {
            that.charts.resize()
          }, 400)
          that.timer = false
        }
      }
    },
  }
</script>

<style>
  .ui-grid {
    display: grid;
  }

  .ui-grid>.item {
    width: 100%;
    padding: 5px
  }

  .u-mobile .ui-grid>.item {
    padding:5px 0px;

  }

  .ui-grid {
    grid-template-columns: 25% 25% 25% 25%;
  }

  .u-mobile .ui-grid {
    grid-template-columns: 100%;
  }

  .up-index .ui-grid .item:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 5;
  }


  .up-index .ui-grid .item:nth-child(7) {
    grid-column-start: 2;
    grid-column-end: 5;
  }

  .u-mobile .up-index .ui-grid .item:nth-child(1),
  .u-mobile .up-index .ui-grid .item:nth-child(7) {
    grid-column-start: 1 !important;
    grid-column-end: 1 !important;
  }
</style>
