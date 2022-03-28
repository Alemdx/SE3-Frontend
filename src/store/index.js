// import { createStore } from 'vuex'
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
// import test from './modules/test'
import auth from './modules/auth';
export default new Vuex.Store({
  modules: {
    auth
  }
})
