// 确认框
import Vue from 'vue'
import Confirm from './confirm.vue'
const VueComponent = Vue.extend(Confirm)
const vm = new VueComponent().$mount()

let init = false;
let defaultOptions = {
  title: '提示',
  content: '',
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  // type: 'info'
}

const confirm = (options) => {
	Object.assign(vm, defaultOptions, options, {
		type: "confirm"
	})
	if(!init){
		document.body.appendChild(vm.$el)
		init = true
	}
	return vm.confirm({...defaultOptions, ...options})
}

export default confirm