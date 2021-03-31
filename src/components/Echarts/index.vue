<template>
  <div class="layout_chart">
    <div id="myChart" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    console.log(echarts);
    let myChart = echarts.init(this.$refs.chart);
    this.myChart = myChart;
    this.drawLine(this.option);
    window.addEventListener("resize", () => {
      this.myChart.resize();
    });
  },
  watch: {
    option(option) {
      this.drawLine(option);
    }
  },
  methods: {
    drawLine(option) {
      // 绘制图表
      this.myChart.setOption(option);
    }
  }
};
</script>
<style lang="scss" scoped>
.layout_chart {
  width: 100%;
  height: 100%;
  // background-color: #0000ff;
}
#myChart {
  width: 100%;
  height: 100%;
}
</style>
