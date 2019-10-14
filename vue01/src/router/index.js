import Vue from 'vue'
import Router from 'vue-router'
import city from "../components/E_city_zk"
import Index from "../components/E_index_zk"
import Shops from "../components/Shops_gzh"
import Address from "../components/Address"
import Search from "../components/SearchShop"
import Food from "../components/Food_zk"

Vue.use(Router)

export default new Router({
  routes: [
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
