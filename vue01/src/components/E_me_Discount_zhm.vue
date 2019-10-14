<template>
    <div class="discount">
      <div class="header_1">
        <div class="title_wode1">
          <router-link :to="{path:'/me'}">
            <i class="icon-mjiantou-copy iconfont ii"></i>
          </router-link>
          <span>我的优惠</span>
        </div>
      </div>
      <section class="Redenvelopes">
        <section class="Red">
          <span>红包</span>
          <sapn>商家代金券</sapn>
        </section>

      </section>

    </div>
</template>

<script>
    export default {
        name: "E_me_Discount_zhm"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_vtw3c3gskj9.css";
  .discount {
    width: 100%;
    height: 600px;
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
  .Red{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 2rem;
    background-color: #fff;
  }

</style>
