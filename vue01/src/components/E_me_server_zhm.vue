<template>
  <div class="server">
    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/me'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>服务中心</span>
      </div>
    </div>
    <div class="fuji">
      <div class="me_online">
        <a href="##" class="now1">
          <i class="icon-youce-zaixiankefu iconfont zx1"></i>
          <p>在线客服</p>
        </a>
        <a href="##" class="now2">
          <i class="icon-dianhua iconfont zx2"></i>
          <p>在线客服</p>
        </a>
      </div>
      <div class="Popular">
        <h4>热门问题</h4>
      </div>
      <div class="super">
        <ul>
          <li v-for="(v,i) in title" :key="i" @click="question(v,i)">
            <span>{{v}}</span>
            <i class="icon-arrow-right iconfont youj"></i>
          </li>
        </ul>

      </div>

    </div>

  </div>

</template>

<script>
  export default {
    name: "E_me_server_zhm",
    data() {
      return {
        title: [],
        content: [],
      }
    },
    created() {
      //请求服务中心的数据
      this.Myhttp.get("/v3/profile/explain", data => {
        let keyArry = Object.keys(data);
        keyArry.splice(keyArry.indexOf("index"), 1);
        for (var i = 0; i < keyArry.length; i += 2) {
          this.title.push(data[keyArry[i + 1]]);
      this.content.push(data[keyArry[i]]);
        }

      })
    },
    methods: {
      question(v, i) {
        //切换路由,获取标题和内容
        this.$router.push({path: '/question', query: {title: v, content: this.content[i]}})
        // this.$router.push({path:'/question',query: {title:v,content:this.content[i]}})
      }
    }

  }

</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_76vbayp3riu.css";

  .server {
    width: 100%;
    height: 900px;
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
    color: white;
  }

  .title_wode1 {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    padding-top: .3rem;

  }

  .me_online {
    display: flex;
    justify-content: space-between;
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
    background-color: white;
    width: 100%
  }

  .now1 {
    border-right: 1px solid #f5f5f5;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 4rem;
    border-bottom: 1px solid #f5f5f5;
    color: black;
  }

  .now1 p, .now2 p {
    margin-top: .4rem;
    font-size: .6rem;
    color: #666;
  }

  .zx1 {
    color: rgb(255, 123, 82);
    font-size: 1rem;
  }

  .zx2 {
    color: rgb(106, 194, 11);
    font-size: 1rem;
  }

  .now2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 4rem;
    border-bottom: 1px solid #f5f5f5;
    color: black;
  }

  .Popular {
    font-size: .75rem;
    color: #333;
    line-height: 3rem;
    border-bottom: 1px solid #f5f5f5;
    padding-left: .7rem;
    background-color: white;
    width: 100%;
  }

  ul li {
    padding: 0 .7rem;
    line-height: 2rem;
    border-bottom: .05rem solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f5f5f5;
    background-color: #fff;
    font-size: .6rem;
    color: #666;
  }
h4{
  font-weight: 400;
  font-size: .75rem;
  color: #333;
  line-height: 3rem;
  border-bottom: 1px solid #f5f5f5;
  padding-left: .7rem;
}

</style>
