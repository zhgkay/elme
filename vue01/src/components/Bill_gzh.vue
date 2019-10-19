<template>
    <ul>
      <!--顶部-->
      <li class="top">
        <router-link class="back" :to="{path:'/corder'}"><i class="icon-Group- iconfont"></i></router-link>
        <h4>选择发票抬头</h4>
      </li>
      <!--选择是否需要发票-->
      <li class="fp">
        <span>不需要开发票</span>
        <span @click="show=!show" class="icon-radio-fill iconfont" :class="{cor:show?true:false}"></span>
      </li>
      <!--提交是否发票-->
      <li class="tfp">
        <button @click="sendBill">确定</button>
      </li>
    </ul>
</template>
<script>
    export default {
        name: "Bill_gzh",
      data(){
          return{
            show:true
          }
      },
      methods:{
          sendBill(){
            this.$router.push({path:'/corder'})
          }
      }
    }
</script>

<style scoped>
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
  .fp{
    padding: .7rem;
    background: white;
    margin: .8rem 0;
  }
  .fp span:nth-child(2){
    float: right;
    line-height: 1.6rem;
    margin-right: .5rem;
    font-size: 1rem;
    color: #999;
  }
  .cor{
    color: #4cd964!important;
  }
  .tfp{
    padding: .7rem;
  }
  .tfp button{
    width: 100%;
    outline: none;
    background: #4cd964;
    border:0;
    padding: .3rem 0;
    border-radius: 5px;
    color: white;
  }
</style>
