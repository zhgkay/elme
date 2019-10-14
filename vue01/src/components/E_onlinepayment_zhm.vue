<template>
  <div class="onlinepayment">
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
        <div>支付剩余时间</div>
        <p class="Count_down">00 : 00 : 00</p>
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
      <div @click="changeColor">
        <i :class="[temp?'dui':'dui1','icon-duihao1', 'iconfont']"></i>
      </div>
    </section>
    <section class="Alipay">
      <div class="zfb">
        <i class="icon-weixin iconfont weixin"></i>
        <span>微信</span>
      </div>
      <div @click="changeColor">
        <i :class="[temp?'dui1':'dui','icon-duihao1', 'iconfont']"></i>
      </div>
    </section>
    <p class="confirm">确认支付</p>
  </div>
</template>

<script>
  export default {
    name: "E_onlinepayment_zhm",
    data() {
      return {
        temp: true,
      }
    },
    methods: {
      changeColor() {
        this.temp = !this.temp;
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
  .confirm{
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
</style>
