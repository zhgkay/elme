<template>
  <div class="newaddress">
    <div class="header_1">
      <div class="title_wode1">
        <router-link :to="{path:'/edit'}">
          <i class="icon-mjiantou-copy iconfont ii"></i>
        </router-link>
        <span>新增地址</span>
      </div>
    </div>
    <section>
      <from>
        <section class="padd">
          <div class="input_new">
            <input type="text" :style="name_style" placeholder="请填写你的姓名" v-model="us_zhm" @input="inp_1">
            <p v-if="name_z">请填写你的姓名</p>
          </div>
          <router-link :to="{path: '/Addaddress'}" class="input_new">
            <input type="text" placeholder="小区/写字楼/学校等" @input="inp_2" v-model="cityTitle">

          </router-link>
          <div class="input_new">
            <input type="text" placeholder="请填写详细的地址" :style="name_style1" v-model="us_zhm1" @input="inp_2">
            <p v-if="name_z1">{{address}}</p>
          </div>
          <div class="input_new">
            <input type="text" placeholder="请填写能联系你的手机号" :style="name_style2" v-model="us_zhm2" @input="inp_3">
            <p v-if="name_z2">{{phone}}</p>
          </div>
          <div class="input_new">
            <input type="text" placeholder="备用联系电话（徐填）" :style="name_style3" v-model="us_zhm3" @input="inp_4"></div>
          <p v-if="name_z3">请输入正确的手机号</p>
        </section>
        <section class="xingzeng">
          <button @click="newaddress">新增地址</button>
        </section>

      </from>

    </section>
  </div>
</template>

<script>
  export default {
    name: "E_newaddress_zhm",
    data() {
      return {
        // 设置p标签默认隐藏
        name_z: false,
        name_z1: false,
        name_z2: false,
        name_z3: false,
        // 定义个空对象用来设置样式
        name_style: {},
        name_style1: {},
        name_style2: {},
        name_style3: {},
        //双向绑定的空字符串
        us_zhm: "",//填写姓名
        us_zhm2: "",//填写手机号
        phone: "",
        cityTitle: '',
        newArr:[],

      }
    },
    methods: {
      inp_1() {
        if (this.us_zhm.length == 0) {
          this.name_z = true;
          this.name_style = {
            borderColor: "red"
          }
        } else {
          this.name_z = false;
          this.name_style = {}
        }
      },
      inp_2() {
        if (this.us_zhm1.length == 0) {
          this.address = "请填写详细的送餐地址"
          this.name_z1 = true;
          this.name_style1 = {
            borderColor: "red"
          }
        } else if (this.us_zhm1.length == 1 || this.us_zhm1.length == 2) {
          this.address = "送餐地址太短，不能识别"
          this.name_z1 = true;
          this.name_style1 = {
            borderColor: "red"
          }
        } else {
          this.name_z1 = false;
          this.name_style1 = {}
        }
      },
      inp_3() {
        if (this.us_zhm2.length == 0) {
          this.phone = "手机号不能为空"
          this.name_z2 = true;
          this.name_style2 = {
            borderColor: "red"
          }
        } else if (this.us_zhm2.length == 1 || this.us_zhm2.length == 2) {
          this.phone = "请输入正确的手机号"
          this.name_z2 = true;
          this.name_style2 = {
            borderColor: "red"
          }
        } else if (!(/^1[3456789]\d{9}$/.test(this.sjh_l_))
        ) {
          this.name_z2 = false;
          this.name_style2 = {}
        }
      },
      inp_4() {
        if (this.us_zhm2.length == 0) {
          this.name_z3 = true;
          this.name_style3 = {
            borderColor: "red"
          }
        }
      },
      newaddress() {
        let addres = {name: this.us_zhm, phone: this.us_zhm2};
        if (!this.storage.get("name")) {
          this.newArr.push(addres)
        } else {
          this.newArr=this.storage.get("name");
          this.newArr.push(addres)
        }
        this.storage.set("name", this.newArr)
      }
    },

    created() {
      this.cityTitle = this.$route.query.title;
      let userinfo = this.storage.get("userinfo");
      let cityinfo = this.storage.get("cityinfo");
      this.userId=userinfo.user_id;
      this.latitude=cityinfo.latitude;
      this.longitude=cityinfo.longitude;


      console.log(this.userId);
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

  .padd {
    background: #fff;
    padding-top: .4rem;
  }

  .input_new {
    padding-bottom: .4rem;
    margin-top: .2rem;
  }

  .input_new input {
    display: block;
    width: 15rem;
    font-size: .6rem;
    margin: 0 auto;
    padding: .3rem;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 3px;
  }

  .xingzeng button {
    width: 84%;
    font-size: .6rem;
    color: #fff;
    line-height: 1.6rem;
    /*background: none;*/
    font-weight: 700;
    opacity: .6;
    background-color: rgb(76, 217, 100);
    border: none;
    outline: none;
    margin-left: 1.5rem;
    border-radius: .2rem;
  }

  p {
    font-size: .4rem;
    color: #ea3106;
    padding-left: 1.4rem;
    margin-top: .2rem;
  }

</style>
