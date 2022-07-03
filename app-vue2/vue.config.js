const packageName = require('./package').name;
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9002, // 此处修改你想要的端口号
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${packageName}`,
      chunkLoadingGlobal: `webpackJsonp_${packageName}`

      // 在2020-10-10发布的webpack 5中已将 output.jsonpFunction 更名为 output.chunkLoadingGlobal
    },
  },
})

