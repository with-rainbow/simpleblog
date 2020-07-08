import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Loading } from 'element-ui'
// Element UI
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import 'element-ui/lib/theme-chalk/display.css';
import axios from 'axios'
//E-Charts
import { VeBarChart } from 've-charts'
import { VePieChart } from 've-charts'
// Passive-events
import 'default-passive-events'

Vue.use(Element)
// require([Element],resolve)
Vue.component('VeBarChart', VeBarChart)
Vue.component('VePieChart', VePieChart)
Vue.component('loading',Loading)

// Vue.config.productionTip = false
// Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.openLoading = function() {
  const loading = this.$loading({           // 声明一个loading对象
    lock: true,                             // 是否锁屏
    text: '正在加载...',                     // 加载动画的文字
    spinner: 'el-icon-loading',             // 引入的loading图标
    background: 'rgba(0, 0, 0, 0.3)',       // 背景颜色
    target: '.router-view',                    // 需要遮罩的区域
    body: true,
    customClass: 'mask'                     // 遮罩层新增类名
  })
  setTimeout(function () {                  // 设定定时器，超时5S后自动关闭遮罩层，避免请求失败时，遮罩层一直存在的问题
    loading.close();                        // 关闭遮罩层
  },1000)
  return loading;
}