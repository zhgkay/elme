<template>
  <div id="benefit">
    <van-nav-bar title="余额问题" left-arrow @click-left="onClickLeft"/>
    <van-tabs line-width="3rem" color="#3190e8" title-active-color="#3190e8" @click="showFoot" animated>
      <van-tab title="红包" class="content">
        <div class="head">
          <p class="money">有<span class="red space">3</span>个红包即将到期</p>
          <div @click="Bstate" class="state">
            <van-icon name="question" class="qicon"/>
            <span>红包说明</span>
          </div>
        </div>
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
        <router-link :to="{}" class="history">查看历史红包
          <van-icon name="arrow"/>
        </router-link>
      </van-tab>
      <van-tab title="商家代金券">
        <div class="head bus">
          <div @click="voucher" class="state">
            <van-icon name="question" class="qicon"/>
            <span>商家代金券说明</span>
          </div>
        </div>
        <div class="container">
          <img src="../../../assets/sjx/unuse.png" class="img">
          <p class="chit">无法使用代金券</p>
          <p class="low">非客户端或客户端版本过低</p>
          <van-button type="primary" class="pbtn">下载或升级客户端</van-button>
        </div>
      </van-tab>
    </van-tabs>
    <div class="footer" v-if="show">
      <router-link :to="{}" class="exchange line">兑换红包</router-link>
      <router-link :to="{}" class="exchange">推荐有奖</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Benefit",
    data() {
      return {
        hongbao: [],
        amount: [],
        Arr: [],
        limit: "",
        show: true
      }
    },
    methods: {
      onClickLeft() {
        console.log('返回');
      },
      Bstate() {
        console.log("红包说明");
      },
      voucher() {
        console.log("商家代金券说明")
      },
      showFoot(name) {
        if (name == 1) {
          this.show = false;
        } else {
          this.show = true;
        }
      }
    },
    created() {
      this.myHttp.get("/promotion/v2/users/1/hongbaos?limit=20&offset=0", (data) => {
        for (let i = 0; i < data.length; i++) {
          this.hongbao.push(data[i]);
          this.amount.push(this.hongbao[i].amount.toFixed(1));
        }
        for (let j = 0; j < this.amount.length; j++) {
          this.Arr.push(this.amount[j].split("."));
        }
        this.limit = this.hongbao[2].limit_map.restaurant_flavor_ids;
      })
    }
  }
</script>

<style scoped>
  #benefit {
    width: 18.75rem;
    height: 33rem;
  }

  .van-nav-bar {
    background-color: #3190e8;
  }

  .van-nav-bar__arrow {
    color: #fff;
    font-size: 1.2rem;
  }

  .van-nav-bar__title {
    color: whitesmoke;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .content {
    padding: 0 .7rem;
  }

  .head {
    display: flex;
    justify-content: space-between;
    font-size: .6rem;
    line-height: 2rem;
  }

  .qicon {
    vertical-align: -0.1rem;
    font-size: 0.75rem;
  }

  .bus {
    flex-direction: row-reverse;
    margin-right: 0.7rem;
    margin-top: 0.2rem;
  }

  .money {
    font-size: .65rem;
    color: #666;
  }

  .red {
    color: #ff5340;
  }

  .space {
    margin: 0 0.2rem;
  }

  .state {
    color: #3190e8;
    font-size: .65rem;
  }

  .card {
    margin-bottom: .5rem;
    border-radius: .3rem;
    background: url("../../../assets/sjx/line.png") repeat-x, white;
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

  .history {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .6rem;
    color: #999;
    margin-top: 1rem;
  }

  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
  }

  .exchange {
    flex: 1;
    line-height: 2.5rem;
    text-align: center;
    font-size: .8rem;
    color: #555;
  }

  .container {
    text-align: center;
    margin-top: 4rem;
  }

  .img {
    width: 6.5rem;
    height: 4rem;
  }

  .chit {
    font-size: .8rem;
    color: #666;
    margin-top: .5rem;
  }

  .low {
    font-size: .6rem;
    color: #999;
    margin: .5rem 0;
  }

  .pbtn {
    background-color: #56d176;
    font-size: .75rem;
    color: #fff;
    padding: 0 0.2rem;
    border-radius: .25rem;
    line-height: 0;
  }
  .line{
    border-right: 1px solid rgb(245, 245, 245);
  }
</style>
