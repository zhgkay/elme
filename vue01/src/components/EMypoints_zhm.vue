<template>
   <div class="mypoint">
     <!--下载弹出框-->
     <div class="Eject" v-show="temp">
       <div class="round"><span>!</span></div>
       <p>快去下单赚取大量积分吧</p>
       <button @click="temp=false" class="btn2">确认</button>
     </div>
     <div class="header_1">
       <div class="title_wode1">
         <router-link :to="{path:'/me'}">
           <i class="icon-mjiantou-copy iconfont ii"></i>
         </router-link>
         <span>我的积分</span>
       </div>
     </div>
     <section class="content_container">
       <section class="content_mingxi">
         <div class="header_now">
           <header>
             <div class="now">当前积分</div>
             <section class="balance">
               <img src="" alt="">
               <i class="icon-wenhao iconfont ie"></i>
               <router-link :to="{path: '/integral'}" class="balance1">积分说明</router-link>
             </section>
           </header>
           <p class="money"><b>0</b>个</p>
           <button  @click="temp=true" class="carry">积分兑换商品</button>
         </div>
       </section>
       <p class="transaction">最近三十天无积分记录</p>
       <div class="none">
         <img :src="imgsrc" alt="">
         <p class="sss">最近三十天无积分记录</p>
         <p class="kkk">快去下单赚取大量积分吧</p>
       </div>
     </section>

   </div>
</template>

<script>
    export default {
        name: "EMypoints_zhm",
      data(){
          return{
            imgsrc:require("../assets/order.png"),
                temp: false
          }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_vtw3c3gskj9.css";

  .mypoint {
    width: 100%;
    height:735px;
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
  .ie{
    font-size: 1.2rem;
    color: #3190e8;
  }
  .content_mingxi{
    padding: .3rem;
    background-color: #3190e8;
  }
  .header_now{
    padding: .4rem;
    background-color: #fff;
    border-radius: .15rem;
  }
  header{
    overflow: hidden;
  }
  .now{
    float: left;
    font-size: .55rem;
    color: #666;
  }
  .balance{
    float: right;
  }
  .balance1{
    color: #3190e8;
    font-size: .65rem;
    vertical-align: .2rem;
  }
  .money{
    font-size: .7rem;
    color: #333;
  }
  b{
    font-size: 1.8rem;
    color: #333;
  }
  .carry{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    color: #fff;
    border-radius: .15rem;
    line-height: 2rem;
    margin-top: 1rem;
    text-align: center;
    background-color: #fe6d47;
    border: none;
    outline: none;
  }
  .transaction{
    font-size: .6rem;
    color: #999;
    line-height: 2rem;
    padding-left: .5rem;
  }
  .none{
    text-align: center;
  }
  .sss{
    margin-top: .5rem;
    font-size: .7rem;
    color: #666;
  }

  .kkk{
    font-size: .6rem;
    color: #999;
    margin-top: .5rem;
  }
  .Eject {
    position: fixed;
    top: 50%;
    left: 40%;
    margin-top: -6rem;
    margin-left: -6rem;
    width: 80%;
    animation: tipMove .4s;
    background-color: #fff;
    padding-top: .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px;
    border-radius: .25rem;
    height: 25%;
  }

  .round {
    width: 3rem;
    height: 3rem;
    border: .15rem solid #f8cb86;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #f8cb86;
    margin-top: .3rem;
  }

  .Eject p {
    font-size: .7rem;
    color: #333;
    line-height: .9rem;
    text-align: center;
    margin-top: .9rem;
    margin-bottom: 1rem;
    padding: 0 .4rem;
  }
  .btn2{
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    line-height: 1.8rem;
    border-radius: .2rem;
    outline: none;
    border: none;
    width: 100%;
    margin: auto;
    display: block;
    cursor: pointer;
  }
</style>
