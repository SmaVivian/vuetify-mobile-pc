import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  // icons: {
  //   iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  // },
  breakpoint: {
    // mobileBreakpoint: 1200, // 写法1：屏幕宽度小于1200为移动端 
    mobileBreakpoint: 'md', // 写法2：屏幕宽度小于1200为移动端 
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1200,
      lg: 1920,
    },
  },
  theme: {
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
    },
  },
});
