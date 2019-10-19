<template>
    <ul>
      <!--订单顶部-->
      <li class="otop">
        <router-link class="back" :to="{path:'/shop'}"><i class="icon-Group- iconfont"></i></router-link>
        <h4>确认订单</h4>
        <div class="login">
          <router-link :to="{path:''}">登录</router-link> |
          <router-link :to="{path:''}">注册</router-link>
        </div>
      </li>
      <!--添加地址-->
      <li class="address">
        <div>
          <i class="icon-ditu1 iconfont"></i>
          <span>请添加一个收货地址</span>
          <router-link :to="{path:'/address_gzh'}"><i class="icon-icon-- iconfont"></i></router-link>
        </div>
      </li>
      <!--送达时间-->
      <li class="ztime">
        <h3>送达时间</h3>
        <div class="stime">尽快送达 | 预计{{shopo.opening_hours[0].split('/')[0]}}</div>
        <span class="bird">{{shopo.delivery_mode.text}}</span>
      </li>
      <!--支付方式-->
      <li class="pay">
        <div class="way">
          <span>支付方式</span>
          <span @click="show=true">在线支付<i class="icon-icon-- iconfont"></i></span>
        </div>
        <div class="redbao">
          <span>红包</span>
          <span>暂时只在饿了么APP中使用</span>
        </div>
      </li>
      <!--支付滑出框-->
      <div class="zfc" v-if="show"  :class="">
          <div class="zfway" v-if="show" :class="show==true?t:f">
            <h4>支付方式</h4>
            <div class="hdfk">
              <span>货到付款(商家不支持货到付款)</span>
              <span><i class="icon-radio-fill iconfont"></i></span>
            </div>
            <div class="zxzf">
              <span>在线支付</span>
              <span @click="show=false"><i class="icon-radio-fill iconfont"></i></span>
            </div>
          </div>
      </div>
      <!--商品详细计算价格-->
      <li class="sum">
        <div class="sbt">
          <img :src="'//elm.cangdu.org/img/' + shopo.image_path" alt="">
          <h3>{{shopo.name}}</h3>
        </div>
        <div class="shops">
          <div v-for="(v,i) in pros" :key="i">
            <span>{{v.name}}</span>
            <span>x{{v.number}}</span>
            <span>￥{{v.price}}</span>
          </div>
        </div>
        <div class="pros">
          <div>
            <span>餐盒</span>
            <span>￥{{box}}</span>
          </div>
          <div>
            <span>配送费</span>
            <span>￥{{song}}</span>
          </div>
        </div>
        <div class="totalp">
          <div>
            <span>订单￥{{count}}</span>
            <span>待支付</span>
            <div>￥{{count}}</div>
          </div>
        </div>
      </li>
      <!--订单备注-->
      <li class="remarks">
          <router-link :to="{path:'/ordermarks'}">
            <span>订单备注</span>
            <span>{{remark}}</span>
          </router-link>
        <router-link :to="{path:'/bill'}">
          <span>发票抬头</span>
          <span>不需要开发票 ></span>
        </router-link>
      </li>
      <!--支付money-->
      <li class="footer">
      <span>待支付 ￥10</span>
          <router-link :to="{path:''}">确认下单</router-link>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "Con_order_gzh",
      data(){
          return{
            id:'',
            shopo:{},
            show:false,
            t:'animated slideInUp .5s linear',
            f:'animated slideOutDown .5s linear',
            latitude:'',
            longitude:'',
            remark:'口味、偏好等 >',
            pros:{},
            box:5,
            song:5,
            zp:0
          }
      },
      created(){
        this.latitude = this.$store.state.name.latitude;
        this.longitude = this.$store.state.name.longitude;
          this.id = this.$store.state.dataID;
          this.Myhttp.get('/shopping/restaurant/'+this.id,data=>{
            this.shopo = data;
            this.pros = this.$route.params.shops
            console.log(this.pros)
            // console.log(this.id);
            // console.log(this.shopo);
          })
        // this.Myhttp.post('/v1/carts/checkout',`{restaurant_id:1,latitude:${this.latitude},longitude:${this.longitude},entities    :}`,data=>{
        //   console.log(data);
        // })
      },
      updated(){
        if(this.$route.params.remark.length == 0){
          this.remark = '口味、偏好等 >'
        }else {
          this.remark = this.$route.params.remark;
        }
      },
      computed:{
          count(){
            for (let i in this.pros){
              this.zp += this.pros[i].price * this.pros[i].number
            }
            this.zp = this.zp + this.box + this.song
            return this.zp
          }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451811_w5ba6ysrei.css";
  .otop{
    background: #3190e8;
    color: white;
    position: relative;
    height: 2rem;
  }
  .back{
    position: absolute;
    left: 0;
    top: 0.2rem;
    display: inline-block;
    color: white;
  }
  .icon-Group-{
    font-size: 1.5rem;
  }
  .otop h4{
    position: absolute;
    top: .3rem;
    left: 38%;
  }
  .login{
    position: absolute;
    right: 0.5rem;
    top: .5rem;
    font-size: .8rem;
  }
  .login a{
    color: white;
    display: inline-block;
  }
  .address{
    background: white;
    border-bottom: dashed 0.1rem deepskyblue;
    padding: 1rem;
  }
  .address a{
    display: inline-block;
    float: right;
  }
  .icon-icon--{
    font-size: 1.5rem;
  }
  .icon-ditu1{
    color: deepskyblue;
    font-size: 1.1rem;
  }
  .bird{
    background: #57A9FF;
    color: white;
    border-radius: 3px;
    padding: 0.1rem 0.2rem;
    font-size: .6rem;
    position: absolute;
    right: 1rem;
    top: 2.4rem;
  }
  .ztime{
    padding: 1rem 0 2rem 1rem;
    background: white;
    margin-top: .6rem;
    border-left: 0.2rem solid deepskyblue;
    position: relative;
  }
  .stime{
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: #57A9FF;
    font-size: .8rem;
  }
  .pay{
    background: white;
    margin-top: .6rem;
  }
  .way{
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    overflow: hidden;
  }
  .way span:nth-child(1){
    float: left;
    font-size: .9rem;
  }
  .way span:nth-child(2){
    display: inline-block;
   float: right;
    font-size: .8rem;
    color: #999;
  }
  .way span:nth-child(2) .icon-icon--{
    font-size: 1rem;
  }
  .redbao{
    padding: .5rem 1rem;
    overflow: hidden;
    font-size: .8rem;
    color: #999;
  }
  .redbao span:nth-child(1){
    float: left;
  }
  .redbao span:nth-child(2){
    float: right;
  }
  .zfc{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    z-index: 1000;
  }
  .zfway{
    background: white;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 3rem;
  }
  .zfway h4{
    text-align: center;
    padding: 0.5rem;
    background: #fafafa;
  }
  .hdfk{
    padding: 0.5rem 1rem;
    overflow: hidden;
  }
  .hdfk span:nth-child(1){
    float: left;
    font-size: .8rem;
  }
  .hdfk span:nth-child(2){
    float: right;
    font-size: 1rem;
    color: #999;
  }
  .zxzf{
    padding: 0.5rem 1rem;
    overflow: hidden;
  }
  .zxzf span:nth-child(1){
    float: left;
    font-size: .8rem;
  }
  .zxzf span:nth-child(2){
    float: right;
    font-size: 1rem;
    color: #4cd964;
  }
  .sum{
    padding: .7rem 1rem;
    background: white;
    margin-top: .7rem;
  }
  .sum .sbt{
    position: relative;
    padding-bottom: .5rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .sum img{
    width: 2rem;
    height: 2rem;
  }
  .sum h3{
    display: inline-block;
    position: absolute;
    top: 0.2rem;
    margin-left: 0.5rem;
    font-weight: 400;
  }
  .sum .pros{
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .sum .pros div{
    margin: .5rem 0;
  }
  .sum .shops div{
    margin: .5rem 0;
    position: relative;
  }
  .sum .shops div span:nth-child(2){
    position: absolute;
    left: 12rem;
    color: orangered;
  }
  .sum .shops div span:nth-child(3){
    float: right;
  }
  .sum .pros div span:nth-child(2){
    float: right;
  }
  .totalp div{
    margin-top: .5rem;
    position: relative;
  }
  .totalp div span:nth-child(2){
    float: right;
    color: orangered;
    margin-right: 1rem;
  }
  .totalp div>div{
    margin-left: 13rem;
    color: orangered;
  }
  .remarks{
    padding: 0 1rem;
    background: white;
    margin-top: .7rem;
    margin-bottom: 3.5rem;
  }
  .remarks a{
    display: block;
    color: #999;
    padding: .5rem 0;
  }
  .remarks a:nth-child(1){
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .remarks a span:nth-child(2){
    float: right;
    font-size: .8rem;
    margin-top: .2rem;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: .5rem 1rem;
    background: #333;
    color: white;
    box-sizing: border-box;
    height: 2.4rem;
  }
  .footer a{
    display: inline-block;
    position: fixed;
    right: 0;
    bottom: 0;
    background: #56d176;
    padding: .55rem 1rem;
    color: white;
  }
  .remarks a:nth-child(1) span:nth-child(2){
    width: 5.7rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
