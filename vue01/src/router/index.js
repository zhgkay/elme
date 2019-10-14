import Vue from 'vue'
import Router from 'vue-router'
import city from "../components/E_city_zk"
import Index from "../components/E_index_zk"
import Shops from "../components/Shops_gzh"
import Address from "../components/Address"
import Search from "../components/SearchShop"
import Food from "../components/Food_zk"
import E_me_zhm from '../../../../git1/vue01/src/components/E_me_zhm'
import E_me_translate_zhm from '../../../../git1/vue01/src/components/E_me_translate_zhm'


Vue.use(Router)
import Down from "../../../../git1/vue01/src/components/E_me_translate_zhm"
import Me from "../../../../git1/vue01/src/components/E_me_zhm"
import E_password_zhm from "../../../../git1/vue01/src/components/E_password_zhm"
import password from "../../../../git1/vue01/src/components/E_password_zhm"
import E_Eeset_zhm from "../../../../git1/vue01/src/components/E_Reset_zhm"
import E_Mybalance from "../../../../git1/vue01/src/components/E_Mybalance_zhm"
import E_me_Discount_zhm from "../../../../git1/vue01/src/components/E_me_Discount_zhm"
import server from "../../../../git1/vue01/src/components/E_me_server_zhm"
import Question from "../../../../git1/vue01/src/components/E_Question_zhm"
import mypoint from "../../../../git1/vue01/src/components/E_My points_zhm"
import balance from "../../../../git1/vue01/src/components/E_balance_zhm"
import integral from "../../../../git1/vue01/src/components/E_integral_zhm"
import AcInformation from "../../../../git1/vue01/src/components/E_AcInformation_zhm"
import vip from "../../../../git1/vue01/src/components/E_VIP_zhm"
import Membership_notes from "../../../../git1/vue01/src/components/E_Membership_notes_zhm"
import onlinepayment from "../../../../git1/vue01/src/components/E_onlinepayment_zhm"
import exchange from "../../../../git1/vue01/src/components/E_exchange_zhm"
import Purchase_record from "../../../../git1/vue01/src/components/E_Purchase_record_zhm"
import again from "../../../../git1/vue01/src/components/E_again_zhm"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', component: E_me_zhm, E_me_translate_zhm, E_password_zhm
    },
    {path: '/me', component: Me},
    {path: '/down', component: Down,},
    {path: '/password', component: password},
    {path: '/order'},
    {path: '/Reset', component: E_Eeset_zhm},
    {path: '/Mybalance', component: E_Mybalance},
    {path: '/discount', component: E_me_Discount_zhm},
    {path: '/server', component: server},
    {path: '/question', component: Question},
    {path: '/mypoint', component: mypoint},
    {path: '/balance', component: balance},
    {path: '/integral', component: integral},
    {path: '/Information', component: AcInformation},
    {path: '/vip', component: vip},
    {path: '/Membership', component: Membership_notes},
    {path: '/online', component: onlinepayment},
    {path: '/exchange', component: exchange},
    {path: '/Purchase_record', component: Purchase_record},
    {path: '/again', component: again},
    {path: '/', component: city},//选择城市路由
    {
      path: "/index", component: Index, children: [//首页index展示页面路由
        {path: "", redirect: "shops"},
        {path: 'shops', component: Shops}//商品列表
      ]
    },
    {path: '/city', component: city},//选择城市的路由
    {path: '/address', component: Address},//搜索地址的路由
    {path: '/search', component: Search},
    {
      path: '/food', component: Food, children: [//商品分类组件
        {path: '', redirect: "shops"},
        {path: 'shops', component: Shops}//商品列表
      ]
    }
  ]
})
