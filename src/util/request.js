import axios from "axios";
import {
   Message
} from "element-ui";
import Config from "../util/baseApi";
import {
   getToken
} from "@/util/save";
import router from "@/router/index";
import store from "@/store/index";

// console.log(Config);
// console.log(process.env.NODE_ENV);
// console.log(process.env.VUE_APP_LWM);

// 创建axios,赋给变量
// api地址
const BASEURL =
   process.env.NODE_ENV === "production" ? "" : Config.proxy.default;
// console.log(BASEURL);
var service = axios.create({
   baseURL: BASEURL,
   timeout: 15000
});

// 添加一个请求拦截器
/**
 * 请求接口前，做一些数据出来
 */
service.interceptors.request.use(
   function (config) {
      // 在发送请求之前做什么Do something before request is sent
      // 后台需要前端传相关的参数（在请求头添加参数）
      // token
      // userid
      // sui
      // console.log(config.headers);
      // 业务需求

      // 最终目的，在请求头添加参数
      // config.headers["Authorization"] = getToken();
      // console.log(getToken());
      config.headers["Authorization"] = getToken();
      // console.log(config);
      //添加一次加载状态
      // store.dispatch("app/addLoading");
      return config;
   },
   function (error) {
      // 对请求错误做什么Do something with request error
      //取消一次加载状态
      store.dispatch("app/cancelLoading");
      return Promise.reject(error);
   }
);

// 添加一个响应拦截器
/**
 * 请求接口后，返回数据，进行拦截
 */
service.interceptors.response.use(
   function (response) {
      // 对响应数据做什么Do something with response data
      let data = response.data;
      //业务需求
      // console.log(data);
      // debugger;
      // store.dispatch("app/cancelLoading");

      if (data.code != 200) {
         //取消一次加载状态
         // store.dispatch("app/cancelLoading");
         if (data.code == 2000) {
            // console.log(data);
            Message.error(data.msg);
            store.dispatch("app/clearAllInfo");
            router.push({
               name: "Login"
            });
            return Promise.reject(data);
         } else {
            Message.error(data.msg);
            return Promise.reject(data);
         }
      } else {
         //取消一次加载状态
         // store.dispatch("app/cancelLoading");
         return response;
      }
   },
   function (error) {
      // 对响应错误做什么Do something with response error
      // store.dispatch("app/cancelLoading");
      return Promise.reject(error);
   }
);

export default service;