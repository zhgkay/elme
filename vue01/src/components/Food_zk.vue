<template>
  <div id="app">
    <div id="nav">
      <i @click="backIndex" class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
      <span class="center">{{getTitle}}</span>
    </div>
    <div>
      <van-dropdown-menu>
        <!--分类-->
        <van-dropdown-item :title="getTitle">
          <van-tree-select
            :items="items"
            :active-id.sync="activeId"
            :main-active-index.sync="activeIndex"
          />
        </van-dropdown-item>
        <!--排序-->
        <van-dropdown-item :title="'排序'">
          <ul class="item">
            <li><i class="iconfont icon-paixu"></i>
              <p>智能排序</p></li>
            <li><i class="iconfont icon-position-o"></i>
              <p>距离最近</p></li>
            <li><i class="iconfont icon-huore"></i>
              <p>销量最高</p></li>
            <li><i class="iconfont icon-ziyuan"></i>
              <p>起送价最低</p></li>
            <li><i class="iconfont icon-shijian"></i>
              <p>配送速度最快</p></li>
            <li><i class="iconfont icon-xingxing"></i>
              <p>评分最高</p></li>
          </ul>
        </van-dropdown-item>
        <!--筛选-->
        <van-dropdown-item :title="'筛选'">
          <div class="psfs">
            <p>配送方式</p>
            <p class="btnP">蜂鸟专送</p>
          </div>
          <div class="shopPro">
            <p>商家属性 (可以多选)</p>
            <div>
              <span class="kind"><i v-show="!temp" class="iconfont duihao"></i><span v-show="temp"
                                                                                     class="pz text">品</span>品牌商家</span>
              <span class="kind"><i v-show="!temp" class="iconfont duihao"></i><span v-show="temp"
                                                                                     class="bp text">保</span>外卖保</span>
              <span class="kind"><i v-show="!temp" class="iconfont duihao"></i><span v-show="temp"
                                                                                     class="pz text">准</span>准时达</span>
            </div>
            <div>
              <span class="kind"><i v-show="!temp" class="iconfont duihao"></i><span v-show="temp"
                                                                                     class="xf text">新</span>新店</span>
              <span class="kind"><i v-show="!temp" class="iconfont duihao"></i><span v-show="temp"
                                                                                     class="xf text">付</span>在线支付</span>
              <span class="kind"><i v-show="!temp" class="iconfont duihao"></i><span v-show="temp"
                                                                                     class="bp text">票</span>开发票</span>
            </div>
          </div>
          <div class="bottomBtn">
            <button class="clear">清空</button>
            <button class="sure">确定</button>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <router-view></router-view>
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
        option3: [
          {text: '筛选', value: 0},
          {text: '好评排序', value: 'b'},
          {text: '销量排序', value: 'c'},
        ]
      }
    },
    computed: {
      getTitle() {
        return this.title = this.$route.query.title;
      }
    },
    methods: {
      backIndex() {
        this.$router.push({path: '/index', query: {title: this.title}})
      }
    },
    created() {
      //获取商铺分类的请求
      this.Myhttp.get("/shopping/v2/restaurant/category", data => {
        for (var i = 0; i < data.length; i++) {
          this.items_info.push([])
          for (var j = 1; j < data[i].sub_categories.length; j++) {
            if (data[i].sub_categories) {
              this.items_info[i].push({text: data[i].sub_categories[j].name, info: 3, id: j});
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
      this.Myhttp.get("/v1/cities?type=guess", data => {
        this.latitude = data.latitude;
        this.longitude = data.longitude;
      });
      //获取排序的请求
      console.log(this.latitude);
      this.Myhttp.get(`/shopping/restaurants?latitude=${this.latitude}&longitude=${this.longitude}`, data => {
        console.log(data);
      })
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1281896_jdzy5dl2xm.css";

  #nav {
    color: #fff;
    height: 2.2rem;
    background: rgb(49, 144, 232);
    font-weight: 400;
    font-size: 0.8rem;
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
    color: #333;
    line-height: 1.5rem;
    height: 1.5rem;
    text-align: left;
    padding-left: .8rem;
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
    width: 4.7rem;
    height: 1.4rem;
    margin-left: .8rem;
    border-radius: .125rem;
    padding: 0 .25rem;
    margin-bottom: .25rem;
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
    color: #666;
  }

  .van-tree-select__item--active {
    color: #3190e8;
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
