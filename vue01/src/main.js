// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Myhttp from "./Axios/http"
import MyApi from "./Axios/ports"
import Vuex from "vuex"
import Vant from 'vant';
import 'vant/lib/index.css';
import {DropdownMenu, DropdownItem} from 'vant';
import './libs/rem'
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Vuex);
Vue.use(Vant);
const store = new Vuex.Store({
  state: {
    name: "",
    dataID: ''
  },
  mutations: {
    getName(state, name) {
      state.name = name;
    },
    setID(state,id){
      state.dataID = id;
    }
  }
});

Vue.config.productionTip = false
Vue.prototype.MyApi = MyApi;
Vue.prototype.Myhttp = Myhttp;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
