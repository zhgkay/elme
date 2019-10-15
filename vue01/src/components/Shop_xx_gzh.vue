<template>
  <ul>
    <!--商家详情顶部-->
    <li class="xxtop">
      <router-link :to="{path:'/shop'}"><i class="icon-Group- iconfont"></i></router-link>
      <div class="shopx">商家详细</div>
    </li>
    <!--活动与属性-->
    <li class="hd">
      <div class="active">活动与属性</div>
      <div class="dd">
        <div class="bao" v-for="(v,i) in xx.supports">
          <span class="fang">{{v.icon_name}}</span>
          <span class="des">{{v.description}}(APP专享)</span>
        </div>
      </div>
    </li>
    <!--食品监督安全公示-->
    <li class="aq">
      <div class="active aaq">
        <span>食品监督安全公示</span>
        <router-link :to="{path:'/foodaq'}" class="qy">企业认证详细></router-link>
      </div>
      <div class="jdu">
        <img class="face" src="../assets/123.png" alt="">
        <div class="res">
          <div class="result">监督检查结果: <span class="good">良好</span></div>
          <div class="day">检查日期: <span></span></div>
        </div>
      </div>
    </li>
    <!--商家信息-->
    <li class="msg">
      <div class="active">商家信息</div>
      <ul>
        <li class="md">{{xx.name}}</li>
        <li class="md"><span>地址:</span>{{xx.address}}</li>
        <li class="md"><span>营业时间:</span>{{xx.opening_hours[0]}}</li>
        <li class="md mda">
          <span>营业执照</span>
          <router-link :to="{path: ''}"><i class="icon-icon-- iconfont"></i></router-link>
        </li>
        <li class="md mda">
          <span>餐饮服务许可证</span>
          <router-link :to="{path: ''}"><i class="icon-icon-- iconfont"></i></router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Shop_xx_gzh",
    data() {
      return {
        id: '',
        xx: {}
      }
    },
    created() {
      this.id = this.$store.state.dataID;
      this.Myhttp.get('/shopping/restaurant/' + this.id, data => {
        this.xx = data;
        console.log(this.xx);
      })
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451811_ym0ebm7lue.css";

  .xxtop {
    padding: 0.5rem;
    background: #3190e8;
    text-align: center;
    position: relative;
  }

  .icon-Group- {
    color: white;
    font-size: 1.2rem;
    position: absolute;
    left: 0;
  }

  .shopx {
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;
    color: white;
  }

  .hd {
    background: white;
    margin-top: 0.5rem;
  }

  .active {
    padding: 0.5rem;
    font-size: 0.8rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .res{
    font-size: 0.7rem;
  }
  .dd {
    padding: 0.5rem;
  }

  .bao {
    margin-top: 0.2rem;
    font-size: 0.5rem;
  }

  .fang {
    background: rgb(153, 153, 153);
    display: inline-block;
    border-radius: 10px;
    padding: 0.1rem 0.2rem;
    color: white;
  }

  .dd div:nth-child(2) span:nth-child(1) {
    background: rgb(87, 169, 255);
  }

  .des {
    color: #666;
  }

  .aq {
    margin-top: 0.5rem;
    background: white;
  }

  .aaq {
    position: relative;
  }

  .qy {
    position: absolute;
    right: 0.5rem;
    color: #999;
  }

  .jdu {
    padding: 0.5rem;
    position: relative;
  }

  .face {
    border-radius: 50%;
  }

  .res {
    display: inline-block;
    position: absolute;
    top: 0.7rem;
    left: 3rem;
    color: #666;
  }

  .day {
    margin-top: 0.2rem;
  }

  .good {
    color: lawngreen;
  }

  .msg {
    background: white;
    margin-top: 0.5rem;
  }

  .md {
    padding: 0.8rem;
    font-size: 0.6rem;
    color: #666;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .mda {
    position: relative;
  }

  .mda i {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    font-size: 1rem;
    color: #999;
  }
</style>
