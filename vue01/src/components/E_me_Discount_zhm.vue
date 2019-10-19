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
      <van-tabs v-model="active" color="#3190e8">
        <van-tab title="红包">
          <section>
            <section class="redstyle">
              <section class="Be_overdue">
                <div class="yes">
                  有
                  <span>3</span>
                  个红包即将到期
                </div>
                <div>
                  <i class="icon-wenhao iconfont ie"></i>
                  <router-link :to="{path: '/redintegral'}" class="balance1">红包说明</router-link>
                </div>
              </section>
            </section>
            <div v-for="(c,i) in hongbao" :key="i">
              <div class="card">
                <div class="left">
                <p class="price">￥<span class="big">{{Arr[i][0]}}</span>.{{Arr[i][1]}}</p>
                <p class="condition">{{c.description_map.sum_condition}}</p>
                </div>
                <div class="right">
                  <p class="share">{{c.name}}</p>
                  <p>{{c.description_map.validity_periods}}</p>
                  <p>{{c.description_map.phone}}</p>
                </div>
                <div class="time">
                  <span>{{c.description_map.validity_delta}}</span>
                </div>
              </div>
            </div>
            <div class="limit">{{limit}}</div>
            <router-link :to="{path:'/Historical'}" class="chakan">
              <span class="look">查看历史红包</span>
              <i class="icon-arrow-right iconfont yjt"></i>
            </router-link>
            <div class="footer">
              <router-link :to="{path:'/red_envelope'}" class="exchange_red">
                兑换红包
              </router-link>
              <router-link :to="{path:'/Recommend'}" class="Recommend">
                推荐有奖
              </router-link>
            </div>
          </section>
        </van-tab>
        <van-tab title="商家代金券">
          <div class="jj">
            <i class="icon-wenhao iconfont ie"></i>
            <router-link :to="{path: '/business'}" class="balance3">商家代金券说明</router-link>
          </div>
          <div class="footer1">
            <img src="../assets/yuan.png" alt="">
            <p class="none">无法使用代金券</p>
            <p class="fei">非客户端或客户端版本过低</p>
            <router-link :to="{path:'/down'}" class="xiazai">
              下载或升级客户端
            </router-link>
          </div>
        </van-tab>
      </van-tabs>

    </section>

  </div>
</template>

