<template>
  <div class="vip">
    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/me'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>会员中心</span>
      </div>
    </div>
    <p class="wei">为账户<span>15936942353</span>购买会员</p>
    <section class="middle_vip">
      <router-link :to="{path: '/Membership'}" class="hy">
        <span>会员特权</span>
        <section class="speak">
          <p>会员说明</p>
          <i class="icon-arrow-right iconfont"></i>
        </section>
      </router-link>
      <section class="province">
        <div class="img1">
          <img src="../assets/province.jpg" alt="">
        </div>
        <div class="reduce">
          <h4>减免配送费</h4>
          <p>每月减免30单，每日可减免3单，每单最高减4元</p>
          <p>蜂鸟专送专享</p>
        </div>
      </section>
      <section class="province">
        <div class="img1">
          <img src="../assets/pv.jpg" alt="">
        </div>
        <div class="reduce">
          <h4>减免配送费</h4>
          <p>每月减免30单，每日可减免3单，每单最高减4元</p>
          <p>蜂鸟专送专享</p>
        </div>
      </section>
      <section class="open">
        <div class="openVIP">
          <span>开通会员</span>
        </div>
        <section class="purchase">
          <div class="months">
            <span>1个月</span>
            <span class="money">￥20</span>
          </div>
          <router-link :to="{path:'/online'}" class="purchase1">购买</router-link>
        </section>
      </section>
    </section>
    <router-link :to="{path:'/exchange'}" class="dh_vip">
      <span class="duihuan">兑换会员</span>
      <section class="use">
        <span >使用卡号卡密</span>
        <i class="icon-arrow-right iconfont youjiantou"></i>
      </section>
    </router-link>
    <router-link :to="{path:'/Purchase_record'}" class="dh_vip">
      <span class="duihuan">购买记录</span>
      <section class="use">
        <span>开发票</span>
        <i class="icon-arrow-right iconfont youjiantou"></i>
      </section>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "E_VIP_zhm"
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_t6zrg2c8um.css";

  .vip {
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

  .wei {
    font-size: .6rem;
    color: #666;
    line-height: 2rem;
    padding-left: .7rem;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  .wei span {
    font-weight: 700;
  }

  /*会员特权*/
  .middle_vip {
    background-color: #fff;
    padding-left: .7rem;
    margin-bottom: .5rem;
  }

  .hy {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: .7rem;
  }

  .hy span {
    font-size: .7rem;
    color: #333;
  }

  .speak {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .speak p {
    font-size: .7rem;
    color: #999;
    margin-right: .2rem;
  }

  .speak i {
    color: #999;
  }

  .province {
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    padding: .8rem 0;
  }

  .img1 img {
    width: 1.6rem;
    height: 1.8rem;
    margin-right: .6rem;
  }

  h4 {
    font-size: .7rem;
    color: #333;
    font-weight: 400;
  }

  .reduce p {
    font-size: .5rem;
    color: #999;
  }

  .open {
    background-color: #fff;
    padding-left: .7rem;
    margin-bottom: .5rem;
  }

  .openVIP {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: .7rem;
  }
  .purchase{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: .7rem;
    font-size: .7rem;
    line-height: 2.6rem;
  }
.months{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: .7rem;
  font-size: .7rem;
  line-height: 2.6rem;
}
  .money{
    font-weight: 700;
    color: #f60;
  }
  .purchase1{
    border: .025rem solid #f60;
    border-radius: .2rem;
    line-height: 1.2rem;
    height: 1.2rem;
    width: 2.6rem;
    text-align: center;
    font-size: .6rem;
    color: #f60;
  }
  .dh_vip{
    padding: 0 .7rem;
    margin-bottom: .5rem;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: .7rem;
    margin-top: .5rem;
  }
  .duihuan{
    font-size: .7rem;
    color: #333;
  }
  .use span{
    font-size: .6rem;
    color: #999;
    margin-right: .2rem;
  }
  .youjiantou{
    color: rgb(204, 204, 204);
  }
</style>
