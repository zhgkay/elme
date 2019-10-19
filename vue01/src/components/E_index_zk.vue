<template>
  <div id="app">
    <div id="nav">
      <i @click="SearchShop" class="iconfont icon-sousuo"></i>
      <router-link :to="{path:'/city'}"><p class="center">{{name}}</p></router-link>
      <span @click="longin" class="right">登录|注册</span>
    </div>
    <div class="title">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <!--轮播图第一页-->
        <swiper-slide>
          <template v-for="(v) in title1">
            <router-link :to="{path:'/food',query: {title:v.title}}">
              <img :src="imghttp+v.image_url" alt=""><br>
              <span> {{v.title}}</span>
            </router-link>
          </template>
        </swiper-slide>
        <!--轮播图第二页-->
        <swiper-slide>
          <template v-for="(v) in title2">
            <router-link :to="{path:'/food',query: {title:v.title}}">
              <img :src="imghttp+v.image_url" alt=""><br>
              <span> {{v.title}}</span>
            </router-link>
          </template>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!--附近商家-->
    <div class="fj_div"><i class="icon-shangjia iconfont"></i><span class="fjshop">附近商家</span></div>
    <router-view></router-view>

  </div>
</template>

<script>
  import '../../node_modules/swiper/dist/css/swiper.css';
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "E_index_zk",
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          notNextTick: true,
          //循环
          loop: false,
          //设定初始化时slide的索引
          initialSlide: 0,
          //滑动速度
          speed: 500,
          //滑动方向
          direction: 'horizontal',
          //小手掌抓取滑动
          grabCursor: true,
          //滑动之后回调函数
          on: {
            slideChangeTransitionEnd: function () {
              // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            },
          },
          //分页器设置
          pagination: {
            el: '.swiper-pagination',
            // clickable: true,
          },
        },
        shops: [],
        title1: [],
        title2: [],
        imghttp: "https://fuss10.elemecdn.com",
        name: ''
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    created() {
      //请求商品分类
      this.Myhttp.get("/v2/index_entry", data => {
        for (let i = 0; i < data.length / 2; i++) {
          this.title1.push(data[i]);
        }
        for (let i = data.length / 2; i < data.length; i++) {
          this.title2.push(data[i]);
        }
      });
      //请求商品信息
      this.Myhttp.get("/shopping/restaurants?latitude=31.22967&longitude=121.4762", data => {
        this.shops = data;
      });
      //从Vuex里获取数据
      this.name = this.$store.state.name.name;
      console.log(this.$store.state.name.name);
    },
    methods: {
      SearchShop() {
        this.$router.push({path: '/search'})
      },
      longin() {
        this.$router.push({path: '/login'})
      }
    }

  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1281896_yktb2s3o9fb.css";
  @import "//at.alicdn.com/t/font_1451811_mhx158y7w7.css";

  .fjshop {
    font-size: .7rem;
    margin-left: .5rem;
  }

  .icon-shangjia {
    font-size: .7rem;
    fill: #999;
    margin-left: .6rem;
    vertical-align: middle;
    width: .6rem;
    height: .6rem;
    color: #999;
  }

  .fj_div {
    border-top: solid 1px rgba(0, 0, 0, 0.15);
    margin-top: .5rem;
    background: #fff;
    color: #999;
    padding-top: .5rem;
  }

  #nav {
    color: #fff;
    height: 2.3rem;
    background: rgb(49, 144, 232);
    font-weight: 400;
    font-size: 0.8rem;
    text-align: center;

  }

  .title {
    padding-top: 0.5rem;
    background-color: #fff;
    border-bottom: .025rem solid #e4e4e4;
    height: 9.6rem;
  }

  a {
    display: inline-block;
    width: 25%;
    padding: .3rem 0;
    text-align: center;
    color: #fff;
  }

  a img {
    width: 1.8rem;
    height: 1.8rem;
  }

  a span {
    display: inline-block;
    text-align: center;
    font-size: .55rem;
    color: #666;
  }

  .icon-sousuo {
    float: left;
    font-size: 1.2rem;
    margin-top: 0.7rem;
    margin-left: 0.8rem;
  }

  .center {
    width: 6rem;
    height: 100%;
    margin-top: 0.4rem;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 0.5rem;
  }

  .right {
    float: right;
    margin-top: 0.7rem;
    margin-right: 0.8rem;
  }

  .swiper-container {
    width: 100%;
    height: 9rem;
  }
</style>
