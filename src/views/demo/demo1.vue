<template>
  <!-- 面包屑、flex布局 -->
  <div class="page-demo1">
    <div class="content">
      <!-- 面包屑 -->
      <v-breadcrumbs :items="items" large>
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>

      <!-- flex布局 -->
      <v-layout wrap class="px-4 pb-3" style="height:300px;">
        <v-flex xs12 sm12 md3>
          <span>参观指南</span>
        </v-flex>
        <v-flex xs12 sm12 md9>
          <div class="notice">
            <h2 span>通知公告</h2>
            <div>
              垂直居中的内容
              <p style="margin-bottom:100px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam blanditiis quidem eius nesciunt exercitationem aspernatur dolorum? Excepturi molestiae eos, iure tempore facilis dolore, ipsum quo temporibus quaerat cupiditate iusto!</p>
              <p style="margin-bottom:100px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam blanditiis quidem eius nesciunt exercitationem aspernatur dolorum? Excepturi molestiae eos, iure tempore facilis dolore, ipsum quo temporibus quaerat cupiditate iusto!</p>
              <p style="margin-bottom:100px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam blanditiis quidem eius nesciunt exercitationem aspernatur dolorum? Excepturi molestiae eos, iure tempore facilis dolore, ipsum quo temporibus quaerat cupiditate iusto!</p>
              <p style="margin-bottom:100px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam blanditiis quidem eius nesciunt exercitationem aspernatur dolorum? Excepturi molestiae eos, iure tempore facilis dolore, ipsum quo temporibus quaerat cupiditate iusto!</p>
              <p style="margin-bottom:100px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam blanditiis quidem eius nesciunt exercitationem aspernatur dolorum? Excepturi molestiae eos, iure tempore facilis dolore, ipsum quo temporibus quaerat cupiditate iusto!</p>
              <p style="margin-bottom:100px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam blanditiis quidem eius nesciunt exercitationem aspernatur dolorum? Excepturi molestiae eos, iure tempore facilis dolore, ipsum quo temporibus quaerat cupiditate iusto!</p>
              <p style="margin-bottom:100px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam blanditiis quidem eius nesciunt exercitationem aspernatur dolorum? Excepturi molestiae eos, iure tempore facilis dolore, ipsum quo temporibus quaerat cupiditate iusto!</p>
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
          {
            text: '首页',
            disabled: false,
            href: '/',
          },
          {
            text: '列表',
            disabled: false,
            href: 'demo3',
          },
          {
            text: '详情',
            disabled: true,
            href: 'breadcrumbs_link_2',
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.page-demo1 {
  .notice {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
}
</style>