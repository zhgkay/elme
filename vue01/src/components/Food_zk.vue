<template>
  <div id="app">
    <div class="header">
      <div id="nav">
        <i @click="backIndex" class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
        <span class="center">{{title}}</span>
        <nav>{{getTitle}}</nav>
      </div>
      <div>
        <van-dropdown-menu>
          <!--分类-->
          <van-dropdown-item :title="title">
            <van-tree-select
              :items="items"
              :active-id.sync="activeId"
              :main-active-index.sync="activeIndex"
              active-color="rgb(34,169,255)"
            >
              <template slot="content">
                <template v-for="(arry,index) in items_info">
                  <template v-for="value in arry">
                    <van-cell @click="getfood(value.text,value.onlyId)" active-color="#ee0a24"
                              v-if="activeIndex === index"
                              :title="value.text"
                              :value="value.count"
                    />
                    <template>
                    </template>
                  </template>
                </template>
              </template>
            </van-tree-select>
          </van-dropdown-item>
          <!--排序-->
          <van-dropdown-item :title="'排序'">
            <ul class="item">
              <li @click="sortfood(0)"><i class="iconfont icon-paixu"></i>
                <p>智能排序</p></li>
              <li @click="sortfood(5)"><i class="iconfont icon-position-o"></i>
                <p>距离最近</p></li>
              <li @click="sortfood(6)"><i class="iconfont icon-huore"></i>
                <p>销量最高</p></li>
              <li @click="sortfood(1)"><i class="iconfont icon-ziyuan"></i>
                <p>起送价最低</p></li>
              <li @click="sortfood(2)"><i class="iconfont icon-shijian"></i>
                <p>配送速度最快</p></li>
              <li @click="sortfood(3)"><i class="iconfont icon-xingxing"></i>
                <p>评分最高</p></li>
            </ul>
          </van-dropdown-item>
          <!--筛选-->
          <van-dropdown-item :title="'筛选'">
            <div class="psfs">
              <p>配送方式</p>
              <p class="btnP" @click="temp6=!temp6" :class="{'textcolor':temp6}">
                <i v-show="temp6" class="iconfont icon-duihao"></i>
                蜂鸟专送</p>
            </div>
            <div class="shopPro">
              <p>商家属性 (可以多选)</p>
              <div>
              <span class="kind" @click="temp=!temp" :class="{'textcolor':temp}">
                <i v-show="temp" class="iconfont icon-duihao"></i>
                <span v-show="!temp" class="pz text">品</span>品牌商家</span>
                <span class="kind" @click="temp1=!temp1" :class="{'textcolor':temp1}">
                <i v-show="temp1" class="iconfont icon-duihao"></i>
                <span v-show="!temp1" class="bp text">保</span>外卖保</span>
                <span class="kind" @click="temp2=!temp2" :class="{'textcolor':temp2}">
                <i v-show="temp2" class="iconfont icon-duihao"></i>
                <span v-show="!temp2" class="pz text">准</span>准时达</span>
              </div>
              <div>
              <span class="kind" @click="temp3=!temp3" :class="{'textcolor':temp3}">
                <i v-show="temp3" class="iconfont icon-duihao"></i>
                <span v-show="!temp3" class="xf text">新</span>新店</span>
                <span class="kind" @click="temp4=!temp4" :class="{'textcolor':temp4}">
                  <i v-show="temp4" class="iconfont icon-duihao"></i>
                <span v-show="!temp4" class="xf text">付</span>在线支付</span>
                <span class="kind" @click="temp5=!temp5" :class="{'textcolor':temp5}">
                  <i v-show="temp5" class="iconfont icon-duihao"></i>
                <span v-show="!temp5" class="bp text">票</span>开发票</span>
              </div>
            </div>
            <div class="bottomBtn">
              <button class="clear">清空</button>
              <button class="sure">确定</button>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>
    </div>
    <router-view ref="shopsId"></router-view>
  </div>
</template>

