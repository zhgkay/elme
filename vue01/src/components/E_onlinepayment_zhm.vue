<template>
  <div class="onlinepayment">
    <!--下载弹出框-->
    <div class="Eject" v-show="temp2">
      <div class="round"><span>!</span></div>
      <p>当前环境无法支付，请打开官方APP进行付款</p>
      <button @click="order" class="btn2">确认</button>
    </div>

    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/vip'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>在线支付</span>
      </div>
    </div>
    <section class="Surplus">
      <section class="time">
        <div id="tm">支付剩余时间</div>
        <van-count-down :time="time" />
      </section>
    </section>
    <div class="Choice">选择支付方式</div>
    <section class="Alipay">
      <div class="zfb">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571051844615&di=f73c0be4de0ef5f3e4ec5586ae9729b4&imgtype=0&src=http%3A%2F%2Fimg.jpjww.com%2Fimg%2F23148f56e1c1616f.jpg"
          alt="" class="iz">
        <span>支付宝</span>
      </div>
      <div @click="temp1=true;">
        <i :class="[temp1?'dui':'dui1','icon-duihao1', 'iconfont']"></i>
      </div>
    </section>
    <section class="Alipay">
      <div class="zfb">
        <i class="icon-weixin iconfont weixin"></i>
        <span>微信</span>
      </div>
      <div @click="temp1=false;">
        <i :class="[!temp1?'dui':'dui1','icon-duihao1', 'iconfont']"></i>
      </div>
    </section>
    <p class="confirm"  @click="temp2=true">确认支付</p>
  </div>
</template>

<script>
  export default {
    name: "E_onlinepayment_zhm",
    data() {
      return {
        temp2: false,
        temp1: true,
        time: 1* 30 * 30 * 1000
      }
    },
    methods:{
      order(){
        this.temp2=false;
        this.$router.push({path:'/myorder'});
      }
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_x6fsgct9cyo.css";

  .onlinepayment {
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

  .Surplus {
    background-color: #fff;
    padding: .7rem;
    text-align: center;
  }

  .Count_down {
    font-size: 1.5rem;
    color: #333;
    margin: .3rem 0 1rem;
  }

  .time div {
    font-size: .6rem;
    color: #666;
    margin-top: 1rem;
  }

  .Choice {
    background-color: #f1f1f1;
    padding: 0 .7rem;
    font-size: .7rem;
    color: #666;
    line-height: 1.8rem;
  }

  .Alipay {
    background-color: white;
    padding: .4rem .7rem;
    line-height: 2.6rem;
    border-bottom: .025rem solid #f5f5f5;
    display: flex;
    justify-content: space-between;
  }

  .zfb {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .iz {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    margin-right: .2rem;
  }

  .dui {
    color: rgb(76, 217, 100);
    font-size: 1rem;
  }

  .weixin {
    color: rgb(76, 217, 100);
    font-size: 2rem;
    margin-right: .2rem;
  }

  .dui1 {
    color: rgb(204, 204, 204);
    font-size: 1rem;
  }

  .confirm {
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .5rem;
    font-weight: 700;
  }

  #tm{
    font-size: .8rem;
  }

  .time div[data-v-f2258d8e][data-v-f2258d8e]{
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
  .btn2 {
    width: 100%;
    font-size: .8rem;
    color: #fff;
    font-weight: 700;
    margin-top: .8rem;
    background-color: #4cd964;
    text-align: center;
    line-height: 1.8rem;
    border: 1px
  }

  .Eject {
    position: absolute;
    top: 45%;
    left: 50%;
    margin-top: -6rem;
    margin-left: -6rem;
    width: 12rem;
    animation: tipMove .4s;
    background-color: #fff;
    padding-top: .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px;
    border-radius: .25rem;
  }

  .round {
    width: 3rem;
    height: 3rem;
    border: .15rem solid #f8cb86;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #f8cb86;
  }

  .Eject p {
    font-size: .8rem;
    color: #333;
    line-height: .9rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;
  }


</style>
