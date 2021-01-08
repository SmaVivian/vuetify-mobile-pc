<template>
  <!-- 仅移动端存在的页面-活动报名-登录 -->
  <div class="page-demo4">

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
      }
    },
    created() {
      console.log(this.$route.query)
      // 登录授权
      if (this.$store.state.user.userId) {
        this.getDetail()
      } else if (this.$route.query.gz == '0') {
        // this.$toast('请先关注公众号')
      } else if (this.$route.query.wxlogin) {
        this.$store
          .dispatch('user/loginWechatAuth', this.$route.query.wxlogin)
          .then(() => {
            this.getDetail()
          })
          .catch(msg => {
            console.log(msg)
            // this.$toast(msg)
          })
      } else {
        let apiUrl = location.origin
        window.location.href = apiUrl + '/singleMuseum/wx/m/wxLogin.do?type=2'
      }
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