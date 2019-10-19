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
    <h3>Q1: 怎么获得红包？</h3>
    <p>通过邀请好友获得</p>
    <p>在下单返红包的商家下单获得</p>
      <p>抢微信朋友分享的红包获得</p>
    <h3>Q2: 红包可以做什么？</h3>
    <p>可以抵扣在线支付时的实际支付金额。</p>
    <h3>Q3: 红包的门槛金额按照什么金额计算？</h3>
    <p>红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</p>
    <h3>Q4: 一个红包能拆开多次使用吗？</h3>
    <p>不能，一个红包只能一次性使用，不能分开使用。</p>
    <h3>Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</h3>
    <p>会的，订单无效后红包会自动返还到您的账户里。</p>
    <h3>Q6: 红包兑换码怎样兑换成红包，怎样查看红包？</h3>
    <p>在个人中心 > 我的红包 > 兑换红包，输入兑换码进行兑换。</p>
    <!--<h3>Q7: 邀请好友了，为什么没获得红包？</h3>-->
    <!--<p>先检查下您是否在同一设备上进行的邀请？或者被邀请人是否通过您发给对方的链接进行注册？而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。</p>-->

    <!--<h3>Q8: 预订早餐、预订午餐的红包怎么使用？在哪里查询？</h3>-->
    <!--<p>预订早餐、预订午餐的红包暂时不支持直接点外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。</p>-->
    <!--<p>预订早餐、预订午餐的红包从APP首页点击“预订早餐”按钮进入后在右上角的个人中心中查找预订早餐、预订午餐的红包。</p>-->
    <!--<h3>Q9: 互斥红包怎么使用？</h3>-->
    <!--<p>互斥红包不与其他优惠活动（包含但不限于：新用户专享、满X元减X元、满X元赠XX）同时使用。</p>-->
    <!--<h3>Q10: 返红包活动， 红包领取规则是什么?</h3>-->
    <!--<p>互斥红包不与其他优惠活动（包含但不限于：新用户专享、满X元减X元、满X元赠XX）同时使用。</p>-->
  </div>
</template>

<script>
    export default {
        name: "E_redintegral_zhm"
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