<script>
  export default {
    name: "food_zk",
    data() {
      return {
        title: "",
        value1: 0,
        value2: 'a',
        value3: 0,
        latitude: "",
        longitude: "",
        items: [],
        temp: true,
        items_info: [],
        activeId: 1,
        activeIndex: 0,
        temp1: false,
        temp2: false,
        temp3: false,
        temp4: false,
        temp5: false,
        temp6: false,
        temp7: false,
        tempArry: [],

      }
    },
    computed: {
      getTitle() {
        return this.title = this.$route.query.title;
      }
    },
    methods: {
      //返回上一步的方法
      backIndex() {
        this.$router.push({path: '/index', query: {title: this.title}})
      },
      //分类的方法
      getfood(foodName, id) {
        this.title = foodName;
        this.Myhttp.get(`/shopping/restaurants?latitude=${this.latitude}&longitude=${this.longitude}&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=${id}&order_by=null&delivery_mode[]=null`, data => {
          this.$refs.shopsId.changeShops(data);
        });
      },
      //  排序的方法
      sortfood(id) {
        console.log(id);
        this.Myhttp.get(`/shopping/restaurants?latitude=${this.latitude}&longitude=${this.longitude}&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=${id}&delivery_mode[]=null`, data => {
          this.$refs.shopsId.changeShops(data);
        });
      }
    },
    created() {
      //获取商铺分类的请求
      this.Myhttp.get("/shopping/v2/restaurant/category", data => {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          this.items_info.push([])
          for (var j = 1; j < data[i].sub_categories.length; j++) {
            if (data[i].sub_categories) {
              this.items_info[i].push({
                text: data[i].sub_categories[j].name,
                count: data[i].sub_categories[j].count,
                id: j,
                onlyId: data[i].sub_categories[j].id,
              });
            }
          }
        }
        for (let i in data) {
          this.items.push({
            text: data[i].name, children: this.items_info[i], info: data[i].count
          });
        }
      });
      //获取经纬度的请求
      this.latitude = this.$store.state.name.latitude;
      this.longitude = this.$store.state.name.longitude;
      //获取排序的请求
      this.Myhttp.get(`/shopping/restaurants?latitude=${this.latitude}&longitude=${this.longitude}`, data => {
        console.log(data);
      })
    },
    watch:{
      tempArry(){

      }
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1281896_d0wkog4xks5.css";

  #nav {
    color: #fff;
    height: 2.2rem;
    background: rgb(49, 144, 232);
    font-weight: 400;
    font-size: 0.8rem;
  }

  .header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  .shopPro div {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 .5rem;
    background-color: #fff;
    font-size: .4rem;
    color: #333;
  }

  .van-dropdown-menu {
    height: 2.3rem;
  }

  .textcolor {
    color: rgb(49, 144, 232);
  }

  .item {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  .item p {
    line-height: 2.5rem;
    -ms-flex: auto;
    flex: auto;
    text-align: left;
    text-indent: .25rem;
    border-bottom: .025rem solid #e4e4e4;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    padding-left: .2rem;
    font-size: .6rem;
  }

  .pz {
    color: rgb(63, 189, 230);
    border-color: rgb(63, 189, 230) !important;
  }

  .bp {
    color: rgb(153, 153, 153);
    border-color: rgb(153, 153, 153) !important;
  }

  .xf {
    color: rgb(255, 78, 0);
    border-color: rgb(255, 78, 0) !important;
  }

  .kind {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    border: .025rem solid #eee;
    width: 4.9rem;
    height: 1.6rem;
    margin-right: .25rem;
    border-radius: .125rem;
    padding: 0 .3rem;
    margin-bottom: .25rem;
    text-align: center;
  }

  .text {
    width: .8rem;
    height: .8rem;
    font-size: .6rem;
    border: .025rem solid #e4e4e4;
    border-radius: .15rem;
    margin-right: .25rem;
    line-height: .8rem;
    padding: .1rem;
  }

  .psfs > p,
  .shopPro > p {
    font-size: .4rem;
    line-height: 1.5rem;
    height: 1.5rem;
    text-align: left;
    padding-left: .7rem;
  }

  .bottomBtn {
    background: #f5f5f5;
    display: flex;
    justify-content: space-around;
  }

  .clear {
    background: #fff;
    color: black;
  }

  .sure {
    background: #56d176;
    color: #fff;
  }

  .clear,
  .sure {
    margin: .4rem 0;
    width: 8.8rem;
    height: 2.2rem;
    outline: none;
    text-align: center;
    border: none;
    border-radius: 3px;
  }

  .btnP {
    padding-left: .5rem;
    border: .025rem solid #eee;
    width: 4.5rem;
    height: 1.4rem;
    margin-left: .6rem;
    border-radius: .125rem;
    padding: 0 .25rem;
    margin-bottom: .25rem;
  }

  .icon-duihao {
    color: rgb(49, 144, 232);
    font-weight: 700;
    font-size: 1rem !important;
    margin: -.1rem .1rem !important;
  }

  nav {
    display: none;
  }

  .icon-paixu {
    color: rgb(59, 135, 200);
  }

  .icon-huore {
    color: rgb(240, 115, 115);
  }

  .icon-ziyuan {
    color: rgb(230, 182, 26);
  }

  .icon-shijian {
    color: rgb(55, 199, 183);
  }

  .icon-position-o {
    color: rgb(42, 155, 211);
  }

  .icon-xingxing {
    color: rgb(235, 165, 59);
  }

  .van-tree-select__nav-item {
    border: none;
  }

  .van-sidebar-item {
    height: 2.1rem;
    font-size: .6rem;
    line-height: .7rem;
  }

  .van-sidebar {
    color: #666;
  }

  .van-tree-select__item--active {
    color: #3190e8;
  }

  >>> .van-ellipsis {
    font-size: .7rem;
  }

  .van-cell {
    font-size: .7rem;
    padding: 0.3rem 1rem;
  }

  .van-icon {
    display: none;
  }

  .van-ellipsis {
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 1.8rem;
    line-height: 1.8rem;
    padding-right: .5rem;
    border-bottom: .025rem solid #e4e4e4;
  }

  >>> .van-ellipsis span {
    color: #666;
  }

  .van-tree-select__nav {
    -webkit-flex: 2;
  }

  >>> .van-info {
    background-color: #ccc;
    right: -4rem;
    top: .5rem;
  }

  .center {
    width: 6rem;
    height: 100%;
    margin-top: 0.4rem;
    margin-left: 4.5rem;
    display: inline-block;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
  }

  .iconfont {
    float: left;
    font-size: .8rem;
    margin: .8rem 0.5rem 0;
  }
</style>
