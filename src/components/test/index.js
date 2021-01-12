
// 方法1.仅在组件里使用
// import TestComponent from './test.vue'
// const Test = {
//   install(Vue) {
//     const Constructor = Vue.extend(TestComponent) //创建一个test子实例
//     let instance = new Constructor({
//       el: document.createElement('div') //将test实例挂载到创建的div上
//     })
//     document.body.appendChild(instance.$el) //添加到body中
//     //绑定到vue原型上，以供全局使用
//     Vue.prototype.$test = (msg, confirmSure = () => {}) => {
//       instance.message = msg //需要显示的信息
//       instance.show = true //在调用test时显示组件
//       instance.confirmSure = confirmSure //点击关闭的时候触发的回调函数
//     }
//   }
// }

// export default Test


// 方法2.要在组件和组件以外的情况下使用
import TestComponent from './test.vue'
import Vue from 'vue'
const Test = (msg, confirmSure = () => {}) => {
  const Constructor = Vue.extend(TestComponent) //创建一个test子实例
  let instance = new Constructor({
    el: document.createElement('div'), //将test实例挂载到创建的div上
    data() {
      return {
        message: msg, //需要显示的信息
        show: true //在调用test时显示组件
      }
    },
    methods: {
      confirmSure: confirmSure //点击关闭的时候触发的回调函数
    }
  })
  document.body.appendChild(instance.$el) //添加到body中
}

export default Test