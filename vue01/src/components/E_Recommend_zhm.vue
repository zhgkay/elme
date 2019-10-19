<template>
    <div class="Recommend">
      <!--下载弹出框-->
      <div class="Eject" v-show="temp">
        <div class="round"><span>!</span></div>
        <p>请在饿了吗APP打开</p>
        <button @click="temp=false" class="btn2">确认</button>
      </div>
      <div class="header_1">
        <div class="title_wode1">
          <router-link :to="{path:'/discount'}">
            <i class="icon-mjiantou-copy iconfont ii"></i>
          </router-link>
          <span class="tj">推荐有奖</span>
        </div>
      </div>
       <div class="img1">
         <img src="http://cangdu.org/elm/static/img/activity.png" alt="" class="img2">
       </div>
 <section class="Invitation">
   <div class="yq1" @click="temp=true">
     <img src="../assets/weixin.png" alt=""
     class="i1"><p class="p1">邀请微信好友</p>
   </div>
   <div class="yq2" @click="temp=true">
     <img src="../assets/QQ.png" alt="" class="i1"><p class="p1">邀请QQ好友</p>
   </div>
   <div class="yq3" @click="temp=true">
     <img src="../assets/面对面.png" alt="" class="i1"><p class="p1">面对面邀请</p>
   </div>
 </section>
<section class="leiji">
  <div class="Profit">
    <p class="">累计收益</p>
    <p><span class="ling">0</span>元</p>
  </div>
  <div class="success">
    <p >成功邀请</p>
    <p><span class="cgyq">0</span>人</p>
  </div>

</section>
      <p class="shouyi">收益明细</p>
      <section class="kuaiqu">
        <img src="../assets/money.png" alt="">
        <p>还不赶快去邀请好友</p>
      </section>
    </div>
</template>

<script>
    export default {
        name: "E_Recommend_zhm",
      data() {
        return {
          temp: false
        }
      },
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_ua3f8b9qf8.css";

  .Recommend {
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
.tj{
  /*font-size: .56rem;*/
}
  .title_wode1 {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    padding-top: .3rem;

  }
.img2{
  width: 100%;
  height: 10rem;
}
  .Invitation{
    display: flex;
    padding: 1rem 0;
    background-color: #fff;
  }
  .yq1, .yq2,.yq3{
    flex: 1;
    text-align: center;
  }
 .i1{
   width:3rem;
   height: 3rem;
 }
  .p1{
    font-size: .3rem;
    color: #333;
  }
.leiji{
  display: flex;
  margin-top: 1rem;
  font-size: .5rem;
  color: #666;
}
  .Profit{
    flex: 1;
    text-align: center;
  }
  .success{
    flex: 1;
    text-align: center;
    border-left: .025rem solid #ddd;

  }
  .ling{
    font-size: .8rem;
    color: #ff5633;
    font-weight: 700;
  }
  .cgyq{
    font-size: .8rem;
    color: #666;
    font-weight: 700;
  }
  .shouyi{
    margin-top: 1.5rem;
    text-align: center;
    color: #666;
    font-size: .7rem;
  }
  .kuaiqu{
    text-align: center;
    margin-top:1.7rem;
  }
  .kuaiqu img{
    width: 1.5rem;
    height: 2rem;
  }
  .kuaiqu{
    font-size: .5rem;
    color: #999;
  }
  .Eject {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -6rem;
    margin-left: -6rem;
    width: 12rem;
    animation: tipMove .4s;
    background-color: #fff;
    padding-top: .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px;
    border-radius: .25rem;
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
  }

  .Eject p {
    font-size: .8rem;
    color: #333;
    line-height: .9rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;
  }
  .btn2{
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .5rem;
    outline: none;
    border: none;
    width: 80%;
    margin: auto;
    display: block;
    cursor: pointer;
  }



</style>
