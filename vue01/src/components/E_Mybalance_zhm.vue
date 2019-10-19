<template>
  <div class="mybalance">
    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/me'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>我的余额</span>
      </div>
    </div>
    <section class="content_container">
      <section class="content_mingxi">
        <div class="header_now">
          <header>
            <div class="now">当前余额</div>
            <section class="balance">
              <img src="" alt="">
              <i class="icon-wenhao iconfont ie"></i>
              <router-link :to="{path: 'balance'}" class="balance1">余额说明</router-link>
            </section>
          </header>
          <p class="money"><b>0.00</b>元</p>
          <button class="carry">提现</button>
        </div>
      </section>
      <p class="transaction">交易明细</p>
      <div class="none">
        <img :src="imgsrc" alt="">
        <p>暂无明细记录</p>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    name: "E_Mybalance_zhm",
    data() {
      return {
        imgsrc: require("../assets/order.png")
      }
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_vtw3c3gskj9.css";

  .ie {
    font-size: 1.2rem;
    color: #3190e8;

  }
  .mybalance {
    width: 100%;
    height: 600px;
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
    color: #fff;
  }
  .title_wode1 {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    padding-top: .3rem;

  }
  .content_mingxi {
    padding: .3rem;
    background-color: #3190e8;
  }
  .header_now {
    padding: .4rem;
    background-color: #fff;
    border-radius: .15rem;
  }
  header {
    overflow: hidden;
  }
  .now {
    float: left;
    font-size: .55rem;
  }
  .balance {
    float: right;
    display: flex;
    justify-items: center;
  }
  .balance1 {
    color: #3190e8;
    font-size: .6rem;
    margin-top: .2rem;
  }
  .money {
    font-size: .7rem;
    color: #333;
  }
  b {
    font-size: 1.8rem;
    color: #333;
  }
  .carry {
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    color: #fff;
    border-radius: .15rem;
    line-height: 2rem;
    margin-top: 1rem;
    text-align: center;
    background-color: #ccc;
    border: none;
    outline: none;
  }
  .transaction {
    font-size: .6rem;
    color: #999;
    line-height: 2rem;
    padding-left: .5rem;
  }
  .none {
    text-align: center;
  }
  .none p {
    margin-top: .5rem;
    font-size: .7rem;
    color: #666;
  }
</style>
