import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.config.productionTip = false;

import moment from 'moment'
Vue.prototype.$moment = moment

// 引入echarts
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;

// 无缝滚动
import VueSeamlessScroll from 'vue-seamless-scroll';
Vue.use(VueSeamlessScroll);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");