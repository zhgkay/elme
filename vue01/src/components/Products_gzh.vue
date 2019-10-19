<template>
    <ul class="wai">
      <!--侧边栏-->
      <li class="zuo">
        <span :class="activeClass == i ? 'active':''" @click="getI(i)" v-for="(v,i) in products" :key="i">{{v.name}}</span>
      </li>
      <!--商品卡-->
      <li class="you">
        <div class="bti" v-for="(v,i) in products" :key="i">
          <h3 :id="i">{{v.name}}</h3>
          <span>{{v.description}}</span>
          <div class="cardone" v-for="(n,index) in v.foods" :key="index">
            <img :src="'//elm.cangdu.org/img/'+n.image_path" alt="" @click="n.is_essential=true">
            <div class="ctitle">{{n.name}}</div>
            <div class="sms">{{n.description}}</div>
            <div class="csf">月售{{n.month_sales}} 好评率{{n.satisfy_rate}}%</div>
            <div class="priceone">￥{{n.specfoods[0].price}}</div>
            <div class="pres">
              <span class="icon-jian iconfont" @click="cutP(i,index)" v-if="n.is_featured>0"></span>
              <span v-if="n.is_featured>0">{{n.is_featured}}</span>
              <span class="icon-jia iconfont" @click="addP(i,index)"></span>
            </div>
            <div class="sxq" v-if="n.is_essential">
               <div class="shopn">
                 <span @click="n.is_essential=false" class="icon-Group- iconfont"></span>
                 <h3>{{n.name}}</h3>
               </div>
              <img :src="'//elm.cangdu.org/img/'+n.image_path" alt="">
              <div class="shopjs">
                <h2>{{n.name}}</h2>
                <div>{{n.description}}</div>
                <div class="pfx">
                  <span>评分 </span>
                  <van-rate v-model="n.rating" :size="10" readonly />
                  <span class="f"> {{n.rating}}</span>
                </div>
                <div class="ysf">
                  <span>月售{{n.month_sales}}单</span>
                  <span class="p">售价￥{{n.specfoods[0].price}}起</span>
                </div>
                <div class="pnum">
                  <span>评论数 {{n.rating_count}}</span>
                  <span>好评率{{n.satisfy_rate}}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <!--购物车脚-->
      <li class="foot">
        <div>
          <div class="cart" @click="showCart"><i class="icon-gouwuche iconfont"></i></div>
          <div>
            <div class="cir">{{total}}</div>
          </div>
          <div class="allp">
            <h4 id="price">￥{{sump}}.00</h4>
            <div class="sprice">配送费￥5</div>
          </div>
          <button disabled v-if="sump<20" class="qbtn">还差￥20起送</button>
          <button @click="getOrder" v-if="sump>=20" class="sbtn">去结算</button>
        </div>
      </li>
      <!--购物车内数据-->
      <li class="cart-products" v-if="isCart">
        <div :class="isCart?'animated slideInUp .5s linear':''">
          <div class="ding">
            <span>购物车</span>
            <span @click="clear"><i class="icon-lajitong iconfont"></i>清空</span>
          </div>
          <div class="ashop" v-for="(v,i) in cartPros" :key="i">
            <span>{{v.name}}</span>
            <span>￥{{v.price}}</span>
            <div class="del">
              <span class="icon-jian iconfont" @click="few(i,v.i,v.index)"></span>
              <span>{{v.number}}</span>
              <span class="icon-40 iconfont" @click="many(i,v.i,v.index)"></span>
            </div>
          </div>
        </div>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "Products_gzh",
      data(){
          return{
            products:[],
            id:0,
            active:0,
            total:0,
            sump:0,
            carts:[],
            activeClass: 0,
            name:'',
            number:'',
            price:'',
            // cartPro:{name:'',price:0,num:0},
            cartPros:[],
            isCart:false
          }
      },
      created(){
          this.id = this.$store.state.dataID;
        this.Myhttp.get('/shopping/v2/menu?restaurant_id=' + this.id,data=>{
            // console.log(data);
            this.products = data;
          // console.log(this.products);
        })
      },
      methods:{
          cutP(i,index){
            if(this.products[i].foods[index].is_featured <= 0){
              this.products[i].foods[index].is_featured = 0;
            }else {
              this.products[i].foods[index].is_featured--;
              this.total--;
              this.sump -= this.products[i].foods[index].specfoods[0].price;
            }
            this.name = this.products[i].foods[index].name;
            this.number = this.products[i].foods[index].is_featured;
            this.price = this.products[i].foods[index].specfoods[0].price;
            for (i = 0;i < this.cartPros.length;i++){
              if(this.cartPros[i].name == this.name && this.cartPros[i].price == this.price){
                this.cartPros[i].number--;
                if(this.cartPros[i].number<=0){
                  this.cartPros.splice(i,1);
                }
                break;
              }
            }
            console.log(this.cartPros)
          },
        addP(i,index){
          this.products[i].foods[index].is_featured++;
          this.total++;
          this.sump += this.products[i].foods[index].specfoods[0].price ;
          this.name = this.products[i].foods[index].name;
          this.number = this.products[i].foods[index].is_featured;
          this.price = this.products[i].foods[index].specfoods[0].price;
          if(this.cartPros.length == 0){
            this.cartPros.push({
              name:this.name,
              number:1,
              price:this.price,
              i:i,
              index:index
            })
          }else {
            for (i = 0;i < this.cartPros.length;i++){
              if(this.cartPros[i].name == this.name && this.cartPros[i].price == this.price){
                this.cartPros[i].number++
                break
              }
            }
            if(i >= this.cartPros.length){
              this.cartPros.push({
                name:this.name,
                number:1,
                price:this.price,
                i:i,
                index:index
              })
            }
          }
          // console.log(this.cartPros)
        },
        getOrder(){
            this.$router.push({
              name:'corde',params:{shops:this.cartPros}
            })
        },
        getI(i){
          document.getElementById(i).scrollIntoView(true);
          this.activeClass = i
        },
        few(i,i1,index){
          // this.cutP(i1,index);
          if(this.cartPros[i].number <= 1){
            this.sump-=this.cartPros[i].price
            this.total-=1
            this.cartPros.splice(i,1)
            console.log(this.cartPros)
          }else {
            this.cartPros[i].number--;
            this.total--;
            this.sump -= this.cartPros[i].price ;
            for (index in this.products[i1].foods){
              if(this.cartPros[i].number > 0){
                this.products[i1].foods[index].is_featured--
              }else if (this.cartPros.indexOf(this.cartPros[i]) == -1) {
                this.products[i1].foods[index].is_featured = 0
              }
            }
          }
          if(this.cartPros.length == 0){
            this.isCart = false
          }
        },
        many(i,i1,index){
          this.addP(i1,index);
          // this.cartPros[i].number++;
          // this.total++;
          // this.sump += this.cartPros[i].price ;
        },
        clear(){
            this.cartPros = [];
            this.total = 0;
            for (let a in this.products){
              for (let b in this.products[a].foods){
                this.products[a].foods[b].is_featured = 0
                this.sump = 0
                this.isCart = false
              }
            }
        },
        showCart(){
            if(this.total <= 0){
              this.isCart = false
            }else {
              this.isCart=!this.isCart
            }
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451811_twm1c54idpd.css";
  .wai{
    position: relative;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
  }
  .zuo{
    width: 25%;
    float: left;
    box-sizing: border-box;
    background: white;
    overflow: auto;
    height: 24.2rem;
  }
  .zuo span{
    padding: .5rem;
    background: white;
    display: inline-block;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    width: 100%;
    box-sizing: border-box;
  }
  .you{
    width: 75%;
    float: right;
    box-sizing: border-box;
    overflow: auto;
    height: 24.2rem;
  }
  .you .cardone{
    width: 100%;
    background: white;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    position: relative;
    padding: .5rem;
    box-sizing: border-box;
    overflow: auto;
  }
  .cardone img{
    width: 3rem;
    margin: .3rem;
  }
.ctitle{
  margin-left: 3.5rem;
  margin-top: -3.5rem;
}
.sms{
  margin-left: 3.6rem;
  margin-top: -.1rem;
  font-size: .6rem;
  color: #999;
}
.csf{
  font-size: .65rem;
  margin-left: 3.5rem;
}
.priceone{
  font-size: .9rem;
  color: orangered;
  margin-left: 3.5rem;
}
  .bti h3{
    display: inline-block;
    margin: .5rem;
  }
  .bti span{
    font-size: .6rem;
  }
  .pres{
    /*margin-left: 9rem;*/
    /*margin-top: -1rem;*/
    position: absolute;
    right: .5rem;
    bottom: 0;
  }
  .pres span{
    font-size: 1.3rem;
  }
  .icon-jian,
  .icon-jia{
    color: #3190e8;
  }
  .foot{
    height: 2.5rem;
    background: #333;
    position: fixed;
    z-index: 9;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    box-sizing: border-box;
  }
  .foot>div{
    position: relative;
  }
  .cart{
    width: 2rem;
    height: 2rem;
    background: #3190e8;
    position: absolute;
    left: 1rem;
    top: -0.6rem;
    text-align: center;
    border-radius: 50%;
    border: 0.2rem solid #333;
    line-height: 2rem;
  }
  .icon-gouwuche{
    font-size: 1.5rem;
  }
  .cir{
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    background: orangered;
    border-radius: 50%;
    left: 2.6rem;
    top: -0.8rem;
    font-size: 0.6rem;
  }
  .allp{
    position: absolute;
    left: 3.8rem;
  }
  .sprice{
    font-size: 0.6rem;
  }
  .sbtn{
    position: absolute;
    right: 0;
    color: white;
    line-height: 2.55rem;
    width: 8rem;
    box-sizing: border-box;
    background: #4cd964;
    border: 0;
    outline: none;
  }
  .qbtn{
    position: absolute;
    right: 0;
    background: #535356;
    border: 0;
    outline: none;
    color: white;
    line-height: 2.55rem;
    box-sizing: border-box;
    width: 8rem;
  }
  .active {
    border-left: .15rem solid #1e82d2;
  }
  .sxq{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: white;
    z-index: 9;
  }
  .shopn{
    background: #3190e8;
    padding: 0 .5rem;
  }
  .shopn span{
    font-size: 1.5rem;
    color: white;
  }
  .shopn h3{
    margin-left: 30%;
    color: white;
  }
  .sxq img{
    width: 100%;
    margin: 0;
  }
  .shopjs{
    padding: 0 .5rem;
  }
  .shopjs h2{
    margin-top: -.5rem;
  }
  .pfx .f,
  .ysf .p{
    color: orangered;
  }
  .cart-products{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 8;
  }
  .cart-products>div{
    position: fixed;
    bottom: 2.5rem;
    left: 0;
    right: 0;
  }
  .ding{
    padding: .4rem .7rem;
    background: #eceff1;
  }
  .ding span{
    font-size: .9rem;
  }
  .ding span:nth-child(2){
    float: right;
  }
  .ashop{
    padding: .4rem .7rem;
    background: white;
    position: relative;
  }
  .ashop>span:nth-child(2){
    position: absolute;
    left: 11rem;
    color: orangered;
  }
  .del{
    position: absolute;
    right: 1rem;
    top: .45rem;
  }
  .del>span{
    font-size: 1rem;
  }
</style>
