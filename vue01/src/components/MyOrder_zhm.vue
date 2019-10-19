<template>
  <div class="myorder">
    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/online'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>我的订单</span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "MyOrder_zhm",
    computed: {},
    created() {
      let datas = this.storage.get("userinfo");
      var userId = datas.user_id;
      this.Myhttp.get(`/bos/v2/users/1/orders?limit=3&offset=0&${userId}`, data => {
        console.log(data);
      })
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_imis59llh0q.css";

  .iconfont {
    font-size: .77rem;
  }

  .translate {
    width: 100%;
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
    color: #fff;
  }

  .title_wode1 {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    padding-top: .3rem;

  }
</style>
