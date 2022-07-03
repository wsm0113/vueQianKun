import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// 引入公共样式
import './assets/css/index.styl';


import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  // {
  //   name: 'app-react',
  //   entry: '//localhost:9000',
  //   container: '#subapp-container',
  //   activeRule: '/subapp/app-react',
  // },
  {
    name: 'app-vue2',
    entry: '//localhost:9002',
    container: '#subapp-container',
    activeRule: '/subapp/app-vue2',
  },
  // {
  //   name: 'app-vue3',
  //   entry: '//localhost:9003',
  //   container: '#subapp-container',
  //   activeRule: '/subapp/app-vue3',
  // },
  // {
  //   name: 'app-vue3-ts',
  //   entry: '//localhost:9004',
  //   container: '#subapp-container',
  //   activeRule: '/subapp/app-vue3-ts',
  // },
]);

// 启动 qiankun
start({
  sandbox: {
    // strictStyleIsolation: false,
    experimentalStyleIsolation: true,
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
