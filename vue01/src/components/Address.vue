<template>
  <div id="app">
    <div id="nav">
      <span @click="toggle"><i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i></span>
      <nav>{{getAllname}}</nav>
      <p class="center">{{city}}</p>
      <span @click="toggle" class="right">切换城市</span>
    </div>
    <div class="search">
      <div>
        <input type="search" placeholder="输入学校、商务楼、地址" v-model="searchValue">
      </div>
      <button @click="submit">提交</button>
    </div>
    <header>搜索历史</header>
    <ul v-if="hisDom">
      <li v-for="(v,i) in obj" :key="i" :class="{searchData:true}" @click="getAddres(v.title,v.address)">
        <h4 :class="{title:true}">{{v.title}}</h4>
        <p :class="{address:true}">{{v.address}}</p>
      </li>
      <footer v-if="hisDom" @click="clearHis" class="p_clear">清空所有</footer>
    </ul>
    <ul>
      <li v-for="(v,i) in datas" :key="i" :class="{searchData:true}" @click="getAddres(v.name,v.address)">
        <h4 :class="{title:true}">{{v.name}}</h4>
        <p :class="{address:true}">{{v.address}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Address",
    methods: {
      //切换城市的方法
      toggle() {
        this.$router.push({path: '/city'})
      },
      //提交按钮的点击事件
      submit() {
        this.hisDom = false
        this.Myhttp.get(`/v1/pois?city_id=${this.cityId}&keyword=${this.searchValue}&type=search`, data => {
          this.datas = data;
          console.log(this.datas);
          if (!this.datas[0]) {
            this.$set(this.datas, 0, {name: "很抱歉!搜索不到", address: ""})
          }
        });
      },
      //点击位置的方法
      getAddres(title, address) {
        //vuex
        this.$store.commit("getName", title);
        if (!localStorage.getItem("placeHistory")) {
          this.his.push({"title": title, "address": address});
        } else {
          this.his = JSON.parse(localStorage.getItem("placeHistory"));
          //判断本地存储有没有重复的
          for (let i in this.his) {
            if (!this.his[i].address == address) {
              this.his.push({"title": title, "address": address});
            }
          }
        }
        localStorage.setItem("placeHistory", JSON.stringify(this.his));
        //获取选择的位置跳转到首页
        this.$router.push({path: '/index'});
      },
      //清空所有历史记录
      clearHis() {
        localStorage.removeItem("placeHistory");
        this.hisDom = false;
      }
    },
    data() {
      return {
        city: "",//城市名
        cityId: "",//城市的id
        searchValue: "",//搜索的内容
        datas: "",//搜索返回的数据
        his: [],//储存用户点击的历史记录
        obj: [],
        hisDom: true,
      }
    },
    //获取city组件传来的城市
    computed: {
      getAllname() {
        return this.city = this.$route.query.allname, this.cityId = this.$route.query.cityid;
      },

    },
    //在加载页面前展示历史记录
    created() {
      this.obj = JSON.parse(localStorage.getItem("placeHistory"));
    }

  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1281896_yktb2s3o9fb.css";

  #nav {
    color: #fff;
    height: 2.5rem;
    background: rgb(49, 144, 232);
    font-weight: 400;
    font-size: .7rem;
    overflow: hidden;
  }

  header {
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-left: .5rem;
    font: .475rem/.8rem Microsoft YaHei;
    width: 100%;
  }

  /*搜索成功展示数据的样式*/
  .title {
    margin: 0 auto .35rem;
    width: 90%;
    font-size: .8rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;

  }

  .address {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 .8rem .55rem;
    font-size: .45rem;
    color: #999;
  }

  .searchData {
    margin: 0 auto;
    padding-top: .65rem;
    border-bottom: 1px solid #e4e4e4;
    background: #fff;
  }

  .p_clear {
    font-size: .7rem;
    color: #666;
    text-align: center;
    line-height: 2rem;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;

  }

  .search input {
    border: 1px solid #e4e4e4;
    padding: 0 .3rem;
    font-size: .65rem;
    color: #333;
    outline: none;
    border-radius: .1rem;
    margin-bottom: .4rem;
    width: 90%;
    height: 1.6rem;

  }

  .search {
    width: 100%;
    margin: 0.5rem auto 0;
    text-align: center;
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-top: .4rem;
    height: 4.5rem;

  }

  .search button {
    border: none;
    background-color: #3190e8;
    font-size: .65rem;
    color: #fff;
    width: 90%;
    height: 1.7rem;
    outline: none;
    border-radius: .1rem;
    margin-bottom: .4rem;
  }

  nav {
    display: none;
  }

  .iconfont {
    float: left;
    font-size: 1.2rem;
    margin-top: 0.8rem;
    margin-left: 0.4rem;
  }

  .center {
    width: 6rem;
    height: 100%;
    margin-top: 0.6rem;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 4rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
  }

  .right {
    float: right;
    margin-top: 0.8rem;
    margin-right: 0.8rem;
  }

  html, body, #app {
    height: 100%;
    width: 100%;
    background-color: #f5f5f5
  }
</style>
