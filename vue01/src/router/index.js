import Vue from 'vue'
import Router from 'vue-router'
import city from "../components/E_city_zk"
import Index from "../components/E_index_zk"
import Shops from "../components/Shops_gzh"
import Address from "../components/Address"
import Search from "../components/SearchShop"
import Food from "../components/Food_zk"
import E_me_zhm from '../components/E_me_zhm'
import E_me_translate_zhm from '../components/E_me_translate_zhm'
import Shop from '../components/Shop_over_gzh'
import Pingjia from '../components/Pingjia_gzh'
import Shopxx from '../components/Shop_xx_gzh'
import Foodaq from '../components/Foodaq_gzh'
import Corder from '../components/Con_order_gzh'
import business from '../components/E_business_zhm'
import Addaddress from "../components/AddAddress"
import Address_gzh from '../components/Address_gzh'
import Ordermarks from '../components/Ordermarks_gzh'
import Bill from '../components/Bill_gzh'
import Plusaddress from '../components/Plusaddress_gzh'

Vue.use(Router)
import Down from "../components/E_me_translate_zhm"
import Me from "../components/E_me_zhm"
import E_password_zhm from "../components/E_password_zhm"
import password from "../components/E_password_zhm"
import E_Eeset_zhm from "../components/E_Reset_zhm"
import E_Mybalance from "../components/E_Mybalance_zhm"
import E_me_Discount_zhm from "../components/E_me_Discount_zhm"
import server from "../components/E_me_server_zhm"
import Question from "../components/E_Question_zhm"
import mypoint from "../components/EMypoints_zhm"
import balance from "../components/E_balance_zhm"
import integral from "../components/E_integral_zhm"
import AcInformation from "../components/E_AcInformation_zhm"
import vip from "../components/E_VIP_zhm"
import Membership_notes from "../components/E_Membership_notes_zhm"
import onlinepayment from "../components/E_onlinepayment_zhm"
import exchange from "../components/E_exchange_zhm"
import Purchase_record from "../components/E_Purchase_record_zhm"
import again from "../components/E_again_zhm"
import redintegral from "../components/E_redintegral_zhm"
import Historical_record from "../components/E_Historical_record_zhm"
import red_envelope from "../components/Eredenvelope_zhm"
import Recommend from "../components/E_Recommend_zhm"
import myorder from "../components/MyOrder_zhm"
import modify from "../components/E_modify_username_zhm"
import edit_address from "../components/E_edit_address_zhm"
import newaddress from "../components/E_newaddress_zhm"
import youhui from "../components/myyouhui"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/down', component: E_me_translate_zhm},//下载路由
    {path: '/login', component: E_password_zhm},//密码登录路由
    {path: '/me', component: Me},//我的主页面路由
    {path: '/down', component: Down,},//
    {path: '/password', component: password},
    {path: '/order'},//订单路由
    {path: '/Reset', component: E_Eeset_zhm},//重置密码路由
    {path: '/Mybalance', component: E_Mybalance},//我的余额路由
    {path: '/discount', component: E_me_Discount_zhm},//我的优惠路由
    {path: '/server', component: server},//服务中心路由
    {path: '/question', component: Question},//服务中心下一级路由
    {path: '/mypoint', component: mypoint},//我的积分路由
    {path: '/balance', component: balance},//余额说明路由
    {path: '/integral', component: integral},//积分说明路由
    {path: '/Information', component: AcInformation},//账户信息登录后的路由
    {path: '/vip', component: vip},//饿了吗会员路由
    {path: '/Membership', component: Membership_notes},//会员说明路由
    {path: '/online', component: onlinepayment},//在线支付路由
    {path: '/exchange', component: exchange},//兑换会员路由
    {path: '/Purchase_record', component: Purchase_record},//购买记录
    {path: '/again', component: again},//积分商城
    {path: '/shop', component: Shop},
    {path: '/pingjia', component: Pingjia},
    {path: '/shopxx', component: Shopxx},
    {path: '/Addaddress', component: Addaddress},
    {path: '/foodaq', component: Foodaq},
    {path: '/corder', component: Corder},//确认订单
    {path: '/redintegral', component: redintegral},//红包说明
    {path: '/Historical', component: Historical_record},//历史记录
    {path: '/red_envelope', component: red_envelope},//兑换红包路由
    {path: '/Recommend', component: Recommend},//推荐有奖
    {path: '/business', component: business},//商家代金券
    {path: '/myorder', component: myorder},//我的订单
    {path: '/modify', component: modify},//修改用户名
    {path: '/edit', component: edit_address},//编辑地址
    {path: '/newaddress', component: newaddress},//新增地址
    {path: '/youhui', component: youhui},//我的优惠
    {path: '/corder',name:'corde', component: Corder},
    {path: '/address_gzh', component: Address_gzh},
    {path: '/ordermarks', component: Ordermarks},
    {path: '/bill', component: Bill},
    {path: '/pulsaddress', component: Plusaddress},
    {path: '/', component: city},//选择城市路由
    {
      path: "/index", component: Index, children:
        [//首页index展示页面路由
          {path: "", redirect: "shops"},
          {path: 'shops', component: Shops}//商品列表
        ]
    },
    {path: '/city', component: city},//选择城市的路由
    {path: '/address', component: Address},//搜索地址的路由
    {path: '/search', component: Search},
    {
      path: '/food', component: Food, children:
        [//商品分类组件
          {path: '', redirect: "shops"},
          {path: 'shops', component: Shops}//商品列表
        ]
    },
    {path: '*', component: city, redirect: 'city'}
  ]
})
