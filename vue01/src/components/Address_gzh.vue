<template>
    <ul>
      <!--添加地址顶部-->
      <li class="top">
        <router-link class="back" :to="{path:'/corder'}"><i class="icon-Group- iconfont"></i></router-link>
        <h4>选择地址</h4>
      </li>
      <!--我的地址接口-->
      <li></li>
      <!--添加地址按钮-->
      <li class="address">
        <router-link :to="{path:'/pulsaddress'}"><i class="icon-40 iconfont"></i><span> 新增收获地址</span></router-link>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "Address_gzh"
    }
</script>

<style scoped>
@import "//at.alicdn.com/t/font_1451811_psq3pmky4hb.css";
.top{
  background: #3190e8;
  color: white;
  position: relative;
  height: 2rem;
}
.back{
  position: absolute;
  left: 0;
  top: 0.2rem;
  display: inline-block;
  color: white;
}
.icon-Group-{
  font-size: 1.5rem;
}
.top h4{
  position: absolute;
  top: .3rem;
  left: 38%;
}
  .icon-40{
    font-size: 1.1rem;
    color: #3190e8;
  }
  .address span{
    font-size: 1rem;
    color: #3190e8;
  }
  .address{
    position: fixed;
    bottom: 1rem;
    left: 30%;
  }
</style>
