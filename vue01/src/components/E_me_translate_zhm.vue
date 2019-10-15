<template>

  <div class="translate">
    <!--下载弹出框-->
    <div class="Eject" v-show="temp">
      <div class="round"><span>!</span></div>
      <p>IOS用户请前往APPstore下载</p>
      <button @click="temp=false" class="btn2">确认</button>
    </div>
    <!--这是下载整个页面-->
    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/me'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>

        <span>下载</span>
      </div>
    </div>
    <div class="img1">
      <img
        src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=9273c93d53ee3d6d22c680cd7b2d0a1f/d0c8a786c9177f3ea44726977acf3bc79f3d563d.jpg"
        alt="" class="img2">
    </div>
    <p>下载饿了吗APP</p>
    <button @click="temp=!temp" class="btn1">下载</button>
  </div>
</template>

<script>
  export default {
    name: "E_me_translate_zhm",
    data() {
      return {
        temp: false
      }
    },
    methods: {}
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_imis59llh0q.css";

  .iconfont {
    font-size: .77rem;
  }

  .translate {
    width: 100%;
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

  .img1 {
    text-align: center;
  }

  .img2 {
    border-radius: 1rem;
    margin-top: 1rem;
    width: 8rem;
    height: 8rem;
  }

  p {
    font-size: .8rem;
    color: #666;
    margin-bottom: 1rem;
    text-align: center;
  }

  .btn1, .btn2 {
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .5rem;
    outline: none;
    border: none;
    width: 80%;
    margin: auto;
    display: block;
    cursor: pointer;
  }

  .btn2 {
    width: 100%;
  }

  .Eject {
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
