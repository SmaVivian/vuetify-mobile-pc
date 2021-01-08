import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import confirm from '@cmp/confirm'
import alert from '@cmp/alert'
import request from '@/utils/request'

import '@assets/css/theme.scss';

Vue.config.productionTip = false

Vue.prototype.$confirm = confirm
Vue.prototype.$alert = alert

Vue.prototype.$http = request
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
