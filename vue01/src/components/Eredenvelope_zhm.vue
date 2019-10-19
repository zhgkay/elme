<template>
  <div class="red_envelope">
    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/discount'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>兑换红包</span>
      </div>
    </div>
    <form class="exchge_code">
      <input type="text" @input="change2" class="exchange_input" placeholder="请输入兑换码" v-model="exchange_code1">
      <section class="exchange_yzm">
        <input type="text" @input="change2" placeholder="验证码" class="code1" v-model="captcha_code">
        <div class="img_change">
          <img :src="imgdata" alt="">
          <div class="code2" @click="reqimg">
            <p>看不清</p>
            <p class="bg_color">换一张</p>
          </div>
        </div>
      </section>
    </form>
    <button @click="exchange" class="determine" :class="{'num_style':bgcolor}" v-if="num">兑换</button>
    <!--错误弹出框-->
    <div class="Eject1" v-show="tf">
      <div class="round1"><span>!</span></div>
      <p>{{tck}}</p>
      <button @click="tf=false" class="btn3">确认</button>
    </div>


  </div>
</template>

<script>
  export default {
    name: "Eredenvelope_zhm",
    data() {
      return {
        imgdata: "",
        user_id: "",
        exchange_code: "",
        captcha_code: "",
        tck: '',
        tf: '',
        num: true,
        exchange_code1: "",
        bgcolor: false,

      }
    },
    methods: {
      reqimg() {
        this.Myhttp.post("/v1/captchas", "", data => {
          this.imgdata = data.code;
        })
      },
      //兑换红包
      exchange() {
        this.Myhttp.post("/v1/users/:user_id/hongbao/exchange", {
          user_id: this.user_id,
          exchange_code: this.exchange_code,
          captcha_code: this.captcha_code
        }, data => {
          console.log(data);
          // 判断输入框输入是否正确
          if(data.message){
            this.tck=data.message;
            this.tf=!this.tf;
          }
        })
      },
      change2() {
        if (this.captcha_code.length >= 4) {
          this.captcha_code = this.captcha_code.slice(0, 4);
        }
        if (this.exchange_code1 != "" && this.captcha_code.length == 4) {
          this.bgcolor = true;
        }
      }
    },
    created() {
      this.Myhttp.post("/v1/captchas", "", data => {
        console.log(data);
        this.imgdata = data.code;
      })
    },
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_vtw3c3gskj9.css";

  .red_envelope {
    width: 100%;
    height: 33.3rem;
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

  .num_style {
    background-color: #4cd964;
  }

  .title_wode1 {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    padding-top: .3rem;

  }

  .exchge_code {
    margin-top: .7rem;
    padding: 0 .5rem;
  }

  .exchange_input {
    width: 89%;
    font-size: .7rem;
    color: #666;
    padding: .6rem .4rem;
    border-radius: .15rem;
    border: none;
    outline: none;
    margin-top: .7rem;
    margin-left: .5rem;
  }

  .exchange_yzm {
    height: 2.2rem;
    display: flex;
    margin-top: .7rem;
    width: 96%;
  }

  .exchange_yzm input {
    font-size: .7rem;
    color: #666;
    padding: .4rem;
    border-radius: .15rem;
    flex: 3;
  }

  .img_change {
    display: flex;
    align-items: center;
    flex: 2;
    margin-left: .3rem;
    background-color: #fff;
    padding-left: .2rem;
    border-radius: .15rem;

  }

  .img_change img {
    width: 3.5rem;
    height: 1.5rem;
    margin-right: .2rem;
  }

  .code1 {
    font-size: .7rem;
    color: #666;
    padding: .4rem;
    border-radius: .15rem;
    flex: 3;
    border: none;
    outline: none;
    margin-left: .4rem;
  }

  .code2 {
    font-size: .55rem;
    color: #666;
  }

  .bg_color {
    color: #3b95e9;
    margin-top: .2rem;
  }

  .determine {
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .7rem;
    width: 92%;
    border: none;
    outline: none;
  }
  .btn3 {
    width: 100%;
    font-size: .8rem;
    color: #fff;
    font-weight: 700;
    margin-top: .8rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 1.8rem;
    border: 1px;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
  .Eject1 {
    position: absolute;
    top: 50%;
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

  .round1 {
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

  .Eject1 p {
    font-size: .8rem;
    color: #333;
    line-height: .9rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;
  }
</style>