<script>
  export default {
    name: "E_me_Discount_zhm",
    data() {
      return {
        //组件
        active: 0,
        //红包
        hongbao: [],
        //新建个数组用来存储0，0，5
        amount: [],
        Arr: [],
        limit: "",
      }
    },
    created() {
      this.Myhttp.get("/promotion/v2/users/1/hongbaos?limit=20&offset=0", data => {
        for (let i = 0; i < data.length; i++) {
          this.hongbao.push(data[i]);
          this.amount.push(this.hongbao[i].amount.toFixed(1));
        }
        console.log(this.hongbao);
        for (let j = 0; j < this.amount.length; j++) {
          this.Arr.push(this.amount[j].split("."));
          console.log(this.amount[j]);
        }
        this.limit = this.hongbao[2].limit_map.restaurant_flavor_ids;
      })

    }

  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_vtw3c3gskj9.css";

  .discount {
    width: 100%;
    height: 33.3rem;
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

  .Red {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 2rem;
    background-color: #fff;
  }

  .redstyle {
    padding: 0 .7rem;
  }

  .Be_overdue {
    display: flex;
    justify-content: space-between;
    font-size: .5rem;
    line-height: 2rem;
  }

  .yes {
    color: #666;
  }

  .yes span {
    color: #ff5340;
  }

  .jj {
    float: right;
  }

  .ie {
    font-size: 1.2rem;
    color: #3190e8;

  }

  .balance1 {
    color: #3190e8;
    font-size: .63rem;
    vertical-align: .2rem;

  }

  li {
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAIBAMAAAALs8LeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURUxpcf9TQf9aS/9TQP9TQP9TQv9TQf9UQP9bSP9TQCdGiZQAAAAJdFJOUwBPEZzKPX2/HKJFz58AAAAkSURBVAjXY5gJBwzEMScHNXpCmQIMDMwQ5jQGIKgEMyeBmJIAtqcnWdDMwKsAAAAASUVORK5CYII=) repeat-x;
    background-size: .5rem .2rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
  }

  .list_item {
    display: flex;
    justify-content: space-between;
    padding: 1rem .5rem .8rem
  }

  .class_left {
    /*font-size: 0;*/
    border-right: .025rem dotted #ccc;
    flex: 1;
  }

  .span1 {
    font-size: .75rem;
    color: #ff5340;
    font-weight: 700;
  }

  .span2 {
    font-size: 1.5rem;
    color: #ff5340;
  }

  .span3 {
    font-size: .8rem;
    color: #ff5340;
    font-weight: 700;
  }

  .span4 {
    font-size: .8rem;
    color: #ff5340;
    font-weight: 700;
  }

  .p1 {
    font-size: .4rem;
    color: #999;
  }

  .red_middle {
    flex: 2;
    margin-left: 1.5rem;
  }

  h4 {
    font-size: .7rem;
    color: #666;
    margin-left: -.7rem;
  }

  .p2 {
    list-style-type: disc;
    margin-left: -.7rem;
    font-size: .4rem;
    color: #999;
  }

  .p3 {
    list-style-type: disc;
    margin-left: -.7rem;
    font-size: .4rem;
    color: #999;
  }

  .red_right {
    font-size: .75rem;
    color: #ff5340;
  }

  .chakan {
    display: block;
    text-align: center;
  }

  .look {
    font-size: .5rem;
    color: #999;
    margin-right: .2rem;
  }

  .yjt {
    font-size: .4rem;
    color: #aaa;
  }

  .exchange_red {
    flex: 1;
    line-height: 2rem;
    text-align: center;
    font-size: .7rem;
    color: #555;
  }

  .Recommend {
    flex: 1;
    line-height: 2rem;
    text-align: center;
    font-size: .7rem;
    color: #555;
  }

  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    display: flex;

  }

  /*>>>.van-tabs__line{*/
  /*background: chartreuse!important;*/
  /*}*/
  /*>>>[data-v-24e500e4] .van-ellipsis{*/
  /*color: chartreuse;*/
  /*}*/
  .balance3 {
    color: #3190e8;
    font-size: .63rem;
    vertical-align: .2rem;

  }

  .footer1 {
    position: fixed;
    text-align: center;
    margin-top: .4rem;
    top: 40%;
    left: 30%;
  }

  .footer1 img {
    width: 6rem;
    height: 3.4rem;
  }

  .none {
    font-size: .7rem;
    color: #666;
    margin-top: .4rem;
  }

  .fei {
    font-size: .5rem;
    color: #999;
    margin-bottom: .4rem;
  }

  .xiazai {
    border: none;
    outline: none;
    color: #ffff;
    padding: .3rem;
    background-color: #56d176;
    border-radius: 5%;
    margin-top: .5rem;
  }

  /*.van-ellipsis{*/
  /*font-size: .6rem;*/
  /*}*/

  .card {
    margin-bottom: .5rem;
    border-radius: .3rem;
    background: url("../assets/hong.png") repeat-x, white;
    background-size: .6rem .2rem;
    display: flex;
    justify-content: space-between;
    padding: 1.2rem .5rem 1.2rem;
  }

  .left {
    border-right: .025rem dotted #ccc;
    flex: 1;
  }

  .price {
    font-size: .85rem;
    color: #ff5340;
    font-weight: 700;
  }

  .big {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .condition {
    font-size: .4rem;
    color: #999;
  }

  .right {
    flex: 2;
    margin-left: 1.5rem;
    list-style-type: disc;
    font-size: .4rem;
    color: #999;

  }

  .share {
    font-size: .7rem;
    color: #666;
    line-height: 1.2rem;
  }

  .time {
    font-size: .8rem;
    color: #ff5340;
  }

  .limit {
    background-color: #f9f9f9;
    padding: .4rem;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
    list-style-type: disc;
    font-size: .5rem;
    color: #999;
    margin-top: -0.6rem;
  }


</style>
