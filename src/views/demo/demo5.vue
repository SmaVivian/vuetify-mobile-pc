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
    <!-- <v-card flat>
      <v-card-text v-text="text"></v-card-text>
    </v-card> -->

    <div class="content">
      <vue-waterfall-easy 
        :imgsArr="dataList" 
        srcKey="pictureId" 
        @scrollReachBottom="getData">
        <p class="pic-info">图片信息信息新新</p>
      </vue-waterfall-easy>
    </div>

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
  import vueWaterfallEasy from 'vue-waterfall-easy'
  export default {
    components: { vueWaterfallEasy },
    data() {
      return {
        tab: '类型2',
        items: [
          '类型1', '类型2', '类型3', '类型4', '类型5',
        ],
        text: 'Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        dataList: [],
        imgsArr: [],
        listQuery: {
          currentPage: 0,
          size: 10
        },
        total: 0,
      }
    },
    methods: {
      getData() {
        this.listQuery.currentPage++
        this.$http
          // .get('/pc/activity/getActivityListByType.do', {
          .get('https://lfyfly.github.io/vue-waterfall-easy/demo/static/mock/data.json', {
            ...this.listQuery,
            group: this.listQuery.currentPage - 1
          })
          .then(res => {
            this.listLoading = false
            if (res) {
            // if (res.success) {
              res.forEach(item => {
                item.pictureId = 'https://lfyfly.github.io/vue-waterfall-easy/demo/' + item.src.slice(1)
              })
              this.dataList = this.dataList.concat(res)
              // this.dataList = this.dataList.concat(res.data)
              // this.total = res.page.totalPage
              console.log(this.dataList)
            } else {
              this.$message.error(res.message)
            }
          })
      },
    },
    created() {
      this.getData()
    }
  }
</script>

<style lang="scss" scoped>
.page-demo5 {
  // position: relative;
  // width: 1200px;
  // height: calc(100vh - 50px);
  // margin: 0 auto;
  .content {
    // position: absolute;
    // top: 80px;
    // bottom: 0;
    width: 100%;
    height: calc(100vh - 80px);
    // width: calc(100% - 24px)
    // width: 1200px;
  }
}
</style>