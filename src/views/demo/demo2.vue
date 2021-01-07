<template>
  <!-- 在pc和移动端适配如图片、字体、间距等 -->
  <div class="page-demo2" :class="{'md': $vuetify.breakpoint.mdAndDown}">
    <div class="list">
      <div class="item pa-3 d-lg-flex" v-for="(item, index) in 10" :key="index">
        <img src="@images/1.jpg" alt="">
        <div class="info">
          <h2>这里是展三千玲珑——中国海洋贝类展</h2>
          <p class="des">展览分为六个单元，集中展示了3000余件珍贵的贝类标本及贝文化相关文物，全方位展示了贝类背后蕴藏的文学、历史、医药、饮食、邮票等知识，是山东博物馆有史以来展出标本数量最多的自然类展览。</p>
          <div class="other">
            <p>时间：周二到日 09:00 - 17:00</p>
            <p>地点：地点地点</p>
            <a href="">sdfsdff</a>
            <v-btn
              elevation="2"
            >Block Button</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
.page-demo2 {
  .list {
    .item {
      border-bottom: solid 1px #ccc;
      img {
        width: 360px;
        height: 220px;
        object-fit: cover;
      }
      .info {
        padding: 10px;
        flex: 1;
        font-size: 14px;
        h2 {
          font-size: 18px;
        }
      }
    }
  }
  &.md {
    .list {
      img {
        width: 100%;
        height: 150px;
      }
    }
  }
}
</style>