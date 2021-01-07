const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './', // 相对路径
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@images', resolve('src/assets/images'))
      .set('@cmp', resolve('src/components'))
      .set('@views', resolve('src/views'))
  },
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    // sockHost: 'http://localhost', // 解决一直发/sockjs-node/info请求
    port: 8080,
    proxy: {
      '/admin': {
        target: 'http://www.jnmuseum.com/', 
        // target: 'http://archives.dev.tj720.com', // 内测环境
        // target: 'http://sdk.tj720.com', // 内测环境
        // target: 'http://dev.tj720.com', // 内测环境
        ws: false,
        changeOrigin: true
      },
      '/singleMuseum': {
        target: 'http://archives.dev.tj720.com', // 内测环境
        // target: 'http://sdk.tj720.com', // 内测环境
        // target: 'http://dev.tj720.com', // 内测环境
        ws: false,
        changeOrigin: true
      }
    }
  },

  lintOnSave: undefined
}