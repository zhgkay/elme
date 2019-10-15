<template>
  <div id="city">
    <div id="nav">
      <span class="left">ele.me</span>
      <span @click="login" class="right">登录|注册</span>
    </div>
    <div class="title">
      <span>当前定位城市:</span>
      <span>定位不准时，请在城市列表中选择</span>
    </div>
    <div class="title1" @click.prevent="searchCity">
      <a href="###">
        <span class="left_city">{{cityGuess.name}}</span>
        <i class="iconfont icon-youjiantou"></i>
      </a>
    </div>
    <div class="title_hot">
      <p>热门城市</p>
      <ul>
        <li @click="cityAll(v.name,v.id)" class="hotcity" v-for="(v,i) in cityHot" :key="i">{{v.name}}</li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-for="(value,key) in cityGroup" :key="key">
          <ul class="city_all">
            <h4>{{key}}<span>(按字母排序)</span></h4>
            <li @click="cityAll(v.name,v.id)" :class="{cityAll:temp}" v-for="(v,i) in value" :key="i">
              {{v.name}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: "E_city_zk",
    data() {
      return {
        cityHot: [],
        cityGroup: {},
        temp: true,
        cityGuess: [],
      }
    },
    methods: {
      //定位位置的跳转
      searchCity() {
        this.$router.push({path: '/address', query: {allname: this.cityGuess.name, cityid: this.cityGuess.id}})
      },
      //点击所有的城市跳转
      cityAll(v, id) {
        this.$router.push({path: '/address', query: {allname: v, cityid: id}});
      },
      login() {
        this.$router.push({path: '/login'})
      }
    },
    created() {
      //请求定位置
      this.Myhttp.get(this.MyApi.MyApi.cityGuess, data => {
        this.cityGuess = data;
      });
      //请求热门城市
      this.Myhttp.get(this.MyApi.MyApi.cityHot, data => {
        this.cityHot = data;
      });
      //请求所有城市
      this.Myhttp.get(this.MyApi.MyApi.cityGroup, data => {
        Object.keys(data).sort().forEach(key => {
          this.$set(this.cityGroup, key, data[key]);
        })
      }, (err) => {
        console.log(err)
      });
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1281896_u2vgbe93zb.css";

  #nav {
    color: #fff;
    height: 2.5rem;
    background: rgb(49, 144, 232);
    font-weight: 400;
    font-size: .7rem;
    overflow: hidden;
  }

  .left {
    float: left;
    margin-left: .4rem;
    margin-top: .8rem;
  }

  .city_all h4 {
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: .55rem/1.45rem Helvetica Neue;
    /*padding: .5rem;*/
  }

  .iconfont {
    float: right;
    margin-top: 0.5rem;
    color: #999;
  }

  .left_city {
    font-size: 1rem;
    color: #3190e8;
    font-weight: 200;
    float: left;
    margin-left: .4rem;
    margin-top: .4rem;

  }

  .right {
    float: right;
    margin-right: .4rem;
    margin-top: .8rem;

  }

  .title {
    font-size: .45rem;
    color: #666;
    display: flex;
    justify-content: space-between;
    line-height: 1.45rem;
    padding: .45rem;
    overflow: hidden;
  }

  .title, .title1, .title_hot, ul {
    background: #fff;

  }

  .title1 {
    height: 1.8rem;
    padding: .19rem;
    border-top: 0.06rem solid #e4e4e4;
    border-bottom: 0.08rem solid #e4e4e4;
  }

  h4 span {
    padding: 0 .5rem;
  }

  .title_hot {
  }

  .title_hot p {
    font-size: 0.7rem;
    color: #666;
    border-bottom: 0.01rem solid #e4e4e4;
    padding: .3rem .5rem;
  }

  .hotcity {
    color: #3190e8;
    display: inline-block;
    text-align: center;
    border-bottom: .025rem solid #e4e4e4;
    border-right: .025rem solid #e4e4e4;
    width: 24.85%;
    height: 1.75rem;
    font-size: .7rem;
    line-height: 1.7rem;
  }

  .cityAll {
    color: #666;
    display: inline-block;
    text-align: center;
    border-bottom: .025rem solid #e4e4e4;
    border-right: .025rem solid #e4e4e4;
    width: 24.85%;
    font-size: .7rem;
    line-height: 1.7rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  #city {
    font-size: 20%;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    color: #666;

  }


</style>
