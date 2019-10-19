<template>
  <div class="password">
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
        <li><input type="text" class="number" v-model="username"></li>
        <li>
          <input :type="temp ? 'password':'text'" class="password1" name="password" v-model="password">
          <div class="on">
            <span :class="[temp? 'sp1':'sp2']">abc...</span>
            <span @click="temp=!temp" :class="[temp?'button1':'button2']"></span>
          </div>
        </li>
        <li><input type="text" placeholder="验证码" class="code1" v-model="codel">
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
    <p class="p1">温馨提示：未注册过的账号，登录时将自动注册</p>
    <p class="p1">注册过的账户可凭账户密码登录</p>
    <button @click="login" class="password_login">登录</button>
    <router-link :to="{path: '/Reset'}" :class="{Reset:'true'}">
      重置密码?
    </router-link>
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
    name: "E_password_zhm",
    data() {
      return {
        temp: false,
        imgdata: "",
        username: "",
        password: '',
        codel: '',
        tck: '',
        tf: false,
      }
    },
    methods: {
      reqimg() {
        this.Myhttp.post("/v1/captchas", "", data => {
          this.imgdata = data.code;
        })
      },
      //注册
      login() {
        this.Myhttp.post("/v2/login", {
          username: this.username,
          password: this.password,
          captcha_code: this.codel
        }, data => {
          console.log(data);
          //先判断输入框是否为空
          if (this.username == '' && this.password == '') {
            this.tck = "请输入用户名/密码/验证码";
            console.log(this.tck);
            //如果为空弹出框提示
            this.tf = !this.tf;
            //  判断密码和验证码是否正确
          } else if (data.message) {
            //提示错误信息
            this.tck = data.message;
            this.tf = !this.tf;
          } else {
            //如果以上不成立则登录成功
            this.$router.push({path: '/me', query: {data: data}});
            this.storage.set('userinfo', data);
          }


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

  .password {
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
    background-color: rgb(232, 240, 254);
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
  }

  .Reset {
    float: right;
    font-size: .6rem;
    color: #3b95e9;
    margin-right: .3rem;
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
