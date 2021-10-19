import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        favouriteColor: "#4C4C4C",
        btnColor: "#FFC164",
      },
    },
  },
});
