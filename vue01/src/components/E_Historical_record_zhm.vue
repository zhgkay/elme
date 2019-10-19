<template>
    <div class="Historical_record">
      <div class="header_1">
        <div class="title_wode1">
          <router-link :to="{path:'/discount'}">
            <i class="icon-mjiantou-copy iconfont ii"></i>
          </router-link>
          <span>历史记录</span>
        </div>
      </div>
      <div v-for="(c,i) in hongbao" :key="i">
        <div class="card">
          <div class="left">
            <p class="price">￥<span class="big">{{Arr[i][0]}}</span>.{{Arr[i][1]}}</p>
            <p class="condition">{{c.description_map.sum_condition}}</p>
          </div>
          <div class="right">
            <p class="share">{{c.name}}</p>
            <p>{{c.description_map.validity_periods}}</p>
            <p>{{c.description_map.phone}}</p>
          </div>
          <div class="time">
            <i class="icon-yiguoqi iconfont yiguoqi"></i>
          </div>
        </div>
      </div>
      <div class="limit">{{limit}}</div>



      <!--<ul>-->
        <!--<li >-->
          <!--<section class="list_item">-->
            <!--<div class="class_left">-->
              <!--<span class="span1">￥</span>-->
              <!--<span class="span2">5</span>-->
              <!--<span class="span3">.</span>-->
              <!--<span class="span4">0</span>-->
              <!--<p class="p1">满20元可用</p>-->
            <!--</div>-->
            <!--<div class="red_middle">-->
              <!--<h4>普通红包</h4>-->
              <!--<p class="p2">2017-05-23到期</p>-->
              <!--<p class="p3">限收货手机号为 13681711254</p>-->
            <!--</div>-->
            <!--<div class="red_right">-->
            <!--</div>-->
          <!--</section>-->
        <!--</li>-->
      <!--</ul>-->

    </div>
</template>

<script>
    export default {
        name: "E_Historical_record_zhm",
      data() {
        return {
          //组件
          active: 0,
          //红包
          hongbao: [],
          //新建个数组用来存储0，0，5
          amount: [],
          Arr: [],
          limit: "",
        }
      },
      created() {
        this.Myhttp.get("/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0", data => {
          for (let i = 0; i < data.length; i++) {
          // console.log(data[i]);
            this.hongbao.push(data[i]);
            this.amount.push(this.hongbao[i].amount.toFixed(1));
          }
          console.log(this.hongbao);
          for (let j = 0; j < this.amount.length; j++) {
            this.Arr.push(this.amount[j].split("."));
            // console.log(this.amount[j]);
          }
          this.limit = this.hongbao[2].limit_map.restaurant_flavor_ids;
        })

      }

    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_ua3f8b9qf8.css";

  .Historical_record {
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

  .title_wode1 {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    padding-top: .3rem;

  }

  li {
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAAAXNSR0IArs4c6QAAAHtJREFUKBVjvHv37n8GKgImKpoFNmoYGcjIyAgK6+VA2o6FhUWInZ1dlomJKQDIP40cbIzERApQ01+g5jAFBYV1yJpB7P///zPev39/IpDOBfGJDcNGbIaBDAC5XFFRsQBIHwDxCRoIVPidmZl5CkgxLgBU8w/owl6QPABvmyDiDQUF7gAAAABJRU5ErkJggg==) repeat-x;
    background-size: .5rem .2rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
  }

  .list_item {
    display: flex;
    justify-content: space-between;
    padding: 1rem .5rem .8rem
  }

  .class_left {
    /*font-size: 0;*/
    border-right: .025rem dotted #ccc;
    flex: 1;
  }

  .span1 {
    font-size: .75rem;
    color: #ccc;
    font-weight: 700;
  }

  .span2 {
    font-size: 2rem;
    color: #ccc;
  }

  .span3 {
    font-size: .8rem;
    color: #ccc;
    font-weight: 700;
  }

  .span4 {
    font-size: 1rem;
    color: #ccc;
    font-weight: 700;
  }

  .p1 {
    font-size: .4rem;
    color: #999;
  }
  .red_middle {
    flex: 2;
    margin-left: 1.5rem;
  }
  h4 {
    font-size: .7rem;
    color: #666;
    margin-left: -.7rem;
  }
  .p2 {
    list-style-type: disc;
    margin-left: -.7rem;
    font-size: .4rem;
    color: #999;
  }
  .p3{
    list-style-type: disc;
    margin-left: -.7rem;
    font-size: .4rem;
    color: #999;
  }
  .red_right{
    position: relative;
  }
  .yiguoqi{
    color: #ddd;
    font-size: 3rem;
    width: 3rem;
    height: 3rem;
    /*top: .3rem;*/
    right: .2rem;
    position: absolute;
  }
  .card {
    margin-bottom: .5rem;
    border-radius: .3rem;
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAAAXNSR0IArs4c6QAAAHtJREFUKBVjvHv37n8GKgImKpoFNmoYGcjIyAgK6+VA2o6FhUWInZ1dlomJKQDIP40cbIzERApQ01+g5jAFBYV1yJpB7P///zPev39/IpDOBfGJDcNGbIaBDAC5XFFRsQBIHwDxCRoIVPidmZl5CkgxLgBU8w/owl6QPABvmyDiDQUF7gAAAABJRU5ErkJggg==) repeat-x;
    background-size: .6rem .2rem;
    display: flex;
    justify-content: space-between;
    padding: 1.2rem .5rem 1.2rem;
  }

  .left {
    border-right: .025rem dotted #ccc;
    flex: 1;
  }

  .price {
    font-size: .85rem;
    color: #ccc;
    font-weight: 700;
  }

  .big {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .condition {
    font-size: .4rem;
    color: #999;
  }

  .right {
    flex: 2;
    margin-left: 1.5rem;
    list-style-type: disc;
    font-size: .4rem;
    color: #999;

  }

  .share {
    font-size: .7rem;
    color: #666;
    line-height: 1.2rem;
  }

  .time {
    font-size: .8rem;
    color: #ff5340;
  }

  .limit {
    background-color: #f9f9f9;
    padding: .4rem;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
    list-style-type: disc;
    font-size: .5rem;
    color: #999;
    margin-top: -0.6rem;
  }

</style>
