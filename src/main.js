import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

// 图片懒加载
import { Lazyload } from 'vant'
Vue.use(Lazyload, {
  lazyComponent: true,
  error: require('./assets/images/error.jpg'),
  loading: require('./assets/images/loading.gif'),
})


new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
