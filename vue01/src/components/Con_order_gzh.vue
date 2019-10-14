<template>
    <ul>
      <li class="otop">
        <router-link :to="{path:'/shop'}" class="back"><i class="icon-Group- iconfont"></i></router-link>
          <h2>确认订单</h2>
        <div class="login">
          <a>登录</a>|<a>注册</a>
        </div>
      </li>
      <li class="address">
          <div class="dt">
            <i class="icon-ditu iconfont"></i>
            <span>请添加一个收获地址</span>
          </div>
        <router-link :to="{path: ''}" class="tz"><i class="icon-icon-- iconfont"></i></router-link>
      </li>
      <li class="stime">
        <h2>送达时间</h2>
        <span class="ssj">尽快送达 | 预计 18:25</span>
        <span class="bird">蜂鸟专送</span>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "Con_order_gzh",
      data(){
          return{
            id:'',
            shop_name:{}
          }
      },
      created(){
          this.id = this.$store.state.dataID;
          this.Myhttp.get('/shopping/restaurant/'+this.id,data=>{
            this.shop_name = data;
            console.log(this.id);
            console.log(this.shop_name);
          })
      }
    }
</script>

<style scoped>
@import "//at.alicdn.com/t/font_1451811_tjqtsng4tr.css";
  .otop{
    padding: 0.1rem;
    background: #3190e8;
    color: white;
    height: 0.6rem;
    position: relative;
  }
.back{
  position: absolute;
  left: 0.1rem;
}
  .icon-Group-{
    font-size: 0.6rem;
  }
  .otop h2{
    display: inline-block;
    position: absolute;
    left: 38%;
  }
  .login{
    position: absolute;
    right: 0.6rem;
    top: 0.2rem;
  }
  .address{
    background: white;
    padding: 0.3rem;
    position: relative;
    height: 1rem;
    border-bottom: 2px dashed skyblue;
  }
  .dt{
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    font-size: 0.4rem;
  }
  .tz{

    position: absolute;
    top: 0.5rem;
    right:0.5rem;
  }
  .icon-icon--{
    font-size: 0.5rem;
    color: #999;
  }
  .icon-ditu{
    color: skyblue;
  }
  .stime{
    padding: 0.6rem 0.2rem;
    background: white;
    margin-top: 0.2rem;
    border-left: 0.1rem solid #3190e8;
    position: relative;
    height: 1rem;
  }
  .stime h2{
    position: absolute;
    top: 0.8rem;
  }
  .ssj{
    position: absolute;
    right: 0.7rem;
    top: 0.5rem;
    color: #3190e8;
    font-size: 0.35rem;
  }
  .stime .bird{
    position: absolute;
    top: 1.1rem;
    right: 0.7rem;
    background: #3190e8;
    padding: 0.1rem;
    display: inline-block;
    border-radius: 5px;
    color: white;
  }
</style>
