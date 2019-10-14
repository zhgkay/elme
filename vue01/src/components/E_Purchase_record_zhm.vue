<template>
    <div class="Purchase">
      <div class="header_1">
        <div class="title_wode1">
          <router-link :to="{path:'/vip'}">
            <i class="icon-mjiantou-copy iconfont ii"></i>
          </router-link>
          <span>购买记录</span>
        </div>
      </div>
      <div class="none">
        <img :src="imgsrc" alt="">
        <p>暂无明细记录</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "E_Purchase_record_zhm",
      data() {
        return {
          imgsrc: require("../assets/order.png")
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_t6zrg2c8um.css";

  .exchange {
    width: 100%;
    height: 735px;
    background: #f5f5f5;
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

  .none {
    text-align: center;
  }
  .none p {
    margin-top: .5rem;
    font-size: .7rem;
    color: #666;
  }
</style>
