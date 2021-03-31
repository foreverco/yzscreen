module.exports = {
  publicPath: "./",
  // 选项...
  // css相关配置 配置高于chainWebpack中关于css loader的配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?是否在构建样式地图，false将提高构建速度
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/main.scss";`
      },
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // 所有 webpack-dev-server 的选项都支持
  devServer: {
    publicPath: "/",
    open: false, // 编辑完成是否打开网页
    host: "0.0.0.0", // 指定使用的地址，默认localhost 0.0.0.0代表可以被外界访问
    port: 8080, //访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: {
      "/api": {
        // target: "http://192.168.1.151:9001", //API服务器的地址
        // target: "http://192.168.1.151:9000", //API服务器的地址
        target: "http://2449i4t062.zicp.vip:11770", //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
    }
  }
}