<template>
  <div id="shops">
    <router-link :to="{path:'/shop',query:{id:v.id}}" v-for="(v,i) in shops" :key="i">
      <!--全部商家-->
      <div class="shop">
        <!--店铺图片-->
        <img :src="'http://elm.cangdu.org/img/'+ v.image_path" alt="">
        <!--店铺名字-->
        <div class="name_top">
          <span class="pp">品牌</span>
          <span class="shop_name">{{v.name}}</span>
        </div>
        <!--保准送-->
        <div id="bao">
          <span class="bao" v-for="(n,i) in v.supports" :key="i">{{n.icon_name}}</span>
        </div>
        <!--星星评分-->
        <div class="pf">
          <van-rate v-model="v.rating" disabled disabled-color="gold" :size="10"/>
          <span class="fen">{{v.rating}}</span>
          <span class="yueshou">月售{{v.recent_order_num}}单</span>
        </div>
        <!--蜂鸟专送-->
        <div class="birds">
          <span class="bird" v-if="v.delivery_mode">{{v.delivery_mode.text}}</span>
          <span class="da" v-if="v.supports[1]">{{v.supports[1].name}}</span>
        </div>
        <!--起送价配送费-->
        <div class="qisong">
          <span>￥{{v.float_minimum_order_amount}}起送/</span>
          <span>{{v.piecewise_agent_fee.tips}}</span>
        </div>
        <!--距离时间-->
        <div class="times">
          <span class="juli">{{v.distance}}/</span>
          <span class="time">{{v.order_lead_time}}</span>
        </div>
      </div>
    </router-link>
    <Footer_gzh></Footer_gzh>
  </div>
</template>

<script>
  import Footer_gzh from "./Footer_gzh";

  export default {
    name: "Shops_gzh",
    components: {Footer_gzh},
    data() {
      return {
        shops: [],
      }
    },
    methods: {
      changeShops(shops) {
        this.shops = shops;
      }
    },
    created() {
      this.Myhttp.get("/shopping/restaurants?latitude=31.22967&longitude=121.4762", data => {
        this.shops = data;
      })
    },
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451811_mhx158y7w7.css";

  a {
    color: black;
  }

  .time {
    color: deepskyblue;
  }

  .times {
    position: absolute;
    top: 3.5rem;
    right: 0.5rem;
    font-size: 0.5rem;
  }

  .siz {
    font-size: 0.8rem;
  }

  .qisong {
    position: absolute;
    top: 3.5rem;
    left: 3.7rem;
    font-size: 0.5rem;
    display: inline-block;
  }

  .birds {
    font-size: 0.5rem;
    position: absolute;
    top: 2.5rem;
    right: 0.5rem;
  }

  .bird {
    background: deepskyblue;
    border-radius: 2px;
    padding: 0.1rem;
    color: white;
  }

  .fen {
    color: orange;
  }

  .pf {
    position: absolute;
    top: 2.3rem;
    left: 3.7rem;
    font-size: 0.5rem;
  }

  #shops {
    background: white;
  }

  .fjshop {
    font-size: 0.8rem;
  }

  .shop {
    padding: 1rem 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    position: relative;
  }

  .name_top {
    display: inline-block;
    position: absolute;
    top: 0.7rem;
  }

  .pp {
    background: gold;
    font-size: 0.5rem;
    border-radius: 5px;
    margin-left: 0.3rem;
  }

  .shop_name {
    font-size: 0.8rem;
    margin-left: 0.3rem;
    font-weight: bold;
  }

  img {
    width: 3rem;
    height: 3rem;
  }

  #bao {
    float: right;
  }

  .bao {
    font-size: 0.4rem;
    margin-left: 0.2rem;
    border: 1px solid #999;
    border-radius: 5px;
    color: #666;
  }

</style>
