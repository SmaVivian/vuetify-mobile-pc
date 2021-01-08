<template>
  <div class="cmp-header">
    <v-app-bar app
      color="white"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer=true" v-if="$vuetify.breakpoint.mobile"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer>
        <div class="top-nav" v-if="!$vuetify.breakpoint.mobile">
          <div class="item">首页</div>
          <div class="item">展览</div>
          <div class="item">馆藏</div>
        </div>
      </v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-if="$vuetify.breakpoint.mobile"
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-navigation-drawer
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
    </v-navigation-drawer> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
.cmp-header {
  .top-nav {
    padding-left: 50px;
    display: flex;
    .item {
      margin-right: 20px;
    }
  }
}
</style>