<template>
  <div class="header_1">
    <div class="title_wode1">
      <router-link :to="{path:'/me'}">
        <i class="icon-mjiantou-copy iconfont ii"></i>
      </router-link>
      <span>密码登录</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Myheader_zhm"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_imis59llh0q.css";
  .header_1{
    width: 100%;
    background-color: #3190e8;
    height: 1.95rem;
    overflow: hidden;
  }
  .ii{
    float: left;
    padding-left: .3rem;
    padding-top: .3rem;
  }
  .title_wode1 {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    padding-top: .3rem;

  }
</style>
