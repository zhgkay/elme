<template>
    <div class="balance">
      <div class="header_1">
        <div class="title_wode1">
          <router-link :to="{path:'/Mybalance'}">
            <i class="icon-mjiantou-copy iconfont ii"></i>
          </router-link>
          <span>余额说明</span>
        </div>
      </div>
      <h3>Q1: 使用余额的条件</h3>
      <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
      <h3>Q2: 余额可以怎么用？</h3>
      <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
      <h3>Q3:我要如何提现？</h3>
      <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
      <h3>Q4:为什么会提现失败？</h3>
      <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
    </div>
</template>

<script>
    export default {
        name: "E_balance_zhm"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_vtw3c3gskj9.css";
  .balance{
    width: 100%;
    /*height: 600px;*/
    /*background: #f5f5f5;*/
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
