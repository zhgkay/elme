<template>
  <div class="exchange">
    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/vip'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>兑换会员</span>
      </div>
    </div>
    <p class="Success">成功兑换后将关联到当前帐号： <span class="number">15923456782</span></p>
    <div class="from_style">
      <input type="text" placeholder="请输入10位卡号" class="numbercolor">
      <input type="password" placeholder="请输入6位卡密" class="passwordcolor">
    </div>
    <p class="duihuan">兑换</p>
    <h3>—温馨提示—</h3>
    <p class="newvip">新兑换的会员服务，权益以「会员说明」为准。</p>
    <p class="a1">月卡<b>30次</b>减免配送费</p>
    <p class="a1">季卡<b>90次</b>减免配送费</p>
    <p class="a1">年卡<b>360次</b>减免配送费</p>
    <p class="a2">＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
  </div>

</template>

<script>
  export default {
    name: "E_exchange_zhm"
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_t6zrg2c8um.css";

  .exchange {
    width: 100%;
    height: 735px;
    background: #f5f5f5;
  }

  .header_1 {
    width: 100%;
    background-color: #3190e8;
    height: 1.95rem;
    overflow: hidden;
  }

  .ii {
    float: left;
    padding-left: .3rem;
    padding-top: .3rem;
    color: white;
  }

  .title_wode1 {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    padding-top: .3rem;

  }

  .Success {
    font-size: .7rem;
    color: #666;
    line-height: 2rem;
    padding-left: .7rem;
  }

  .Success span {
    font-weight: 700;
  }

  .from_style {
    display: flex;
    flex-direction: column;
  }

  .numbercolor {
    border-bottom: 1px solid #f5f5f5;
    height: 2rem;
    font-size: .65rem;
    color: #999;
    padding-left: .7rem;
    border: none;
    outline: none;
    /*display: inline-block;*/
    /*text-align: start;*/
    background-color: white;
  }

  .passwordcolor {
    border-bottom: 1px solid #f5f5f5;
    height: 2rem;
    font-size: .65rem;
    color: #999;
    padding-left: .7rem;
    background-color: white;
    border: none;
    outline: none;
  }

  .duihuan {
    background-color: #ccc;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .7rem;
    font-weight: 700;
  }

  h3 {
    text-align: center;
    font-weight: 400;
    font-size: .65rem;
    color: #aaa;
    margin-bottom: .6rem;
  }
.newvip{
  padding-left: 2rem;
  font-size: .5rem;
  color: #aaa;
  line-height: .8rem;
}
  .a1{
    padding-left: 2rem;
    font-size: .5rem;
    color: #aaa;
    line-height: .8rem;
  }
  .a2{
    font-size: .5rem;
    color: #aaa;
    line-height: .8rem;
  }
</style>
