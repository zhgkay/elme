<template>
  <div class="footer">
    <van-tabbar
      v-model="active"
      active-color="skyblue"
      inactive-color="#000"
    >
      <van-tabbar-item :to="{path:'/index'}">
        <i class="iconfont icon-changyonglogo40"></i>
        <br>
        <span>外卖</span></van-tabbar-item>
      <van-tabbar-item :to="{path:'/search'}">
        <i class="iconfont icon-zhinanzhen"></i>
        <br>
        <span>搜索</span></van-tabbar-item>
      <van-tabbar-item :to="{path:''}">
        <i class="iconfont icon-dingdan"></i>
        <br>
        <span>订单</span></van-tabbar-item>
      <van-tabbar-item :to="{path:'/me'}">
        <i class="iconfont icon-My"></i>
        <br>
        <span>我的</span></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "Footer_gzh",
    data() {
      return {
        active: 0,
      }
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451811_mhx158y7w7.css";

  .icon-changyonglogo40,
  .icon-zhinanzhen,
  .icon-dingdan,
  .icon-My {
    font-size: 1.5rem;
  }

  span {
    font-size: .8rem;
  }
</style>
