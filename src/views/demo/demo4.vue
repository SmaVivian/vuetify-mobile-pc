<template>
  <!-- 仅移动端存在的页面-活动报名-登录 -->
  <div class="page-demo4">
    <v-alert
      type="success"
    >是的冯绍峰</v-alert>
    <span @click="handleConfirm">消息确认框</span>
    <span @click="handleAlert">消息提示框</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      getDetail() {
        console.loe('data')
      },
      handleConfirm() {
        this.$confirm({
          content: '您确定这么做吗？',
          confirmButtonText: '确定1',
          cancelButtonText: '取消1',
          type: 'warning'
        }).then(()=>{
          console.log("ok");
        }).catch(()=>{
          console.log("cancel");
        })
      },
      handleAlert() {
        this.$alert('提示提示', {type: 'info'})
      }
    },
    created() {
      console.log(this.$route.query)
      // console.log(cmpAlert.show())
      // debugger
      // 登录授权
      // if (this.$store.state.user.userId) {
      //   this.getDetail()
      // } else if (this.$route.query.gz == '0') {
      //   // this.$toast('请先关注公众号')
      // } else if (this.$route.query.wxlogin) {
      //   this.$store
      //     .dispatch('user/loginWechatAuth', this.$route.query.wxlogin)
      //     .then(() => {
      //       this.getDetail()
      //     })
      //     .catch(msg => {
      //       console.log(msg)
      //       // this.$toast(msg)
      //     })
      // } else {
      //   let apiUrl = location.origin
      //   window.location.href = apiUrl + '/singleMuseum/wx/m/wxLogin.do?type=2'
      // }


      // todo dele
      // this.getDetail()
      // if (this.$route.query.wxlogin) {
      //   this.$store
      //     .dispatch('user/loginWechatAuth', this.$route.query.wxlogin)
      //     .then(() => {})
      //     .catch(msg => {
      //       this.$toast(msg)
      //     })
      // }
    }
  }
</script>

<style lang="scss" scoped>
.page-demo4 {

}
</style>