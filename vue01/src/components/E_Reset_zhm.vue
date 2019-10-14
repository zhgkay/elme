<template>
  <div class="Reset">
    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/me'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>密码登录</span>
      </div>
    </div>
    <div class="user">
      <ul>
        <li><input type="text" class="number" placeholder="账号"></li>
        <li><input type="password" class="number" placeholder="旧密码"></li>
        <li><input type="password" class="number" placeholder="请输入新密码"></li>
        <li>
          <input class="password1" name="password" placeholder="请确认密码">
        </li>
        <li><input type="text" placeholder="验证码" class="code1">
          <div>
            <img :src="imgdata" alt="">
          </div>
          <div class="code2" @click="reqimg">
            <p>看不清</p>
            <p class="huan">换一张</p>
          </div>
        </li>
      </ul>
    </div>
    <button class="password_login">登录</button>
  </div>
</template>

<script>
  export default {
    name: "E_Reset_zhm",
    data() {
      return {
        temp: false,
        checked: true,
        imgdata: ""
      }
    },
    methods: {
      reqimg() {
        this.Myhttp.post("/v1/captchas", "", data => {
          this.imgdata = data.code;
        })
      }
    },
    created() {
      this.Myhttp.post("/v1/captchas", "", data => {
        console.log(data)
        this.imgdata = data.code;
      })
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_imis59llh0q.css";

  .Reset {
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
  }

  .title_wode1 {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    padding-top: .3rem;

  }

  .user {
    margin-top: .4rem;
    background-color: #fff;
  }

  .user li {
    display: flex;
    justify-content: space-between;
    padding: .6rem .8rem;
    border-bottom: 1px solid #f1f1f1;
  }

  .number, .password1 {
    font-size: .7rem;
    border: none;
    outline: none;
  }

  .on {
    /*font-size: .7rem;*/
    position: relative;
  }

  .sp1 {
    border-radius: .5rem;
    background-color: #ccc;
    font-size: .45rem;
    display: block;
    text-align: center;
    width: 2rem;
    height: .7rem;
    display: flex;
    justify-content: center;
    padding: 0 .2rem;
    line-height: .6rem;
    color: #fff;
  }

  .sp2 {
    font-size: .45rem;
    border-radius: .5rem;
    display: block;
    text-align: center;
    width: 2rem;
    height: .7rem;
    display: flex;
    justify-content: center;
    padding: 0 .2rem;
    line-height: .6rem;
    color: #fff;
    background-color: #4cd964;
  }

  .button1 {
    border-radius: .55rem;
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: -.2rem;
    z-index: 1;
    box-shadow: 0 0.02667rem 0.05333rem 0 rgba(0, 0, 0, .1);
    background-color: #f1f1f1;
    border-radius: 50%;
  }

  .button2 {
    border-radius: .55rem;
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: -.2rem;
    z-index: 1;
    left: 1.3rem;
    /*left: -.3rem;*/
    box-shadow: 0 0.02667rem 0.05333rem 0 rgba(0, 0, 0, .1);
    background-color: #f1f1f1;
    border-radius: 50%;
  }

  .huan {
    color: #3b95e9;
  }

  .code1 {
    font-size: .7rem;
    border: none;
    outline: none;
  }

  .code2 p {
    font-size: .55rem;
    margin-right: .4rem;
  }

  .p1 {
    font-size: .5rem;
    color: red;
    padding: .4rem .6rem;
    line-height: .5rem;
  }

  .password_login {
    margin: auto;
    font-size: .7rem;
    color: #fff;
    background-color: #4cd964;
    padding: .5rem 0;
    border: 1px;
    border-radius: .15rem;
    text-align: center;
    width: 94%;
    display: block;
    margin-top: 1rem;
    border: none;
    outline: none;
  }
</style>
