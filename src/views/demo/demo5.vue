<template>
  <div class="page-demo5">
    <!-- <v-tabs
      v-model="model"
      centered
      slider-color="yellow"
    >
      <v-tab
        v-for="i in 3"
        :key="i"
        :href="`#tab-${i}`"
      >
        Item {{ i }}
      </v-tab>
    </v-tabs> -->
    <!-- 非移动端 -->
    <v-tabs
      v-model="tab"
      centered
      v-if="!$vuetify.breakpoint.mobile"
    >
      <!-- <v-tabs-slider color="yellow"></v-tabs-slider> -->
      <v-tab
        v-for="item in items"
        :key="item"
        :href="'#'+item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <!-- 移动端 -->
    <v-select
      v-model="tab"
      :items="items"
      label="请选择"
      solo
      v-if="$vuetify.breakpoint.mobile"
    ></v-select>

    <!-- 内容-无动效 -->
    <v-card flat>
      <!-- <p>{{text}}</p> -->
      <v-card-text v-text="text"></v-card-text>
    </v-card>

    <!-- tab内容-有动效 -->
    <!-- <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
        :id="item"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tab: '类型2',
        items: [
          '类型1', '类型2', '类型3', '类型4', '类型5',
        ],
        text: 'Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    }
  }
</script>

<style lang="scss" scoped>
.page-demo5 {
  // .v-item-group {
  //   transition: none;
  // }
  // .v-window__container::v-deep {
  //   transition: none;
  // }
}
</style>