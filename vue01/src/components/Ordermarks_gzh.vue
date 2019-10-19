<template>
    <ul>
      <!--订单备注顶部-->
      <li class="top">
        <router-link class="back" :to="{path:'/corder'}"><i class="icon-Group- iconfont"></i></router-link>
        <h4>订单备注</h4>
      </li>
      <!--快速备注-->
      <li class="ksremarks">
        <div>快速备注</div>
        <div class="ksl mt">
          <span @click="setColor(v)" :class="{bys:la==v?true:false}" v-for="(v,i) in remarks[0]" :key="i">{{v}}</span>
        </div>
        <div class="mt">
          <span @click="cm1(remarks[1][0])" :class="show1?'bys':''">{{remarks[1][0]}}</span>
          <span @click="cm2(remarks[2][0])" :class="show2?'bys':''">{{remarks[2][0]}}</span>
          <span @click="cm3(remarks[3][0])" :class="show3?'bys':''">{{remarks[3][0]}}</span>
          <span @click="cm4(remarks[4][0])" :class="show4?'bys':''">{{remarks[4][0]}}</span>
        </div>
        <div class="ksl mt">
          <span @click="setC(v)" :class="{bys:bing==v?true:false}" v-for="(v,i) in remarks[5]">{{v}}</span>
        </div>
      </li>
      <!--其他备注-->
      <li class="qtremarks">
        <div>其他备注</div>
        <textarea v-model="texts" placeholder="请输入备注内容(可不填)"></textarea>
      </li>
      <!--提交按钮-->
      <li class="tbtn">
        <button @click="sendM">确定</button>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "Ordermarks_gzh",
      data(){
        return{
          id:'',
          remarks:[],
          la:'',
          bing:'',
          c1:'',
          c2:'',
          c3:'',
          c4:'',
          isla:[],
          isbing:[],
          texts:'',
          result:[],
          show1:false,
          show2:false,
          show3:false,
          show4:false
        }
      },
      created(){
          this.id = this.$store.state.dataID;
          this.Myhttp.get('/v1/carts/'+this.id+'/remarks',data=>{
            for (let i in data){
              // console.log(...data[i])
              this.remarks.push(...data[i]);
            }
            console.log(this.remarks);
          })
      },
      methods:{
        setColor(name){
            this.la = name;
            this.isla.push(this.la)
          },
        setC(name){
          this.bing = name;
          this.isbing.push(this.bing)
        },
        cm1(name){
            this.c1 = name;
            console.log(this.c1)
          this.show1 = true;
        },
        cm2(name){
          this.c2 = name;
          console.log(this.c2)
          this.show2 = true;
        },
        cm3(name){
          this.c3 = name;
          console.log(this.c3)
          this.show3 = true;
        },
        cm4(name){
          this.c4 = name;
          console.log(this.c4)
          this.show4 = true;
        },
        sendM(){
          let arr = [this.isla[this.isla.length-1],this.c1,this.c2,this.c3,this.c4,this.isbing[this.isbing.length-1],this.texts];
          let str = arr.join(',');
          this.$router.push({
            name:'corde',
            params:{remark:str}
          })
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
  .ksremarks{
    padding: .5rem;
    margin-top: .7rem;
    background: white;
  }
  .ksremarks div:nth-child(1),
  .qtremarks div:nth-child(1){
    font-size: .8rem;
  }
  .ksl{
    border: 1px solid #3190e8;
    display: inline-block;
    border-radius: 5px;
  }
  .ksremarks span{
    display: inline-block;
    padding: .3rem;
    font-size: .8rem;
  }
  .ksremarks div:nth-child(2) span:nth-child(2),
  .ksremarks div:nth-child(4) span:nth-child(2){
    border-left: 1px solid #3190e8;
  }
  .ksremarks div:nth-child(2) span:nth-child(3){
    border-left: 1px solid #3190e8;
  }
  .ksremarks div:nth-child(3) span{
    border: 1px solid #3190e8;
    border-radius: 5px;
  }
  .mt{
    margin-top: .5rem;
  }
  .bys{
    background: #3190e8;
    color: white;
  }
  .qtremarks{
    margin-top: .7rem;
    padding: .5rem;
    background: white;
  }
  .qtremarks textarea{
    margin-top: .7rem;
    width: 100%;
    height: 8rem;
    resize:none;
    border-radius: 5px;
    background: #f9f9f9;
    border: 1px solid #eee;
    padding: .5rem;
    box-sizing: border-box;
    font-size: .8rem;
  }
  .tbtn{
    padding: 0 .5rem;
  }
  .tbtn button{
    background-color: #4cd964;
    font-size: 1rem;
    display: inline-block;
    box-sizing: border-box;
    color: #fff;
    border-radius: .2rem;
    width: 100%;
    line-height: 2.2rem;
    border: 0;
  }
</style>
