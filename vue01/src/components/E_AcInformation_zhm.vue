<template>
  <div class="Information">
    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/me'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>账户信息</span>
      </div>
    </div>
    <div class="Head_portrait">
      <input type="file" class="file">
      <h2>头像</h2>
      <div>
        <img src="http://elm.cangdu.org/img/default.jpg" alt="" class="imgfile">
        <i class="class=" icon-arrow-right iconfont></i>
      </div>
    </div>
    <router-link :to="{}">
      <section class="name">
        <h2>用户名</h2>
        <div class="username">
          <p>15936942353</p>
          <i class="icon-arrow-right iconfont "></i>
        </div>
      </section>
    </router-link>
    <router-link :to="{}">
      <section class="shouhuo">
        <h2>收货地址</h2>
        <div class="username1">
          <i class="icon-arrow-right iconfont "></i>
        </div>
      </section>
    </router-link>
    <section class="Account_number">
      账号绑定
    </section>
    <router-link :to="{}">
      <section class="phone">
        <div class="phone1">
          <i class="icon-shouji iconfont ip"></i>
          <h2>手机</h2>
        </div>
        <div class="phone2">
          <i class="icon-arrow-right iconfont "></i>
        </div>
      </section>
    </router-link>
    <section class="Account_number">
      安全设置
    </section>
    <router-link :to="{}">
      <section class="phone">
        <div class="phone1">
          <h2>手机</h2>
        </div>
        <div class="phone2">
          <p>修改</p>
          <i class="icon-arrow-right iconfont "></i>
        </div>
      </section>
    </router-link>
    <button @click="temp=!temp"  class="return">退出登录</button>
    <!--退出弹出框-->
    <div class="touming"v-show="temp" >
    </div>
    <div class="Eject" v-show="temp">
      <div class="round"><sapn>!</sapn></div>
      <p>是否退出登录</p>
      <div class="butt">
        <button @click="temp=false" class="btn1">再等等</button>
        <button @click="temp=false"  class="btn2">确认</button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "E_AcInformation_zhm",
    data(){
      return{
        temp:false
      }
    },

  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_t6zrg2c8um.css";

  .Information {
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

  .Head_portrait {
    margin-top: .4rem;
    padding: .5rem .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ddd;
    background: #fff;
    height: 3.1rem;
  }

  .file {
    display: block;
    position: absolute;
    opacity: 0;
    top: 2.35rem;
    left: 0;
    width: 100%;
    height: 3.1rem;
  }

  h2 {
    font-size: .6rem;
    color: #333;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  .imgfile {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    vertical-align: middle;
  }

  .name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ddd;
    background: #fff;
    margin-top: .4rem;
    padding: .5rem .4rem;
  }

  .username {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .username p {
    text-align: left;
    line-height: 1.39rem;
    font-size: .7rem;
    color: #999;
    margin-right: .2rem;
    font-weight: 100;
    font-family: Arial;
  }

  .username i {
    top: 0;

  }

  .username1 i {
    top: 0;

  }

  .shouhuo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ddd;
    background: #fff;
    padding: .5rem .4rem;
  }

  .shouhuo p {
    text-align: left;
    line-height: 1.39rem;
    font-size: .7rem;
    color: #999;
    margin-right: .2rem;
    font-weight: 100;
    font-family: Arial;
  }
  .Account_number{
    padding: .4rem;
    font-size: .5rem;
    color: #666;
  }
.phone{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  background: #fff;
  margin-top: .4rem;
  padding: .5rem .4rem;
}
.phone1{
  display: flex;
  justify-content: left;
  align-items: center;
}
  .ip{
    margin-right: 0.4rem;
    background-color: rgb(16,174,255);
    color: white;
    width: .8rem;
    height: 1rem;
    border-radius: 5px;
    text-align: center;
    padding: 0.25rem 0.1rem 0 0.1rem ;
  }
.phone2{
  display: flex;
  justify-content: left;
  align-items: center;
}
.phone2 p{
  text-align: left;
  line-height: 1.39rem;
  font-size: .7rem;
  color: #999;
  margin-right: .2rem;
  font-weight: 100;
  font-family: Arial;
}
.return{
  width: 96%;
  margin: 1.3rem auto 0;
  line-height: 1.5rem;
  border-radius: 5px;
  text-align: center;
  background: #d8584a;
  font-size: .6rem;
  color: #fff;
  border: none;
  outline: none;
}
.btn1{
  display: inline-block;
  padding: .4rem 1rem;
  border-radius: 5px;
  font-size: .6rem;
  color: #fff;
  letter-spacing: 1px;
  margin-top: 26px;
  background: #c1c1c1;
  margin-right: .4rem;
  border: none;
  outline: none;
}
.btn2{
  display: inline-block;
  padding: .4rem 1rem;
  border-radius: 5px;
  font-size: .6rem;
  color: #fff;
  letter-spacing: 1px;
  margin-top: 26px;
  background: #dd6b55;
  border: none;
  outline: none;
}

  .Eject{
    width: 86%;
    background: #fff;
    padding: 17px;
    position: absolute;
    top: 20%;
    left: 3%;
    z-index: 1000;
    border-radius: 5px;
    margin: auto;
  }
  .round{
    /*width: 3rem;*/
    /*height: 3rem;*/
    /*border: .15rem solid #f8cb86;*/
    /*border-radius: 50%;*/
    display: flex;
    justify-content: center;
    align-items: center;
    /*flex-direction: column;*/
    color: #f8cb86;
    width: 90px;
    height: 90px;
    border: 4px solid #f8bb86;
    border-radius: 50%;
    margin: 20px auto;
    position: relative;
  }
  .Eject p{
    font-size: .8rem;
    color: #333;
    line-height: .9rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;
  }
  .butt{
    display: flex;
    /*margin-left: 3rem;*/
    justify-content: center;
  }
  .touming{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color:rgba(0,0,0,0.3);
  }
</style>
