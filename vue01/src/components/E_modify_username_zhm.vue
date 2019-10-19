<template>
  <div class="modify">
    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/me'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>修改用户名</span>
      </div>
    </div>
    <div class="xx">
      <input type="text" placeholder="输入用户名" :style="red_k_l" v-model="username_l" @input="jd_l">
      <div>
        <p class="font" :style="red_z_l">用户长度在5到24位之间(5-24之间)</p>
      </div>
      <button class="ok" :style="color_l" @click="sure">确认修改</button>

    </div>
  </div>
</template>

<script>
  export default {
    name: "E_modify_username_zhm",
    data() {
      return {
        username_l: "",
        red_k_l: {},
        red_z_l: {},
        color_l: {},
      }
    },
    methods: {
      jd_l() {
        if (this.username_l.length < 5 || this.username_l.length > 24) {
            this.red_k_l = {
              borderColor: "red",
            };
            this.red_z_l = {
              color: "red"
            }
            this.color_l = {}
          } else {
            this.red_k_l = {};
            this.red_z_l = {};
            this.color_l = {color: "#fff"}
        }
      },
      sure() {
        if (this.username_l.length > 5 ||this.username_l.length < 24) {
          this.jd_l();
          //修改用户名
          let datas = this.storage.get("userinfo");
          datas.username = this.username_l
          this.storage.set("userinfo", datas)
          this.$router.push({path: '/Information'});
        }


      }
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451861_t6zrg2c8um.css";

  .Information {
    width: 100%;
    height: 735px;
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

  .xx {
    padding-top: .4rem;
    width: 95%;
    margin-left: .5rem;
  }

  .font {
    width: 100%;
    font-size: .4rem;
    color: #666;
    padding: .4rem 0 1rem;
  }

  input {
    border-color: #ea3106;
    background: none;
    /*width: 15.2rem;*/
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: .2rem .1rem;
    line-height: 1.2rem;
    font-size: .7rem;
    display: block;
    width: 95%;
  }

  .ok {
    width: 17.2rem;
    background: #3190e8;
    line-height: 2.3rem;
    font-size: .8rem;
    color: #dddddd;
    margin: .9rem auto;
    text-align: center;
    border: none;
    outline: none;
  }
</style>
