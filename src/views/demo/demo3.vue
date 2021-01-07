<template>
  <!-- 分页列表 -->
  <div class="page-demo3">
    <v-list>
      <v-list-item v-for="(item, index) in dataList" :key="index">
        <p>{{item.activityName}}</p>
      </v-list-item>
    </v-list>

    <!-- 仅在pc显示 -->
    <!-- <div class="text-center d-none d-lg-block"> -->
    <div class="text-center">
      <v-pagination
        v-model="listQuery.currentPage"
        :length="total"
        :total-visible="7"
        @input="handleCurrentChange"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        listQuery: {
          currentPage: 1,
          size: 10
        },
        total: 0,
        dataList: [],
        listLoading: false
      }
    },
    methods: {
      getDataList() {
        this.listLoading = true
        this.$http
          .get('/pc/activity/getActivityListByType.do', {
            ...this.listQuery
          })
          .then(res => {
            this.listLoading = false
            if (res.success) {
              this.dataList = res.data
              this.total = res.page.totalPage
            } else {
              this.$message.error(res.message)
            }
          })
      },
      handleCurrentChange() {
        this.getDataList()
      }
    },
    created() {
      this.getDataList()
    }
  }
</script>

<style lang="scss" scoped>

</style>