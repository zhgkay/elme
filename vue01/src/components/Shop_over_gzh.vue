<template>
  <div id="shop">
    <!--商品页头部-->
    <div class="tou">
      <div class="header">
        <router-link :to="{path:'index'}"><i class="icon-Group- iconfont back"></i></router-link>
        <img class="shopimg" :src="'http://elm.cangdu.org/img/'+ shop.image_path" alt="">
        <h1>{{shop.name}}</h1>
        <div class="song">
          <span>商家配送</span>
          <span>/分钟必达/</span>
          <span>配送费￥{{shop.float_delivery_fee}}</span>
        </div>
        <router-link :to="{path: '/shopxx'}" class="icon-icon-- iconfont you"></router-link>
        <span class="gonggao">公告:{{shop.promotion_info}}</span>
        <!--店铺活动-->
        <div class="hudu">
          <div class="hdu">
            <div>
              <span class="jian">减</span>
              <span>满30减5，满60减8（APP专享)</span>
              <div class="yuo" @click="isShow=true">1个活动></div>
            </div>
          </div>
        </div>
        <!--活动遮罩层-->
        <div class="zz" v-show="isShow">
          <h1>{{shop.name}}</h1>
          <div class="ym">
            <span>优惠信息</span>
          </div>
          <div class="mms">
            <span class="jian">减</span>
            <span>满30减5，满60减8（APP专享)</span>
          </div>
          <div class="ym2">
            <span>商家公告</span>
          </div>
          <div class="mms">
            <span class="jian">减</span>
            <span>满30减5，满60减8（APP专享)</span>
          </div>
          <div class="close" @click="isShow=false"><i class="icon-jiaochacross80 iconfont"></i></div>
        </div>
      </div>
    </div>
    <!--商品&评价-->
    <div class="sp">
      <van-tabs v-model="active">
        <van-tab title="商品" :to="{path:''}"></van-tab>
        <van-tab title="评价" :to="{path:'/pingjia'}"></van-tab>
      </van-tabs>
    </div>
    <Products_gzh></Products_gzh>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Overlay} from 'vant';

  Vue.use(Overlay);
  import Products_gzh from "./Products_gzh";

  export default {
    name: "Shop_over_gzh",
    components: {Products_gzh},
    data() {
      return {
        shop: {},
        active: 0,
        id: '',
        show: false,
        isShow: false
      }
    },
    created() {
      this.Myhttp.get('/shopping/restaurants?latitude=31.22967&longitude=121.4762', data => {
        for (let v in data) {
          if (this.$route.query.id == data[v].id) {
            this.shop = data[v];
          }
        }
        // console.log(this.shop);
      })
      this.id = this.$route.query.id;
      // console.log(this.id);
      this.$store.commit('setID', this.id);
      // console.log(this.$store.state.dataID);
    },
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451811_8q69tllytxe.css";

  #shop {
    position: relative;
  }

  .ym, .ym2 {
    text-align: center;
  }

  .mms {
    padding: 0.2rem;
    margin-left: 0.3rem;
  }

  .ym span {
    display: inline-block;
    border: solid 1px white;
    border-radius: 20px;
    padding: 0.05rem 0.1rem;
    margin-top: 4rem;
    margin-left: -2rem;
  }

  .zz h1 {
    margin-top: 0.5rem;
  }

  .ym2 span {
    display: inline-block;
    border: solid 1px white;
    border-radius: 20px;
    padding: 0.05rem 0.1rem;
    margin-left: -2rem;
  }

  .tou {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }

  .zz {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    color: white;
  }

  .ym2 {
    margin-top: 1rem;
  }

  .yuo {
    width: 1.5rem;
    display: inline-block;
    position: absolute;
    left: 8rem;
  }

  .header {
    position: relative;
    background-image: url("https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1876199116,875302461&fm=26&gp=0.jpg");
    padding: 0.3rem;
    box-sizing: border-box;

  }

  .hudu {
    position: absolute;
    color: white;
    top: 2.75rem;
  }

  .jian {
    background: orangered;
    padding: 0.01rem 0.05rem;
    border-radius: 5px;
  }

  .shopimg {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 5px;
  }

  h1 {
    position: absolute;
    top: 0.3rem;
    left: 3rem;
    display: inline-block;
    color: white;
  }

  .back {
    color: white;
    position: absolute;
    left: -0.2rem;
    top: -0.1rem;
    font-size: 1rem;
  }

  .song {
    color: white;
    position: absolute;
    top: 1.4rem;
    left: 3rem;
  }

  .you {
    position: absolute;
    color: white;
    top: 1.1rem;
    right: 0;
    font-size: 0.8rem;
  }

  .gonggao {
    color: white;
    position: absolute;
    top: 2.2rem;
    left: 3rem;
    font-size: 0.5rem;
  }

  .sp {
    position: fixed;
    top: 3.1rem;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .close {
    position: absolute;
    top: 13rem;
    left: 40%;
  }

  .icon-jiaochacross80 {
    font-size: 2rem;
    color: #666;
  }
</style>
