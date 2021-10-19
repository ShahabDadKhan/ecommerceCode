import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import axios from "axios";
// import VueAwesomeSwiper from "vue-awesome-swiper";

// import style
// import "swiper/css/swiper.css";
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  vuetify,
  // VueAwesomeSwiper,
  render: (h) => h(App),
}).$mount("#app");
