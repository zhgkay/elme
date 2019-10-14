<template>
  <ul>
    <!--评分-->
    <li class="res">
        <div class="zuo">
            <h1>{{res.food_score.toFixed(1)}}</h1>
          <h3>综合评价</h3>
          <div class="bi">高于周边商家{{Number(res.compare_rating*100).toFixed(1)}}%</div>
        </div>
      <div class="you">
        <div class="youf">服务态度<van-rate v-model="res.overall_score" :size="10" readonly /> <span class="ff">{{res.overall_score.toFixed(1)}}</span></div>
        <div class="youf">菜品评价<van-rate v-model="res.service_score" :size="10" readonly /> <span class="ff">{{res.service_score.toFixed(1)}}</span></div>
        <div class="youf">送达时间 <span class="min">分钟</span></div>
      </div>
    </li>
    <!--评论分类-->
    <li class="cls">
        <span @click="bs(v.name)" :class="{cor:isShow==v.name?true:false}" class="bq" v-for="(v,i) in cls" :key="i">{{v.name}}({{v.count}})</span>
    </li>
    <!--具体评论-->
    <li class="pl">
        <div class="dp" v-for="(v,i) in pj" :key="i">
          <img class="user" src="//elm.cangdu.org/img/default.jpg" alt="">
          <span class="username">{{v.username}}</span>
          <div class="xing">
            <van-rate v-model="v.rating_star" :size="10" readonly /><span>{{v.time_spent_desc}}</span>
          </div>
          <span class="tim">{{v.rated_at}}</span>
          <div class="chiimg">
            <img class="chi" src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg" alt="">
            <div class="biaoqian">
              <span class="biao" v-for="(n,i) in v.item_ratings" :key="i">
                {{n.food_name}}
              </span>
            </div>
          </div>
        </div>
    </li>
  </ul>
</template>

<script>
  import Vue from 'vue';
  import { Rate } from 'vant';

  Vue.use(Rate);
    export default {
        name: "Pingjia_gzh",
      data(){
          return{
            id:'',
            res:{},
            cls:[],
            isShow:'全部',
            pj:[],
          }
      },
      created(){
          this.id = this.$store.state.dataID;
        console.log(this.id);
        this.Myhttp.get('/ugc/v2/restaurants/'+ this.id +'/ratings/scores',data=>{
          this.res = data;
          // console.log(this.res);
        })
        this.Myhttp.get('/ugc/v2/restaurants/'+ this.id +'/ratings/tags',data=>{
          this.cls = data;
          // console.log(this.cls);
        })
        this.Myhttp.get('/ugc/v2/restaurants/'+ this.id +'/ratings/?offset=0&limit=10',data=>{
          this.pj = data;
          console.log(this.pj);
        })
      },
      methods:{
          bs(name){
            this.isShow = name;
            console.log(this.isShow);
          }
      }
    }
</script>

<style scoped>
  .res{
    padding: 0.5rem;
    overflow: hidden;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    margin-bottom: 0.8rem;
  }
  .zuo{
    width: 40%;
    text-align: center;
    float: left;
  }
  .you{
    padding: 0 0.2rem;
    width: 60%;
    float: left;
    box-sizing: border-box;
  }
  h1{
    color: orangered;
  }
  .bi{
    color: #999;
  }
  .min{
    font-size: 0.1rem;
    color: #999;
  }
  .ff{
    color: orangered;
    margin-left: 0.4rem;
  }
  .youf{
    margin-top: 0.15rem;
  }
  .cls{
    padding: 0.2rem;
    border-top: 1px solid rgba(0,0,0,0.3);
    border-bottom: 1px solid rgba(0,0,0,0.3);
  }
  .bq{
    display: inline-block;
    padding: 0.3rem 0.5rem;
    background: #ebf5ff;
    margin-left: 0.3rem;
    margin-top: 0.3rem;
    border-radius: 5px;
  }
  .bq:nth-child(3){
    background: #f5f5f5;
    color: #aaa;
  }
  .cor{
    background: #3190e8!important;
    color: white!important;
  }
  .dp{
    height: 5rem;
    padding: 0.5rem;
    border-top: 1px solid rgba(0,0,0,0.3);
    position: relative;
  }
  .user{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }
  .username{
    position: absolute;
    top: 0.3rem;
    left: 3rem;
  }
  .xing{
    position: absolute;
    top: 1.2rem;
    left: 3rem;
  }
  .tim{
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
    color: #999;
  }
  .chiimg{
    position: absolute;
    top: 2.3rem;
    left: 3rem;
  }
  .chi{
    width: 2rem;
    height: 2rem;
  }
  .biao{
    display: inline-block;
    white-space:nowrap;
    width:2rem;
    overflow:hidden;
    border:1px solid rgba(0,0,0,0.3);
  }
  .biaoqian{
    position: absolute;
    top: 2rem;
    left: 0;
  }
  .res,.cls,.dp{
    background: white;
  }
</style>
