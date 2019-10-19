<template>
  <div class="edit">
    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/me'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>编辑地址</span>
        <span class="bj" @click="show=!show" v-text="show?'编辑':'完成'">{{show}}</span>
      </div>

    </div>
    <ul class="addlist" v-for="(v,i) in name" :key="i">
      <li>
        <p>{{v.name}}</p>
        <p>{{v.phone}}</p>
        <van-icon name="cross" class="icon" v-if="show" @click="ddd(i)"/>
      </li>
    </ul>
    <router-link :to="{path:'/newaddress'}">
      <div class="new_style">
        <span>新增地址</span>
        <span><i class="icon-arrow-right iconfont"></i></span>
      </div>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: "E_edit_address_zhm",
    data() {
      return {
        show: true,
        name:[],
      }
    },
    methods: {
      ddd(key) {
        this.name.splice(name[key],1)
        this.storage.set("name", this.name)
      }
    },

      created(){
        this.name=this.storage.get("name");
        // if (!this.name) {
        //   this.ccc = false
        // } else {
        //   this.ccc = true
        // }
      }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_imis59llh0q.css";

  .iconfont {
    font-size: .77rem;
  }

  .translate {
    width: 100%;
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
    color: #fff;
  }

  .title_wode1 {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    padding-top: .3rem;

  }

  .bj {
    float: right;
    margin-right: .4rem;
  }

  .new_style {
    margin-top: .4rem;
    background: #fff;
    padding: .2rem .4rem;
    border-top: 1px solid #d9d9d9;
    display: flex;
    justify-content: space-between;
  }

  .new_style span {
    display: block;
    font-size: .7rem;
    color: #333;
    line-height: 1.4rem;
  }
  .addlist {
    width: 100%;
    margin-top: .4rem;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
  }

  .addlist li {
    background: #fff8c3;
    padding: .5rem;
    position: relative;
  }

  .addlist p {
    line-height: .9rem;
    font-size: .75rem;
    color: #333;
  }
  .icon {
    font-size: .8rem;
    color: #999;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }


</style>
