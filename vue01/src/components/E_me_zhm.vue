<template>
  <div id="title_wode">
    <div class="header_1">
      <div class="title_wode1">
      <i class="icon-mjiantou-copy iconfont ii"></i>
        <span>我的</span>
      </div>
    </div>
    <section class="Head_portrait">
      <router-link :to="{path: '/Information'}">
        <div class="me_Sagnin">
          <div class="me_zuo">
            <div class="me_touxiang">
              <img src="http://elm.cangdu.org/img/default.jpg" alt="" class="me_img1">
            </div>
            <div class="me_denglu">
              <p>登录/注册</p>
              <i class="icon-shouji iconfont "></i>
              <span>暂无绑定手机号</span>
            </div>
          </div>
          <div class="me_zjt">
            <i class="icon-arrow-right iconfont"></i>
          </div>
        </div>
      </router-link>
    </section>
    <section class="me_youhui">
        <ul>
          <li><router-link :to="{path:'/Mybalance'}">
              <b class="yuan">0.00</b>
              <span>元</span>
            <p>我的余额</p>
          </router-link> </li>
          <li><router-link :to="{path:'/discount'}">
            <b class="ge">0</b>
            <span>个</span>
            <p>我的优惠券</p>
          </router-link> </li>
          <li><router-link :to="{path:'/mypoint'}">
            <b class="fen">0</b>
            <span>分</span>
            <p>我的积分</p>
          </router-link> </li>
        </ul>
      </section>
    <section class="My_order">
        <router-link :to="{path:'/order',query:{title:'订单列表'}}" :class="{me_My_order1:true}">
            <div class="me_font1">
              <i class="icon-gengduo iconfont i1"></i>
              <span>我的订单</span>
            </div>
            <div class="me_font2">
          <i class="icon-arrow-right iconfont i2"></i>
         </div>
        </router-link>
        <router-link :to="{path:'/again'}" :class="{me_My_order2:true}">
          <div class="me_font3">
            <i class="icon-shangchengjifenshangcheng_xuanzhong iconfont i3"></i>
            <span>积分商城</span>
          </div>
          <!--<div class="me_font4">-->
            <!--<i class="icon-arrow-right iconfont i2"></i>-->
          <!--</div>-->
          <div class="me_font4">
            <i class="icon-arrow-right iconfont i2"></i>
          </div>
        </router-link>
        <router-link :to="{path:'/vip'}" :class="{me_My_order3:true}">
          <div class="me_font5">
            <i class="icon-wangguan iconfont i4"></i>
            <span>饿了吗会员卡</span>
          </div>
          <div class="me_font6">
            <i class="icon-arrow-right iconfont i2"></i>
          </div>
        </router-link>
      </section>
    <div class="server">
      <router-link :to="{path:'/server'}" :class="{me_My_order4:true}">
        <div class="me_font7">
          <i class="icon-fuwuzhongxin iconfont i5"></i>
          <span>服务中心</span>
        </div>
        <div class="me_font8">
          <i class="icon-arrow-right iconfont i2"></i>
        </div>
      </router-link>
      <router-link :to="{path:'/down'}" :class="{me_My_order5:'true'}">
          <div class="me_font9">
            <i class="icon-elema1 iconfont i6"></i>
            <span>下载饿了吗APP</span>
          </div>
          <div class="me_font10">
            <i class="icon-arrow-right iconfont i2"></i>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
  export default {
    name: "E_me_zhm"
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_imis59llh0q.css";
  *{
    text-decoration: none;
    list-style: none;
  }
  html{
    background: #f5f5f5;
  }
  .iconfont{
    font-size: .77rem;
  }
  #title_wode{
    width: 100%;
    height: 600px;
    background: #f5f5f5;
  }
  /*.icon-mjiantou-copy {*/
    /*font-size: 20px;*/
    /*padding-left: .3rem;*/
    /*color: #fff;*/
  /*}*/
  /*头部设置我的*/
  .header_1 {
    width: 100%;
    background-color: #3190e8;
    /*text-align: center;*/
    /*position: fixed;*/
    /*z-index: 100;*/
    /*left: 0;*/
    /*top: 0;*/
    height: 1.95rem;
    overflow: hidden;
  }
  .ii{
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
  .Head_portrait {
    align-items: center;
    background: #3190e8;
    padding: .666667rem .6rem;
    /*height: 5rem;*/
    margin: 0;
     }
  .me_Sagnin{
    overflow: hidden;
  }
  .me_img1{
   background: #fff;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
  }
  .me_denglu{
    color: #fff;
    font-weight: 400;
    float: right;
    padding-left: .3rem;
  }
  .me_denglu p{
    font-size: .8rem;
  }
  .me_denglu span{
   font-size: .5rem;
  }
  .me_zuo{
    float: left;
  }
  .me_zjt{
  float: right;
    color: #fff;
  }
  .me_touxiang{
    float: left;
  }
.me_youhui{
  font-style: normal;
  border: none;
  color: #333;
  font-weight: 400;
  margin-top: .5rem;
}
  .me_youhui li{
    float: left;
    width: 33%;
    display: inline-block;
    border-right: 1px solid #f1f1f1;
    text-align: center;
  }
  .me_youhui li span{
    color: #333;
    font-size:.55rem;
  }
.me_youhui li p{
  font-size: .57333rem;
  color: #666;
  font-weight: 400;
  padding-bottom: .453333rem;
}
  me_youhui li b{
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1rem;
  }
  .yuan{
    color: #f90;
    font-size: 1rem;
  }
.ge{
  color: #ff5f3e;
  font-size: 1rem;
}
.i4{
  color: #f90;
}
.i3{
  color: #ff5f3e;
}
  .fen{
    color: #6ac20b;
    font-size: 1rem;
  }
  .My_order{
    margin-top: .4rem;
    background: #fff;
    /*border: 2px solid #f5f5f5;*/
  }
  /*这是每个a标签的设置*/
.me_My_order1,.me_My_order2,.me_My_order3,.me_My_order4,.me_My_order5{
  padding-left: 1.6rem;
  display: block;
  color: #333;
  font-weight: 400;
  background-color: #fff;
  overflow: hidden;
  height: 2rem;
  border-bottom: 1px solid #f5f5f5;
  line-height:2rem;
}
/*这是每个字体图标和文字左边的内容*/
.me_font1,.me_font3,.me_font5,.me_font7,.me_font9{
  float: left;
  margin-left:-.6rem;
}
  /*这是每个字体图标和文字右边的内容*/
  .me_font2,.me_font4,.me_font6,.me_font8,.me_font10{
    float: right;
    color: #999;
    padding-right: .1rem;
  }
  .My_order span{
    font-size: .66rem;
  }
.server{
  margin-top: .4rem;
  font-size: .66rem;
}
.i5{
  color: rgb(74, 165, 240);
}
.i6{
  color: rgb(74, 165, 240);
}
</style>
