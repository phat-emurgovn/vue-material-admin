import Vue from "vue";
import Vuex from "vuex";
import profile from "./modules/profile";
import order from "./modules/order";
import user from "./modules/user";
import adminUser from "./modules/adminUser";
import cryptoCurrency from "./modules/cryptoCurrency";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    profile,
    order,
    user,
    adminUser,
    cryptoCurrency
  },
  state: {},
  mutations: {},
  actions: {}
});

export default store;
