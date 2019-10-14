<template>
  <div id="app">
    <div class="header_1">
        <div class="title_wode1">
        <router-link :to="{path:'/server'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>{{title}}</span>
      </div>
    </div>
    <div>
      <nav>{{getData}}</nav>
      <p class="content" v-html="content"></p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Question",
    data() {
      return {
        title: "",content: "",

      }
    },
    computed: {
      getData() {
        //接受传来的值,在计算属性里面接受就是computed
        return this.title = this.$route.query.title, this.content = (this.$route.query.content)

      }
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_76vbayp3riu.css";

  .header_1 {
    width: 100%;
    background-color: #3190e8;
    height: 1.95rem;
    overflow: hidden;
  }

  .title_wode1 {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    padding-top: .3rem;
  }

  .ii {
    float: left;
    padding-left: .3rem;
    padding-top: .3rem;
    color: white;
  }
  .content {
    margin: 1rem;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
  }
  #app {
    width: 100%;
    height: 900px;
  }
  nav {
    display: none;
  }
</style>
