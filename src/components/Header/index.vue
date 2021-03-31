<template>
  <div class="header-box">
    <div class="time-box">{{nowTime}} {{tqObj.week}}</div>
    <div class="title-box">崖州区无感考勤系统</div>
    <div class="tq-box">
      {{tqObj.wea}}
      {{tqObj.win}}
      {{tqObj.win_speed}}
      {{tqObj.tem}}℃
      {{tqObj.air_level}}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      timer: null,
      nowTime: "",
      tqObj: {}
    };
  },
  created() {
    this.nowTime = this.$moment().format("YYYY年MM月DD HH:mm:ss");
    this.initData();
  },
  methods: {
    initData() {
      // 上面的请求也可以这样做
      axios
        .get("https://v0.yiketianqi.com/api", {
          params: {
            appid: "11554842",
            appsecret: "W7nSWX8u",
            version: "v61",
            city: "三亚"
          }
        })
        .then(response => {
          // console.log(response);
          this.tqObj = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
      this.timer = setInterval(() => {
        this.nowTime = this.$moment().format("YYYY年MM月DD HH:mm:ss");
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.header-box {
  // border: 1px solid red;
  // background: #04b7e030;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  padding: 0 10px;
  .title-box {
    font-size: 35px;
    letter-spacing: 4px;
    margin-left: -120px;
    color: $maincolor;
    font-weight: bold;
    height: 100%;
    width: 630px;
    background: url("../../assets/images/head.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .time-box {
    font-size: 20px;
  }
  .tq-box {
    font-size: 20px;
  }
}
</style>
