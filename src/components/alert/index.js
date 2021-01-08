// 提示
import Vue from 'vue'
import Alert from './alert.vue'
const VueComponent = Vue.extend(Alert)
const vm = new VueComponent().$mount()

let init = false;
let defaultOptions = {
  type: 'info',  // success/wraning/danger/info
  showClose: false // 可以关闭
}

const alert = (msg, options) => {
	Object.assign(vm, defaultOptions, options, {
		type: "alert"
	})
	if(!init){
    // document.body.appendChild(vm.$el)
    document.getElementsByClassName('v-application')[0].appendChild(vm.$el)
		init = true
	}
	return vm.alert(msg, {...defaultOptions, ...options})
}

export default alert