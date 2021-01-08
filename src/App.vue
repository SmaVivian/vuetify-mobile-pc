<template>
  <v-app id="app">
    <v-main :class="{'app-mobile': $vuetify.breakpoint.mobile}">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
// @import '@assets/css/theme.scss';
</style>
