import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import confirm from '@cmp/confirm'
import alert from '@cmp/alert'
import test from '@cmp/test'
import request from '@/utils/request'

import '@assets/css/theme.scss';

Vue.config.productionTip = false

Vue.prototype.$confirm = confirm
Vue.prototype.$alert = alert
Vue.prototype.$test = test  // 方法2.组件和组件以外的情况下使用

// Vue.use(test)  // 方法1.仅在组件里使用

Vue.prototype.$http = request
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
