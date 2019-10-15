<template>
  <div id="app">
    <div id="nav">
      <i @click="backIndex" class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
      <span class="center">{{getTitle}}</span>
    </div>
    <div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1"/>
        <van-dropdown-item v-model="value2" :options="option2"/>
        <van-dropdown-item v-model="value3" :options="option3"/>
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
        option1: [
          {text: '全部商品', value: 0},
          {text: '新款商品', value: 1},
          {text: '活动商品', value: 2}
        ],
        option2: [
          {text: '排序', value: 'a'},
          {text: '智能排序', value: 'b'},
          {text: '距离最近', value: 'c'},
          {text: '销量最高', value: 'd'},
          {text: '起送价最低', value: 'e'},
          {text: '配送速度最快', value: 'f'},
          {text: '评分最高', value: 'g'},
        ],
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
      this.option1[0].text = this.$route.query.title;
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
    font-size: 1.2rem;
    margin-top: 0.5rem;
    margin-left: 0.7rem;
  }
</style>
