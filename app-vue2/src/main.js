import './public-path';
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

let instance = null

function render(props = {}) {
  const { container } = props;
  // router = new VueRouter({
  //   // base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
  //   mode: 'history',
  //   routes,
  // });

  console.log('在哪运行', container)

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}


