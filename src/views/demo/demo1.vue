<template>
  <!-- 导航 -->
  <div class="page-demo1">
    <div 
      v-if="$vuetify.breakpoint.smAndDown" 
      @click="drawer=!drawer">移动端菜单</div>
    <!-- <v-toolbar
      v-if="$vuetify.breakpoint.smAndDown"
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar> -->

    <div class="nav">
      <div class="item">首页</div>
      <div class="item">展览</div>
      <div class="item">馆藏</div>
    </div>

    <v-navigation-drawer
      app
      v-model="drawer"
      class="brown lighten-2"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index" :to="item.url">
            <v-list-item-content>
              {{ item.title }}
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>


    <div class="content">
      <v-layout wrap class="px-4 pb-3" style="height:300px;">
        <v-flex xs12 sm12 md3>
          <span>参观指南</span>
        </v-flex>
        <v-flex xs12 sm12 md9>
          <div class="notice">
            <h2 span>通知公告</h2>
            <div>
              垂直居中的内容
            </div>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        items: [
          { title: 'Menu', url: '/menu' },
          { title: 'Profile', url: '/about' },
          { title: 'Sign In', url: '/sign-in' },
          { title: 'Join', url: '/join' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.page-demo1 {
  .nav {
    display: flex;
    .item {

    }
  }

  .notice {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
}
</style>