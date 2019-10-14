<template>
    <ul id="footer">
      <li>
        <router-link :to="{path:''}" active-class="cor"><i class="icon-changyonglogo40 iconfont"></i></router-link><p>外卖</p>
      </li>
      <li>
        <router-link :to="{path:''}" active-class="cor"><i class="icon-zhinanzhen iconfont"></i></router-link><p>搜索</p>
      </li>
      <li>
        <router-link :to="{path:''}" active-class="cor"><i class="icon-dingdan iconfont"></i></router-link><p>订单</p>
      </li>
      <li>
        <router-link :to="{path:''}" active-class="cor"><i class="icon-My iconfont"></i></router-link><p>我的</p>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "Footer_gzh"
    }
</script>

<style scoped>
li{
  font-size: 10rem;
}
  @import "//at.alicdn.com/t/font_1451811_we9yr35el8.css";
  .cor{
    color: deepskyblue;
  }
  ul{
    position: fixed;
    border-top: solid 1px rgba(0,0,0,0.1);
    width: 100%;
    height: 2.8rem;
    bottom: 0;
  }
  li{
    display: inline-block;
    margin-left: 2.3rem;
  }
  i{
    font-size: 1.5rem;
  }
  p{
    font-size: 0.8rem;
  }
</style>
