<template>
  <div class="home-box">
    <!-- <div v-html="redata"></div> -->
    <Header></Header>
    <div class="main-box">
      <div class="top-box">
        <div class="mid-box">
          <p class="mid-title">考勤成功提示</p>
          <!-- {"address":"食堂后门2号点",
          "clockDate":"2021-03-30 18:06:37",
          "msg":"恭喜 曹子芳 打卡成功！",
          "name":"郑童遥",
          "type":"USER_CLOCK_PUSH"}-->
          <div class="msg-box">
            <ul v-if="CardPartsStatisticsList&&CardPartsStatisticsList.length>0">
              <li v-for="(item, index) in CardPartsStatisticsList" :key="index">
                <p>
                  <span style="color:#F5713A;font-weight:bold">{{item.name}}</span>,您好！
                </p>
                <p>
                  您于
                  <span style="color:#F5713A;font-weight:bold">{{item.clockDate}}</span>
                  在
                  <span style="color:#F5713A;font-weight:bold">{{item.address}}</span>
                  打卡成功
                </p>
              </li>
            </ul>
            <!-- <div v-if="redata">
              <p>{{`${redata.name},您好！`}}</p>
              <p>{{`您于${redata.clockDate}在${redata.address}打卡成功`}}</p>
            </div>-->
            <div v-else>暂无打卡信息</div>
          </div>
          <div class="img-box">
            <img class="baseImg" src="../assets/images/foot.png" alt>
            <img class="roteImg" src="../assets/images/foot1.png" alt>
          </div>
        </div>
        <div class="right-box">
          <div class="right-top">
            <span class="title-span">打卡列表</span>
            <vue-seamless-scroll :data="initArr" class="seamless-warp" :class-option="classOption">
              <ul>
                <li>
                  <div class="DataList_left"></div>
                  <div class="DataList_left">姓名</div>
                  <div class="DataList_left">打卡时间</div>
                  <div class="DataList_left">打卡地点</div>
                </li>
                <li class="DataList_top" v-for="(item,index) in initArr" :key="index">
                  <div class="DataList_left">
                    <span>{{index+1}}</span>
                  </div>
                  <div :title="item.name" class="DataList_left">{{item.name}}</div>
                  <div :title="item.clockDate" class="DataList_left">{{item.times}}</div>
                  <div :title="item.address" class="DataList_left">{{item.address}}</div>
                </li>
              </ul>
            </vue-seamless-scroll>
          </div>
          <!-- <div class="right-bot">
            <span>数据信息</span>
            <div class="chart-box">
              <Echars :option="leftOption1"></Echars>
            </div>
          </div>-->
        </div>
      </div>
      <div class="bot-box">
        <div class="bot-left">
          <div class="chart-box">
            <Echars :option="leftOption"></Echars>
          </div>
          <div class="chart-box">
            <Echars :option="leftOption1"></Echars>
          </div>
        </div>
        <div class="bot-right">
          <div class="chart-box">
            <Echars :option="leftOption2"></Echars>
          </div>
          <div class="chart-box">
            <Echars :option="leftOption3"></Echars>
          </div>
        </div>
      </div>
      <!-- <div class="middle-box">
        <div v-html="redata">
          <Echars :option="leftOption"></Echars>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Echars from "../components/Echarts";
