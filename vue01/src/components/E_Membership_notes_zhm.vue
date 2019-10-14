<template>
  <div class="Membership">
    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/vip'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>会员说明</span>
      </div>
    </div>
    <p class="head">尊敬的用户，随着会员体系逐渐完善,自2016年10月10日起，饿了么会员权益将做如下优化:购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</p>
    <h3>Q1: 特权介绍</h3>
    <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
    <p>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
    <p>更多特权，敬请期待！</p>
    <h3>Q2: 资费介绍</h3>
    <p>饿了么会员卡：20元</p>
    <h3>Q3: 使用说明</h3>
    <p>当用户满足以下任一条件，会员服务自动失效：</p>
   <ol>
     <li>自绑定之日起超过31天；</li>
     <li>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</li>
   </ol>
    <h3>Q4: 购卡说明</h3>
    <p>在线购买：饿了么App>我的>饿了么会员卡</p>
    <h3>Q5: 温馨提示</h3>
    <ul>
      <li>用户在当前会员服务失效前，无法购买新卡。</li>
      <li>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</li>

    </ul>
  </div>
</template>

<script>
    export default {
        name: "E_Membership_notes_zhm"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_vtw3c3gskj9.css";
  .Membership{
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
  .head{
    /*padding-top: .5rem;*/
    margin: auto;
    /*color: #999;*/
    font-weight: 500;
    font-size: .6rem;
    padding: .5rem .7rem 0;
    width: 65%;
    font-size: .7rem;
  }
  h3{
    display: block;
    font-size: .88em;
    line-height: 2rem;
    /*color: #333;*/
    font-weight: 400;
    padding: 0 .5rem .5rem;
    font-weight: 600;
  }
  p{
    font-size: .66rem;
    color: #666;
    line-height: 1rem;
    padding: 0.3rem .4rem .5rem;
  }

  li{
    background-color: #fff;
    padding-top:.3rem;
    overflow-y: auto;
    color: #999;
    font-size: .6rem;
    padding: .3rem .5rem 0;
  }

</style>
