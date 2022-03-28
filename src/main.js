import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

// import mockdata from './mock'
// Vue.use(mockdata)
Vue.use(ElementUI)
Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
  // 判断是开发环境，mock 会拦截 Ajax 请求
  require('./mock/index.js')
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

