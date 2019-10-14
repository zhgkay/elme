<template>
    <div id="products">
      <!--侧边栏-->
            <div class="zuo">
              <van-sidebar  v-model="active">
                <van-sidebar-item v-for="(v,i) in products" :title="v.name"/>
              </van-sidebar>
            </div>
      <!--商品卡-->
      <div class="you">
        <div v-for="(v,i) in products" :key="i">
          <h1 class="hh1">{{v.name}}</h1><span class="hs1">{{v.description}}</span>
          <van-card v-for="(n,index) in v.foods"
            :price="n.specfoods[0].price + '起'"
            :desc="n.description"
            :title="n.name"
            :thumb="'http://elm.cangdu.org/img/'+ n.image_path"
          >
            <div slot="tags">
              <span>月售{{n.month_sales}}</span>
              <span>好评率{{n.satisfy_rate}}</span>
            </div>
            <div slot="footer">
              <button class="an" @click="n.is_featured <=0 ? 0 : n.is_featured--">-</button>
              <span>{{n.is_featured}}</span>
              <button class="an" @click="n.is_featured++">+</button>
            </div>
          </van-card>
        </div>
      </div>
      <!--结算脚-->
        <div class="foot">
            <div class="cir">
              <div class="cil"></div>
              <div class="pir">
                <h2>￥180.00</h2>
                <div>配送费￥5</div>
              </div>
              <div class="rbtn">
                <router-link :to="{path:'/corder'}">去结算</router-link>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { Sidebar, SidebarItem } from 'vant';
  Vue.use(Sidebar);
  Vue.use(SidebarItem);
  import { Card } from 'vant';
  Vue.use(Card);
    export default {
        name: "Products_gzh",
      data(){
          return{
            products:[],
            id:0,
            active:0
          }
      },
      created(){
          this.id = this.$store.state.dataID;
        this.Myhttp.get('/shopping/v2/menu?restaurant_id=' + this.id,data=>{
            // console.log(data);
            this.products = data;
          })
      },
    }
</script>

<style scoped>
  .an{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    font-size: 0.5rem;
    line-height: 0.1rem;
    background: skyblue;
    color: white;
    border: 0;
  }
  .zuo{
    display: inline-block;
    width: 20%;
    position: fixed;
    left: 0;
    top: 4.1rem;
    z-index: 1;
    box-sizing: border-box;
  }
  .you{
    width: 80%;
    position: relative;
    top: 4.1rem;
    left: 20%;
    background: white;
    box-sizing: border-box;
  }
  .van-card__title{
    font-size: 0.5rem;
    font-weight: bold;
  }
  .hh1,.hs1{
    margin-left: 0.5rem;
  }
.foot{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 1.2rem;
  background: red;
  z-index: 2;
  background: #333;
  color: white;
}
  .cir{
    position: relative;
  }
  .cir .cil{
    width: 1rem;
    height: 1rem;
    background: #3190e8;
    border-radius: 50%;
    position: absolute;
    top: -0.4rem;
    left: 0.5rem;
    border: 0.1rem solid #333;
  }
  .pir{
    display: inline-block;
    position: absolute;
    left: 2rem;
  }
  .rbtn{
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
  }
  .rbtn a{
  display: block;
    background: #4cd964;
    box-sizing: border-box;
    font-size: 0.6rem;
    padding: 0.2rem 1rem;
  }
</style>
