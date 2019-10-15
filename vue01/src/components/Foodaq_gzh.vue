<template>
    <ul>
      <!--食品监督安全公示顶部-->
      <li class="aqtop">
        <router-link :to="{path:'/shopxx'}"><i class="icon-Group- iconfont"></i></router-link>
        <div class="shopx">商家详细</div>

      <!--安全公示-->
      <li class="aq">
        <div class="active">食品安全监督公示</div>
        <div class="jdu">
          <img class="face" src="../assets/123.png" alt="">
          <div class="res">
            <div>监督检查结果: <span class="good">良好</span></div>
            <div class="day">检查日期: <span></span></div>
          </div>
        </div>
      </li>
      <!--工商登记信息-->
      <li class="dj">
        <div class="active">工商登记信息</div>
        <div class="djmsg">
          <div>企业名称</div>
          <div>工商执照注册号</div>
          <div>注册资本</div>
          <div>注册地址</div>
          <div>属地监管所</div>
          <div>法定代表人</div>
          <div>经营范围</div>
        </div>
      </li>
      <!--餐饮许可证-->
      <li class="cy">
        <div class="active">餐饮许可证</div>
        <div class="djmsg">
          <div>营业范围</div>
          <div>许可证有效期</div>
          <div>许可证号</div>
          <div>发证时间</div>
          <div>发证机关</div>
        </div>
      </li>
      <!--许可证书-->
      <li class="zbook">
        <h2>许可证书</h2>
        <div>
          <img src="//elm.cangdu.org/img/default.jpg" alt="">
          <img src="//elm.cangdu.org/img/default.jpg" alt="">
        </div>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "Foodaq_gzh",
    }
</script>

<style scoped>
  .aqtop{
    padding: 0.5rem;
    background:#3190e8 ;
    text-align: center;
    position: relative;
  }
  .shopx{
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;
    color: white;
  }
  .icon-Group-{
    color: white;
    font-size: 1.2rem;
    position: absolute;
    left: 0;
  }
  .active{
    padding: 0.5rem;
    font-size: 0.8rem;
    border-bottom: 1px solid rgba(0,0,0,0.5);
  }
  .aq,.dj,.cy,.zbook{
    margin-top: 0.5rem;
    background: white;
    font-size: 0.6rem;
  }
  .jdu{
    padding: 0.5rem;
    position: relative;
  }
  .face{
    border-radius: 50%;
  }
  .res{
    display: inline-block;
    position: absolute;
    top: 0.7rem;
    left: 3rem;
    color: #666;
  }
  .day{
    margin-top: 0.2rem;
  }
  .good{
    color: lawngreen;
  }
  .djmsg,.zbook{
    padding: 0.5rem;
  }
  .djmsg div{
    margin-top: 1rem;
  }
  .djmsg div:nth-child(1){
    margin-top: 0;
  }
  .zbook div{
    padding: 1rem;
    box-sizing: border-box;
    background: #999;
    text-align: center;
  }
  .zbook div img{
    width: 7rem;
  }
</style>
