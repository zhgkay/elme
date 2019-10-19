<template>
    <ul>
      <!--添加地址顶部-->
      <li class="top">
        <router-link class="back" :to="{path:'/address_gzh'}"><i class="icon-Group- iconfont"></i></router-link>
        <h4>添加地址</h4>
      </li>
      <!--添加地址信息列表-->
      <li class="addmsg">
        <div class="callperson">
          <span>联系人</span>
          <div>
            <input type="text" placeholder="你的名字">
          </div>
        </div>
        <div class="choosesex">
          <span v-for="(v,i) in choose" :key="i"><i @click="choosesex(i)" :class="index==i?'gren':''" class="icon-radio-fill iconfont"></i> {{v}}</span>
        </div>
        <div class="phone">
          <span>联系电话</span>
          <input type="text" placeholder="你的手机号">
          <span class="icon-jia1 iconfont"></span>
        </div>
        <div class="adres">
          <div>
            <span>送餐地址</span>
            <div>
              <input type="text" placeholder="小区/写字楼/学校等">
            </div>
          </div>
          <input type="text" placeholder="详细地址(如门牌号等)">
        </div>
        <div class="tag">
          <span>标签</span>
          <input type="text" placeholder="无/家/学校/公司">
        </div>
      </li>
      <!--提交所添加地址信息-->
      <li class="yes">
        <button @click="yesbtn">确定</button>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "Plusaddress",
      data(){
          return{
            show:true,
            choose:['先生','女士'],
            index:0
          }
      },
      methods:{
          choosesex(i){
            this.index = i
          },
        yesbtn(){
            this.$router.push({
              path:'/address_gzh'
            })
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451811_6e7wvjqxq97.css";
  .top{
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
  .top h4{
    position: absolute;
    top: .3rem;
    left: 38%;
  }
  .addmsg{
    padding: .7rem;
    background: white;
    position: relative;
  }
  .yes{
    padding: .7rem;
  }
  .yes button{
    width: 100%;
    outline: none;
    background: #4cd964;
    border:0;
    padding: .3rem 0;
    border-radius: 5px;
    color: white;
  }
  input{
    outline: none;
    border: 0;
  }
  .callperson div{
    display: inline-block;
    margin-left: 3rem;
    padding: .5rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .choosesex{
    padding: .5rem 0 .5rem 6.2rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .choosesex span{
    font-size: 1rem;
  }
  .icon-radio-fill{
    color: #aeb0af;
    font-size: 1.1rem;
  }
  .phone{
    padding: .5rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .phone input{
    margin-left: 2rem;
    width: 9rem;
  }
  .icon-jia1{
    color: deepskyblue;
  }
  .adres{
    padding: .5rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .adres>div>div{
    display: inline-block;
    margin-left: 2rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding-bottom: .5rem;
  }
  .adres>input{
    margin: .5rem 0 0 6.2rem;
  }
  .tag{
    padding: .5rem 0 0 0;
  }
  .tag>input{
    margin-left: 3.8rem;
  }
  .gren{
    color: #4cd964!important;
  }
</style>
