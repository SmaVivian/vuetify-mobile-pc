<template>
  <div class="cmp-alert" v-if="showAlert">
    <i></i>
    <p class="cmp-alert_content">{{msg}}</p>
    <!-- <i>×</i> -->
    <!-- <i><v-icon>mdi-close</v-icon></i> -->
    <!-- VIcon报错 -->
    <!-- <v-alert  
      type="success" icon="mdi-firework">
      {{msg}}
    </v-alert> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        promiseStatus: null,
        showAlert: false,
        msg: '',
        options: {},
      }
    },
    methods: {
      alert(msg, options) {
        console.log(1111)
        this.msg = msg
        this.options = options || {}
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
        }, 2000)
        // return new Promise((resolve, reject) => {
				// 	this.promiseStatus = {resolve, reject}
				// })
      }
    }
  }
</script>

<style lang="scss" scoped>
.cmp-alert {
  // min-width: 380px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: #EBEEF5;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background-color: #edf2fc;
  // -webkit-transition: opacity .3s,top .4s,-webkit-transform .4s;
  // transition: opacity .3s,top .4s,-webkit-transform .4s;
  // transition: opacity .3s,transform .4s,top .4s;
  // transition: opacity .3s,transform .4s,top .4s,-webkit-transform .4s;
  // padding: 15px 15px 15px 20px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  z-index: 2000;
  .el-message__content {
    padding-right: 16px;
    font-size: 14px;
    color: #909399;
  }
}
</style>