export default {
  name: "home-box",
  components: {
    Header,
    Echars
  },
  computed: {
    classOption() {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 10, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      };
    }
  },

  data() {
    return {
      websock: null,
      redata: null,
      hosptaloption: {},
      leftOption: {},
      leftOption1: {},
      leftOption2: {},
      leftOption3: {},
      leftOptionyb: {},
      initArr: [],
      CardPartsStatisticsList: [
        // {
        //   name: "郑童遥",
        //   clockDate: "2021-03-30 18:06:37",
        //   times: "2021-03-30 18:06:37",
        //   address: "食堂后门2号点"
        // },
        // {
        //   name: "郑童遥",
        //   clockDate: "2021-03-30 18:06:37",
        //   address: "食堂后门2号点"
        // }
        // {
        //   name: "郑童遥",
        //   clockDate: "2021-03-30 18:06:37",
        //   address: "食堂后门2号点"
        // },
        // {
        //   name: "郑童遥",
        //   clockDate: "2021-03-30 18:06:37",
        //   address: "食堂后门2号点"
        // },
        // {
        //   name: "郑童遥",
        //   clockDate: "2021-03-30 18:06:37",
        //   address: "食堂后门2号点"
        // }
        // {
        //   name: "郑童遥",
        //   clockDate: "2021-03-30 18:06:37",
        //   address: "食堂后门2号点"
        // },
        // {
        //   name: "郑童遥",
        //   clockDate: "2021-03-30 18:06:37",
        //   address: "食堂后门2号点"
        // }
        // {
        //   name: "郑童遥",
        //   clockDate: "2021-03-30 18:06:37",
        //   address: "食堂后门2号点"
        // },
        // {
        //   name: "郑童遥",
        //   clockDate: "2021-03-30 18:06:37",
        //   address: "食堂后门2号点"
        // }
      ]
    };
  },
  created() {
    this.initWebSocket();
    this.initData();
  },
  destroyed() {
    this.websock.close(); //离开路由之后断开websocket连接
  },
  methods: {
    initData() {
      this.gethosptaloption();
      this.getleftOption();
      this.getleftOptionyb();
      // setInterval(() => {
      //   let aa = (Math.random() * 100).toFixed(2) - 0;
      //   this.getleftOptionyb(aa);
      // }, 2000);
    },
    initWebSocket() {
      console.log("开始");
      console.log(window.config);

      //初始化weosocket
      // const wsuri = "ws://172.18.1.180:8080/imserver/yazhoutuisong";
      const wsuri = window.config.wsaddress;
      // const wsuri = "ws://139.155.242.192:8080/connectWebSocket/001";
      // const wsuri = "ws://121.40.165.18:8800";
      this.websock = new WebSocket(wsuri);

      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      //连接建立之后执行send方法发送数据
      let actions = { test: "12345" };
      console.log("连接");
      this.websocketsend(JSON.stringify(actions));
    },
    websocketonerror() {
      //连接建立失败重连
      console.log("重连");
      this.initWebSocket();
    },
    websocketonmessage(e) {
      console.log(e);
      console.log(this.websock);
      //数据接收
      this.redata = JSON.parse(e.data);
      // const redata = JSON.parse(e.data);
      console.log(this.redata);
      let ispush = this.initArr.filter(item => {
        return (
          item.name === this.redata.name &&
          item.clockDate === this.redata.clockDate &&
          item.address === this.redata.address
        );
      });
      if (ispush.length === 0) {
        let obj = this.redata;
        obj.times = this.$moment(obj.clockDate).format("HH:mm:ss");
        this.initArr.unshift(obj);
      }
      this.CardPartsStatisticsList = this.initArr.slice(0, 5);
      console.log(this.initArr);
    },
    websocketsend(Data) {
      //数据发送
      console.log(Data);
      this.websock.send(Data);
    },
    websocketclose(e) {
      //关闭
      console.log("断开连接", e);
    },
    gethosptaloption() {
      this.hosptaloption = {
        title: {
          show: false,
          text: "漏斗图",
          textStyle: {
            color: "#fff",
            fontSize: 15
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%"
        },

        legend: {
          show: false,
          data: ["测试1", "测试2", "测试3", "测试4", "测试5"],
          textStyle: {
            color: "#fff",
            fontSize: 13
          }
        },

        series: [
          {
            name: "漏斗图",
            type: "funnel",
            left: "10%",
            top: 40,
            //x2: 80,
            bottom: 0,
            width: "80%",
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside"
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid"
              }
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: [
              { value: 60, name: "" },
              { value: 40, name: "" },
              { value: 20, name: "" },
              { value: 80, name: "" },
              { value: 100, name: "" }
            ]
          }
        ]
      };
    },
    getleftOptionyb() {
      // let colors = ["#5470C6", "#91CC75", "#EE6666"];
      this.leftOptionyb = {
        // color: colors,

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        grid: {
          right: "20%",
          bottom: "10%",
          top: "20%"
        },

        // legend: {
        //   data: ["测试2", "测试1", "平均测试3"]
        // },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true
            },
            splitLine: { show: false },
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "测试2",
            min: 0,
            max: 250,
            position: "right",
            splitLine: { show: false },
            axisLine: {
              show: true
              // lineStyle: {
              //   color: colors[0]
              // }
            },
            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "测试1",
            min: 0,
            max: 250,
            position: "right",
            offset: 80,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#888"
              }
            },
            axisLine: {
              show: false
              // lineStyle: {
              //   color: colors[1]
              // }
            },
            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "测试3",
            min: 0,
            max: 25,
            position: "left",
            splitLine: { show: false },
            axisLine: {
              show: true
              // lineStyle: {
              //   color: colors[2]
              // }
            },
            axisLabel: {
              formatter: "{value} °C"
            }
          }
        ],
        series: [
          {
            name: "测试2",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "测试1",
            type: "bar",
            yAxisIndex: 1,
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: "平均测试3",
            type: "line",
            yAxisIndex: 2,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      };
    },
    getleftOption() {
      let data1 = [];

      for (var i = 0; i <= 360; i++) {
        var t = (i / 180) * Math.PI;
        var r = Math.sin(2 * t) * Math.cos(2 * t);
        data1.push([r, i]);
      }
      this.leftOption = {
        title: {
          show: false,
          text: "外出学习",
          textStyle: {
            color: "#fff",
            fontSize: 15
          }
        },
        legend: {
          show: false,
          data: ["line"]
        },
        polar: {
          center: ["50%", "54%"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data1
          }
        ],
        animationDuration: 2000
      };
      var dataBJ = [
        [55, 9, 56, 0.46, 18, 6, 1],
        [25, 11, 21, 0.65, 34, 9, 2],
        [56, 7, 63, 0.3, 14, 5, 3],
        [33, 7, 29, 0.33, 16, 6, 4],
        [42, 24, 44, 0.76, 40, 16, 5],
        [82, 58, 90, 1.77, 68, 33, 6],
        [74, 49, 77, 1.46, 48, 27, 7],
        [78, 55, 80, 1.29, 59, 29, 8],
        [267, 216, 280, 4.8, 108, 64, 9],
        [185, 127, 216, 2.52, 61, 27, 10],
        [39, 19, 38, 0.57, 31, 15, 11],
        [41, 11, 40, 0.43, 21, 7, 12],
        [64, 38, 74, 1.04, 46, 22, 13],
        [108, 79, 120, 1.7, 75, 41, 14],
        [108, 63, 116, 1.48, 44, 26, 15],
        [33, 6, 29, 0.34, 13, 5, 16],
        [94, 66, 110, 1.54, 62, 31, 17],
        [186, 142, 192, 3.88, 93, 79, 18],
        [57, 31, 54, 0.96, 32, 14, 19],
        [22, 8, 17, 0.48, 23, 10, 20],
        [39, 15, 36, 0.61, 29, 13, 21],
        [94, 69, 114, 2.08, 73, 39, 22],
        [99, 73, 110, 2.43, 76, 48, 23],
        [31, 12, 30, 0.5, 32, 16, 24],
        [42, 27, 43, 1, 53, 22, 25],
        [154, 117, 157, 3.05, 92, 58, 26],
        [234, 185, 230, 4.09, 123, 69, 27],
        [160, 120, 186, 2.77, 91, 50, 28],
        [134, 96, 165, 2.76, 83, 41, 29],
        [52, 24, 60, 1.03, 50, 21, 30],
        [46, 5, 49, 0.28, 10, 6, 31]
      ];

      var dataGZ = [
        [26, 37, 27, 1.163, 27, 13, 1],
        [85, 62, 71, 1.195, 60, 8, 2],
        [78, 38, 74, 1.363, 37, 7, 3],
        [21, 21, 36, 0.634, 40, 9, 4],
        [41, 42, 46, 0.915, 81, 13, 5],
        [56, 52, 69, 1.067, 92, 16, 6],
        [64, 30, 28, 0.924, 51, 2, 7],
        [55, 48, 74, 1.236, 75, 26, 8],
        [76, 85, 113, 1.237, 114, 27, 9],
        [91, 81, 104, 1.041, 56, 40, 10],
        [84, 39, 60, 0.964, 25, 11, 11],
        [64, 51, 101, 0.862, 58, 23, 12],
        [70, 69, 120, 1.198, 65, 36, 13],
        [77, 105, 178, 2.549, 64, 16, 14],
        [109, 68, 87, 0.996, 74, 29, 15],
        [73, 68, 97, 0.905, 51, 34, 16],
        [54, 27, 47, 0.592, 53, 12, 17],
        [51, 61, 97, 0.811, 65, 19, 18],
        [91, 71, 121, 1.374, 43, 18, 19],
        [73, 102, 182, 2.787, 44, 19, 20],
        [73, 50, 76, 0.717, 31, 20, 21],
        [84, 94, 140, 2.238, 68, 18, 22],
        [93, 77, 104, 1.165, 53, 7, 23],
        [99, 130, 227, 3.97, 55, 15, 24],
        [146, 84, 139, 1.094, 40, 17, 25],
        [113, 108, 137, 1.481, 48, 15, 26],
        [81, 48, 62, 1.619, 26, 3, 27],
        [56, 48, 68, 1.336, 37, 9, 28],
        [82, 92, 174, 3.29, 0, 13, 29],
        [106, 116, 188, 3.628, 101, 16, 30],
        [118, 50, 0, 1.383, 76, 11, 31]
      ];

      var dataSH = [
        [91, 45, 125, 0.82, 34, 23, 1],
        [65, 27, 78, 0.86, 45, 29, 2],
        [83, 60, 84, 1.09, 73, 27, 3],
        [109, 81, 121, 1.28, 68, 51, 4],
        [106, 77, 114, 1.07, 55, 51, 5],
        [109, 81, 121, 1.28, 68, 51, 6],
        [106, 77, 114, 1.07, 55, 51, 7],
        [89, 65, 78, 0.86, 51, 26, 8],
        [53, 33, 47, 0.64, 50, 17, 9],
        [80, 55, 80, 1.01, 75, 24, 10],
        [117, 81, 124, 1.03, 45, 24, 11],
        [99, 71, 142, 1.1, 62, 42, 12],
        [95, 69, 130, 1.28, 74, 50, 13],
        [116, 87, 131, 1.47, 84, 40, 14],
        [108, 80, 121, 1.3, 85, 37, 15],
        [134, 83, 167, 1.16, 57, 43, 16],
        [79, 43, 107, 1.05, 59, 37, 17],
        [71, 46, 89, 0.86, 64, 25, 18],
        [97, 71, 113, 1.17, 88, 31, 19],
        [84, 57, 91, 0.85, 55, 31, 20],
        [87, 63, 101, 0.9, 56, 41, 21],
        [104, 77, 119, 1.09, 73, 48, 22],
        [87, 62, 100, 1, 72, 28, 23],
        [168, 128, 172, 1.49, 97, 56, 24],
        [65, 45, 51, 0.74, 39, 17, 25],
        [39, 24, 38, 0.61, 47, 17, 26],
        [39, 24, 39, 0.59, 50, 19, 27],
        [93, 68, 96, 1.05, 79, 29, 28],
        [188, 143, 197, 1.66, 99, 51, 29],
        [174, 131, 174, 1.55, 108, 50, 30],
        [187, 143, 201, 1.39, 89, 53, 31]
      ];

      var lineStyle = {
        normal: {
          width: 1,
          opacity: 0.5
        }
      };
      this.leftOption1 = {
        title: {
          show: false,
          text: "部门统计",
          textStyle: {
            color: "#fff",
            fontSize: 15
          }
        },
        legend: {
          show: false,
          bottom: 0,
          data: ["测试1", "测试2", "测试3"],
          itemGap: 20,
          textStyle: {
            color: "#fff",
            fontSize: 14
          },
          selectedMode: "single"
        },
        // visualMap: {
        //     show: true,
        //     min: 0,
        //     max: 20,
        //     dimension: 6,
        //     inRange: {
        //         colorLightness: [0.5, 0.8]
        //     }
        // },
        radar: {
          indicator: [
            { name: "AQI", max: 300 },
            { name: "PM2.5", max: 250 },
            { name: "PM10", max: 300 },
            { name: "CO", max: 5 },
            { name: "NO2", max: 200 },
            { name: "SO2", max: 100 }
          ],
          shape: "circle",
          splitNumber: 5,
          name: {
            textStyle: {
              color: "rgb(238, 197, 102)"
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(238, 197, 102, 0.1)",
                "rgba(238, 197, 102, 0.2)",
                "rgba(238, 197, 102, 0.4)",
                "rgba(238, 197, 102, 0.6)",
                "rgba(238, 197, 102, 0.8)",
                "rgba(238, 197, 102, 1)"
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(238, 197, 102, 0.5)"
            }
          }
        },
        series: [
          {
            name: "测试1",
            type: "radar",
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: "none",
            itemStyle: {
              color: "#F9713C"
            },
            areaStyle: {
              opacity: 0.1
            }
          },
          {
            name: "测试2",
            type: "radar",
            lineStyle: lineStyle,
            data: dataSH,
            symbol: "none",
            itemStyle: {
              color: "#B3E4A1"
            },
            areaStyle: {
              opacity: 0.05
            }
          },
          {
            name: "测试3",
            type: "radar",
            lineStyle: lineStyle,
            data: dataGZ,
            symbol: "none",
            itemStyle: {
              color: "rgb(238, 197, 102)"
            },
            areaStyle: {
              opacity: 0.05
            }
          }
        ]
      };
      var hours = [
        "12a",
        "1a",
        "2a",
        "3a",
        "4a",
        "5a",
        "6a",
        "7a",
        "8a",
        "9a",
        "10a",
        "11a",
        "12p",
        "1p",
        "2p",
        "3p",
        "4p",
        "5p",
        "6p",
        "7p",
        "8p",
        "9p",
        "10p",
        "11p"
      ];
      var days = [
        "Saturday",
        "Friday",
        "Thursday",
        "Wednesday",
        "Tuesday",
        "Monday",
        "Sunday"
      ];

      var data = [
        [0, 0, 5],
        [0, 1, 1],
        [0, 2, 0],
        [0, 3, 0],
        [0, 4, 0],
        [0, 5, 0],
        [0, 6, 0],
        [0, 7, 0],
        [0, 8, 0],
        [0, 9, 0],
        [0, 10, 0],
        [0, 11, 2],
        [0, 12, 4],
        [0, 13, 1],
        [0, 14, 1],
        [0, 15, 3],
        [0, 16, 4],
        [0, 17, 6],
        [0, 18, 4],
        [0, 19, 4],
        [0, 20, 3],
        [0, 21, 3],
        [0, 22, 2],
        [0, 23, 5],
        [1, 0, 7],
        [1, 1, 0],
        [1, 2, 0],
        [1, 3, 0],
        [1, 4, 0],
        [1, 5, 0],
        [1, 6, 0],
        [1, 7, 0],
        [1, 8, 0],
        [1, 9, 0],
        [1, 10, 5],
        [1, 11, 2],
        [1, 12, 2],
        [1, 13, 6],
        [1, 14, 9],
        [1, 15, 11],
        [1, 16, 6],
        [1, 17, 7],
        [1, 18, 8],
        [1, 19, 12],
        [1, 20, 5],
        [1, 21, 5],
        [1, 22, 7],
        [1, 23, 2],
        [2, 0, 1],
        [2, 1, 1],
        [2, 2, 0],
        [2, 3, 0],
        [2, 4, 0],
        [2, 5, 0],
        [2, 6, 0],
        [2, 7, 0],
        [2, 8, 0],
        [2, 9, 0],
        [2, 10, 3],
        [2, 11, 2],
        [2, 12, 1],
        [2, 13, 9],
        [2, 14, 8],
        [2, 15, 10],
        [2, 16, 6],
        [2, 17, 5],
        [2, 18, 5],
        [2, 19, 5],
        [2, 20, 7],
        [2, 21, 4],
        [2, 22, 2],
        [2, 23, 4],
        [3, 0, 7],
        [3, 1, 3],
        [3, 2, 0],
        [3, 3, 0],
        [3, 4, 0],
        [3, 5, 0],
        [3, 6, 0],
        [3, 7, 0],
        [3, 8, 1],
        [3, 9, 0],
        [3, 10, 5],
        [3, 11, 4],
        [3, 12, 7],
        [3, 13, 14],
        [3, 14, 13],
        [3, 15, 12],
        [3, 16, 9],
        [3, 17, 5],
        [3, 18, 5],
        [3, 19, 10],
        [3, 20, 6],
        [3, 21, 4],
        [3, 22, 4],
        [3, 23, 1],
        [4, 0, 1],
        [4, 1, 3],
        [4, 2, 0],
        [4, 3, 0],
        [4, 4, 0],
        [4, 5, 1],
        [4, 6, 0],
        [4, 7, 0],
        [4, 8, 0],
        [4, 9, 2],
        [4, 10, 4],
        [4, 11, 4],
        [4, 12, 2],
        [4, 13, 4],
        [4, 14, 4],
        [4, 15, 14],
        [4, 16, 12],
        [4, 17, 1],
        [4, 18, 8],
        [4, 19, 5],
        [4, 20, 3],
        [4, 21, 7],
        [4, 22, 3],
        [4, 23, 0],
        [5, 0, 2],
        [5, 1, 1],
        [5, 2, 0],
        [5, 3, 3],
        [5, 4, 0],
        [5, 5, 0],
        [5, 6, 0],
        [5, 7, 0],
        [5, 8, 2],
        [5, 9, 0],
        [5, 10, 4],
        [5, 11, 1],
        [5, 12, 5],
        [5, 13, 10],
        [5, 14, 5],
        [5, 15, 7],
        [5, 16, 11],
        [5, 17, 6],
        [5, 18, 0],
        [5, 19, 5],
        [5, 20, 3],
        [5, 21, 4],
        [5, 22, 2],
        [5, 23, 0],
        [6, 0, 1],
        [6, 1, 0],
        [6, 2, 0],
        [6, 3, 0],
        [6, 4, 0],
        [6, 5, 0],
        [6, 6, 0],
        [6, 7, 0],
        [6, 8, 0],
        [6, 9, 0],
        [6, 10, 1],
        [6, 11, 0],
        [6, 12, 2],
        [6, 13, 1],
        [6, 14, 3],
        [6, 15, 4],
        [6, 16, 0],
        [6, 17, 0],
        [6, 18, 0],
        [6, 19, 0],
        [6, 20, 1],
        [6, 21, 2],
        [6, 22, 2],
        [6, 23, 6]
      ];

      this.leftOption2 = {
        title: {
          show: false,
          text: "出勤统计",
          textStyle: {
            color: "#fff",
            fontSize: 15
          }
        },
        legend: {
          show: false,
          data: ["Punch Card"],
          left: "right"
        },
        polar: {},
        tooltip: {
          formatter: function(params) {
            return (
              params.value[2] +
              " commits in " +
              hours[params.value[1]] +
              " of " +
              days[params.value[0]]
            );
          }
        },
        angleAxis: {
          type: "category",
          data: hours,
          boundaryGap: false,
          splitLine: {
            show: true
          },
          axisLine: {
            show: false
          }
        },
        radiusAxis: {
          type: "category",
          data: days,
          axisLine: {
            show: false
          },
          axisLabel: {
            rotate: 45
          }
        },
        series: [
          {
            name: "Punch Card",
            type: "scatter",
            coordinateSystem: "polar",
            symbolSize: function(val) {
              return val[2] * 2;
            },
            data: data,
            animationDelay: function(idx) {
              return idx * 5;
            }
          }
        ]
      };
      this.leftOption3 = {
        title: {
          show: false,
          text: "异常信息",
          textStyle: {
            color: "#fff",
            fontSize: 15
          }
        },
        angleAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        radiusAxis: {},
        polar: {},
        series: [
          {
            type: "bar",
            data: [1, 2, 3, 4, 3, 5, 1],
            coordinateSystem: "polar",
            name: "A",
            stack: "a",
            emphasis: {
              focus: "series"
            }
          },
          {
            type: "bar",
            data: [2, 4, 6, 1, 3, 2, 1],
            coordinateSystem: "polar",
            name: "B",
            stack: "a",
            emphasis: {
              focus: "series"
            }
          },
          {
            type: "bar",
            data: [1, 2, 3, 4, 1, 2, 5],
            coordinateSystem: "polar",
            name: "C",
            stack: "a",
            emphasis: {
              focus: "series"
            }
          }
        ],
        legend: {
          show: false,
          data: ["A", "B", "C"]
        }
      };
    }
  }
};
</script>
<style lang="scss">
@keyframes haha1 {
  0% {
    -webkit-transform: translateX(-50%) rotateX(70deg) rotateZ(0deg);
  }

  25% {
    -webkit-transform: translateX(-50%) rotateX(70deg) rotateZ(90deg);
  }

  50% {
    -webkit-transform: translateX(-50%) rotateX(70deg) rotateZ(180deg);
  }

  75% {
    -webkit-transform: translateX(-50%) rotateX(70deg) rotateZ(270deg);
  }

  100% {
    -webkit-transform: translateX(-50%) rotateX(70deg) rotateZ(360deg);
  }
}
@keyframes haha2 {
  0% {
    opacity: 0.2;
  }

  25% {
    opacity: 0.6;
  }

  50% {
    opacity: 1;
  }

  75% {
    opacity: 0.6;
  }

  100% {
    opacity: 0.2;
  }
}
.home-box {
  background: url("../assets/images/bg1.png") no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  .main-box {
    height: 92vh;
    padding: 0 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .top-box {
      display: flex;
      justify-content: space-between;
      .mid-box {
        background: url("../assets/images/mid.png") no-repeat;
        background-size: 100% 100%;
        width: 900px;
        height: 550px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .mid-title {
          position: absolute;
          top: 10px;
          font-size: 23px;
          color: #44c9de;
        }
        .msg-box {
          position: absolute;
          height: 300px;
          font-size: 15px;
          letter-spacing: 3px;
          top: 40px;
          width: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
          ul {
            width: 100%;
            border: 1px solid #ffffff30;
            border-radius: 10px;
            li {
              padding: 8px 0;
              &:first-child {
                border-radius: 10px 10px 0 0;
              }
              &:last-child {
                border-radius: 0 0 10px 10px;
              }
              &:nth-child(odd) {
                background: #1e3c52;
              }
            }
          }
          > div {
            width: 100%;
          }
        }
        .img-box {
          position: absolute;
          bottom: 350px;
          width: 500px;
          .baseImg {
            width: 70%;
            left: 50%;
            bottom: -310px;
            transform: translateX(-50%);
            position: absolute;
            animation: haha2 4s linear infinite;
          }
          .roteImg {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            transform: rotateX(70deg);
            animation: haha1 4s linear infinite;
          }
        }
      }
      .left-box {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        > div {
          background: url("../assets/images/smallkuang.png") no-repeat;
          background-size: 100% 100%;
          width: 440px;
          height: 260px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          &:first-child {
            margin-bottom: 30px;
          }
          > span {
            position: absolute;
            top: 0;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
          }
          .chart-box {
            width: 90%;
            height: 80%;
          }
        }
      }
      .right-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 550px;
        .title-span {
          font-size: 23px;
          color: #44c9de;
          // font-weight: bold;
          margin-top: -8px;
        }
        > div {
          background: url("../assets/images/smallkuang.png") no-repeat;
          background-size: 100% 100%;
          width: 900px;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 30px;
          > span {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
          }

          .seamless-warp {
            width: 100%;
            height: calc(100% - 16px);
            overflow: hidden;
            margin: 10px;
            ul {
              li {
                display: flex;
                padding: 20px 10px;
                &:first-child {
                  // background: #44c9de80 !important;
                  > div {
                    font-weight: bold;
                  }
                }
                &:nth-child(odd) {
                  background: #1e3c52;
                }
                > div {
                  margin-right: 10px;
                  width: 350px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  &:first-child {
                    width: 50px;
                    span {
                      padding: 5px;
                      width: 15px;
                      height: 15px;
                      line-height: 15px;
                      text-align: center;
                      display: inline-block;
                      border-radius: 20px;
                      background: $maincolor;
                    }
                  }
                  &:nth-child(2) {
                    width: 100px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .bot-box {
      display: flex;
      justify-content: space-between;
      > div {
        background: url("../assets/images/kuang.png") no-repeat;
        background-size: 100% 100%;
        width: 900px;
        height: 260px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .chart-box {
          width: 45%;
          height: 80%;
        }
      }
    }
    // .middle-box {
    //   border: 3px solid #04b7e050;
    //   border-radius: 10px;
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   transform: translate(-50%, -50%);
    //   width: 600px;
    //   padding: 50px;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    // }
  }
}
</style>
