const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 9005 // 此处修改你想要的端口号
  },
  lintOnSave: false
});


