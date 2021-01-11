<template>
  <v-app class="g-app" id="app">
    <!-- <cmpHeader></cmpHeader> -->
    <v-main :class="{'app-mobile': $vuetify.breakpoint.mobile}">
      <v-container fluid>
        <!-- 如果使用 vue-router -->
        <router-view></router-view>
      </v-container>
      <!-- <router-view></router-view> -->
    </v-main>
  </v-app>
</template>

<script>
// import cmpHeader from '@cmp/header'
export default {
  name: 'App',
  // components: { cmpHeader },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
// @import '@assets/css/theme.scss';
</style>
