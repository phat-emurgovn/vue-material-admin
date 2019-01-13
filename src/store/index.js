import Vue from "vue";
import Vuex from "vuex";
import profile from "./modules/profile";
import order from "./modules/order";
import user from "./modules/user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    profile,
    order,
    user
  },
  state: {},
  mutations: {},
  actions: {}
});

export default store;
