import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/";
import store from "./store/";
import "./registerServiceWorker";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "font-awesome/css/font-awesome.css";
import "echarts/dist/echarts-en";
import VueMoment from "vue-moment";
import VeeValidate from "vee-validate";

Vue.use(VueMoment);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
