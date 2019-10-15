<template>
  <div id="app">
    <div id="nav">
      <i @click="backIndex()" class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
      <span class="center">搜索</span>
    </div>
    <div class="search">
      <input type="text" placeholder="请输入商家或美食名称" v-model="val">
      <input @click="searchShop(val)" type="button" value="提交">
    </div>
    <div class="history" v-if="temp">
      <h4>
        搜索历史
      </h4>
      <!--搜索不到显示-->
      <p v-if="!show" v-text="content">
      </p>
      <!--历史记录显示-->
      <ul v-if="show">
        <li v-for="(v,i) in history" :key="i">
          <span @click="searchShop(v)">
          {{v}}
          </span>
          <span @click="remove(i)">
            <i class="iconfont icon-guanbi"></i>
          </span>
        </li>
        <footer @click="clearAll">清空搜索历史</footer>
      </ul>
    </div>
    <Footer_gzh></Footer_gzh>
  </div>
</template>

<script>
  import Footer_gzh from "./Footer_gzh";
  export default {
    name: "SearchShop",
    components: {Footer_gzh},
    data() {
      return {
        val: "",
        latitude: "",
        longitude: "",
        temp: true,
        his: [],//储存历史记录
        history: [],//获取本地存储的记录
        content: "",
        show: true,
      }
    },
    methods: {
      backIndex() {
        this.$router.push({path: '/index'})
      },
      clearAll() {
        localStorage.removeItem("searchHistory");
        this.show = false
      },
      searchShop(v) {
        this.val = v;
        //获取输入的值,存进localstorage
        if (!this.val.trim() == "") {
          if (!localStorage.getItem("searchHistory")) {
            this.his.push(this.val);
          } else {
            this.his = JSON.parse(localStorage.getItem("searchHistory"));
            this.his.push(this.val);
          }
          localStorage.setItem("searchHistory", JSON.stringify(this.his));
          //搜索商家
          this.Myhttp.get(`/v4/restaurants?geohash=${this.latitude},${this.longitude}&keyword=${this.value}`, data => {
            console.log(data);
            if (data.status == 0) {
              this.content = "很抱歉!无搜索结果";
              console.log(this.content);
              this.show = false;
            } else {
              //请求成功的数据
            }
          });
        }
      },
      //删除历史记录的方法
      remove(i) {
        this.history.splice(i, 1)
        let arry = JSON.parse(localStorage.getItem("searchHistory"));
        arry.splice(i, 1);
        localStorage.setItem("searchHistory", JSON.stringify(arry))
      }
    },
    created() {
      this.Myhttp.get("/v1/cities?type=guess", data => {
        this.latitude = data.latitude;
        this.longitude = data.longitude;
      });
      this.history = (JSON.parse(localStorage.getItem("searchHistory")));
    },
    watch: {
      val() {
        if (this.val == "") {
          this.content = ""
          this.history = (JSON.parse(localStorage.getItem("searchHistory")));
          this.show = true
        }
      },
    }

  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1281896_sebtej2war.css";

  #nav {
    color: #fff;
    height: 2.2rem;
    background: rgb(49, 144, 232);
    font-weight: 400;
    font-size: 0.8rem;
  }

  .title {
    padding-top: 0.5rem;
    background-color: #fff;
    border-bottom: .025rem solid #e4e4e4;
    height: 9.6rem;
  }

  ul li,
  p {
    background-color: #fff;
    border-bottom: .025rem solid #e4e4e4;
    font: .7rem/2rem Microsoft YaHei;
    padding: 0 .3rem;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .history h4 {
    font-size: .75rem;
    line-height: 2rem;
    text-indent: .5rem;
    font-weight: 700;
    color: #666;
  }

  footer {
    background-color: #fff;
    color: #3190e8;
    font: .7rem/2rem Microsoft YaHei;
    font-weight: 700;
    text-align: center;
  }

  .iconfont {
    float: left;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    margin-left: 0.7rem;
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

  .search {
    background-color: #fff;
    padding: .5rem;
    display: flex;
    height: 1.8rem;
  }

  [type="text"] {
    flex: 4;
    border: .025rem solid #e4e4e4;
    font-size: .75rem;
    color: #333;
    border-radius: .125rem;
    background-color: #f2f2f2;
    font-weight: 800;
    padding: 0 .25rem;
  }

  [type="button"] {
    flex: 1;
    border: .025rem solid #3190e8;
    margin-left: .2rem;
    font-size: .75rem;
    color: #fff;
    border-radius: .125rem;
    background-color: #3190e8;
    font-weight: 700;
    padding: 0 .25rem;
  }

  #app {
    width: 100%;
    height: 33.5rem;
    background: #f5f5f5;
  }
</style>
