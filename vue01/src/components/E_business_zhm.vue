<template>
  <div class="integral">
    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/discount'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>红包说明</span>
      </div>
    </div>
    <h3>Q1: 什么是商家代金券？</h3>
    <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
    <p>在下单返红包的商家下单获得</p>
    <h3>Q2: 怎么获得商家代金券？</h3>
    <p>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</p>
    <p>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</p>
    <h3>Q3: 商家代金券使用条件</h3>
    <p>商家代金券仅限在指定商家使用</p>
    <p>商家代金券仅限在线支付使用</p>


  </div>
</template>

<script>
    export default {
        name: "E_business_zhm"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_vtw3c3gskj9.css";
  .integral{
    width: 100%;
    height: 33.3rem;
    background: #fff;
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
    color: #fff;
  }
  .title_wode1 {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    padding-top: .3rem;

  }
  h3{
    display: block;
    font-size: .88em;
    line-height: 2rem;
    color: #333;
    font-weight: 400;
    padding: 0 .5rem .5rem;
  }
  p{
    font-size: .66rem;
    color: #666;
    line-height: 1rem;
    padding: 0 .5rem .5rem;
  }
</style>
