<template>
  <div class="footer">
    <van-tabbar
      v-model="active"
      active-color="skyblue"
      inactive-color="#000"
    >
      <van-tabbar-item :to="{path:'/index'}" class="icon-changyonglogo40 iconfont">外卖</van-tabbar-item>
      <van-tabbar-item :to="{path:'/search'}" class="icon-zhinanzhen iconfont">搜索</van-tabbar-item>
      <van-tabbar-item :to="{path:''}" class="icon-dingdan iconfont">订单</van-tabbar-item>
      <van-tabbar-item :to="{path:'/me'}" class="icon-My iconfont">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
    export default {
        name: "Footer_gzh",
      data() {
        return {
          active:0,
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451811_mhx158y7w7.css";
</style>
