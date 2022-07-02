import { createApp } from 'vue'
// import router from './router/index'
import App from './App.vue'


// 链式注册插件
// const app = createApp(App).use(store, key).use(router).use(ElementPlus, { locale })
const app = createApp(App)
// 挂载全局方法 isPermission
// app.config.globalProperties.$isPermission = isPermission
// 现在所有的导航都是异步的，等路由ready以后再进行挂载组件；
// router.isReady().then(() => app.mount('#app'))
createApp(App).mount('#app')
