<template>
    <div class="again">
      <router-link :to="{path:'/me'}">
        <div class="again1">
          <h3>请重新登录</h3>
          <p>请返回后重新进入积分商城~</p>
          <img src="http://yun.duiba.com.cn/webapp/img/retrylogin.png" alt="">
        </div>
      </router-link>

    </div>
</template>

<script>
    export default {
        name: "E_again_zhm"
    }
</script>

<style scoped>
  .again1{
    text-align: center;
    overflow: hidden;
    position: absolute;
    top: 30%;
    left: 27%;
  }
  h3{
    font-size: 26px;
    color: #0d7fd5;
    margin-bottom: 15px;
  }
  p{
    font-size: 14px;
    color: #666;
    margin-bottom: 19px;
  }
  img{
    border: 0;
    vertical-align: middle;
    width: 7rem;
    height: 7rem;
  }
</style>
