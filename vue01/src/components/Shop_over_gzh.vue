<template>
  <ul>
    <!--店铺牌面-->
    <li class="top">
        <router-link :to="{path:'/index/shops'}" class="back"><i class="icon-Group- iconfont"></i></router-link>
        <img class="sbt" :src="'//elm.cangdu.org/img/' + shop.image_path" alt="">
        <h4>{{shop.name}}</h4>
        <div class="peis">
          <span>商家配送</span>
          <span>/分钟送达/</span>
          <span>{{shop.piecewise_agent_fee}}</span>
          <div>{{shop.promotion_info}}</div>
        </div>
        <router-link class="next" :to="{path: '/shopxx'}"><i class="icon-icon-- iconfont"></i></router-link>
        <div class="huodong">
          <span>减</span>
          <span>满30减5，满60减8（APP专享）</span>
        </div>
        <span class="hds" @click="isShow=true">活动></span>
    </li>
    <!--活动遮罩层-->
    <li class="zzc" v-show="isShow">
      <h1>{{shop.name}}</h1>
      <div class="yhmsg">
        <h5>优惠信息</h5>
        <div class="huodong">
          <span>减</span>
          <span>满30减5，满60减8（APP专享）</span>
        </div>
      </div>
        <div class="sjgg">
          <h5>商家公告</h5>
          <span>{{shop2.promotion_info}}</span>
        </div>
      <div class="close" @click="isShow=false"><i class="icon-jiaochacross80 iconfont"></i></div>
    </li>
    <!--商品&评论 组件-->
    <div class="pros">
      <van-tabs v-model="active" color="#3190e8">
        <van-tab title="商品"><Products_gzh></Products_gzh></van-tab>
        <van-tab title="评论"><Pingjia_gzh></Pingjia_gzh></van-tab>
      </van-tabs>
    </div>
  </ul>
</template>

<script>
  import Products_gzh from "./Products_gzh";
  import Pingjia_gzh from "./Pingjia_gzh";
  export default {
    name: "",
    components: {Pingjia_gzh, Products_gzh},
    data() {
      return {
        shop: {},
        active: 0,
        id: '',
        show: false,
        isShow: false,
        shop2:{}
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
      this.Myhttp.get('/shopping/restaurant/'+this.id,data=>{
        // console.log(data);
        this.shop2 = data;
      })
    },
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451811_8q69tllytxe.css";
  /*.top{*/
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
  /*}*/
  .van-ellipsis{
    font-size: 1rem;
  }
  .top{
    width: 100%;
    height: 6rem;
    background: url("../assets/bg.jpg") no-repeat;
    background-size: 100% 100%;
    position: relative;
    padding: 1rem;
    box-sizing: border-box;
    color: white;
  }
  .back{
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
  }
  .icon-Group-,
  .icon-icon--{
    font-size: 1.5rem;
    color: white;
  }
  .sbt{
    width: 4rem;
    height: 4rem;
    border-radius: 5px;
    position: absolute;
    top: 0.7rem;
    left: 1rem;
  }
  .top h4{
    position: absolute;
    top: 0.6rem;
    left: 5.3rem;
  }
  .peis{
    font-size: 0.6rem;
    position: absolute;
    top: 2.4rem;
    left: 5.3rem;
  }
  .peis div{
    margin-top: 0.5rem;
  }
  .next{
    position: absolute;
    right: 0;
    top: 1.5rem;
    display: inline-block;
  }
  .huodong{
    position: absolute;
    top: 4.9rem;
    font-size: 0.6rem;
  }
  .huodong span:nth-child(1){
    background: orangered;
    border-radius: 5px;
    padding: 0 0.15rem;
  }
  .hds{
    position: absolute;
    right: 0.5rem;
    bottom: 0.2rem;
    font-size: 0.7rem;
  }
  .zzc{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.9);
    color: white;
    padding: 1rem;
    text-align: center;
    z-index: 10;
  }
  .yhmsg{
    position: relative;
  }
  .yhmsg h5{
    position: absolute;
    top: 6.5rem;
    left: 35%;
    border: 1px solid white;
    padding: 0 0.3rem;
    border-radius: 10px;
  }
  .yhmsg .huodong{
    position: absolute;
    top: 8rem;
    font-size: 0.6rem;
  }
  .yhmsg .huodong span:nth-child(1){
    background: orangered;
    border-radius: 5px;
    padding: 0 0.15rem;
  }
  .sjgg{
    position: relative;
  }
  .sjgg h5{
    position: absolute;
    top: 10rem;
    left: 35%;
    border: 1px solid white;
    padding: 0 0.3rem;
    border-radius: 10px;
  }
  .sjgg span{
    position: absolute;
    top: 12rem;
    left: 0;
    font-size: 0.6rem;
  }
  .icon-jiaochacross80{
    font-size: 3rem;
  }
  .close{
    position: absolute;
    top: 25rem;
    left: 40%;
  }
</style>
