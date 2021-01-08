import Cookies from 'js-cookie'
const user = {
  namespaced: true,
  state: {
    isMobile: false,
    userId: '',
    token: '', // 登录状态
    // userId: 'd0409cc9ee1b49a09a75edaaf38e048b',
    // token:
    //   '59845C6D911F6BA183173A60955A482CDE2346A96B56AB6B8573527428625AB71F91197B0E72E255C7A3BFC58FC5C434',
    userInfo: {} // 用户登录信息
  },
  mutations: {
    SET_USERINFO: (state, userInfo) => {
      if(userInfo) {
        state.userInfo = {
          ...state.userInfo,
          ...userInfo
        }
      } else {
        state.userInfo = {}
      }
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
    }
  },
  actions: {
    // 微信登录相关，通过code获取token和用户信息
    loginWechatAuth({ commit }, code) {
      return new Promise((resolve, reject) => {
        this._vm.$http
          .get('/wx/wxIsLogin.do', {
            key: code
          })
          .then(
            res => {
              if (res.success) {
                let data = res.result

                commit('SET_USERID', data.id)
                commit('SET_TOKEN', data.token)
                commit('SET_USERINFO', {
                  nickName: data.nickName
                })

                Cookies.set('userId', data.id, { expires: 7 })
                Cookies.set('token', data.token, { expires: 7 })
                Cookies.set(
                  'userInfo',
                  {
                    nickName: data.nickName
                  },
                  { expires: 7 }
                )
                resolve(res.result)
              } else {
                reject(res.message)
              }
            }
            // error => {
            //   this._vm.$message.error(error.msg || '服务器异常')
            // }
          )
      })
    },
    // 用户名密码登录 - 暂无用
    LoginUser({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        // this._vm.$http.get("/pc/login/frontLogin.do", {
        this._vm.$http.post("/login/webLogin", {
          ...userInfo
        })
        .then((res)=>{
          if(res.success) {
            commit('SET_USER_INFO', {
              userId: res.result.id,
              activityEdit: '1',
              userImg: res.result.userImg,
              userName: res.result.userName,
              // activityEdit: res.result.activityEdit === '1' ? '1' : '',
            });
            Cookies.set('userId', res.result.id);
            Cookies.set('activityEdit', '1');   // 是否能核销报名
            // Cookies.set('activityEdit', res.result.activityEdit === '1' ? '1' : '');   // 是否能核销报名
            Cookies.set('userImg', res.result.image)
            Cookies.set('userName', res.result.userName)
            resolve();
          }else{
            // Toast({
            //   message: res.message,
            //   position: 'bottom'
            // });
            reject();
          }
        }, error => {
          // Toast({
          //   message: '服务器异常',
          //   position: 'bottom'
          // });
          reject(error);
        })
      })
    },
    // 退出登录 - 暂无用
    LoginOut({ commit }) {
      this._vm.$http.get("/bsPubUser/loginOut", {
      })
      .then((res)=>{
        if(res.success) {
          commit('SET_USER_INFO', '')
          Cookies.remove('userId')
        }else{
          // Toast({
          //   message: res.message,
          //   position: 'bottom'
          // });
        }
      })
    }
  }
}

export default user
