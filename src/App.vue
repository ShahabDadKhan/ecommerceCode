<template>
  <v-app>
    <v-main>
      <the-header />
      <!-- <welcome-screen /> -->
      <explore-categories />
      <new-arrival />
      <the-collections />
      <the-trending />
      <the-shop />
      <enter-the-world />
      <!-- <carasolue-practice class="my-16" /> -->
      <!-- <carasolue-practice-2 /> -->
      <the-footer />
    </v-main>
  </v-app>
</template>

<script>
// import CarasoluePractice from "./View/CarasoluePractice.vue";
// import CarasoluePractice2 from "./View/CarasoluePractice2.vue";
import EnterTheWorld from "./View/EnterTheWorld.vue";
import ExploreCategories from "./View/ExploreCategories.vue";
import NewArrival from "./View/NewArrival.vue";
import TheCollections from "./View/TheCollections.vue";
import TheFooter from "./View/TheFooter.vue";
import TheHeader from "./View/TheHeader.vue";
import TheShop from "./View/TheShop.vue";
import TheTrending from "./View/TheTrending.vue";
// import WelcomeScreen from "./View/WelcomeScreen.vue";

export default {
  name: "App",

  components: {
    // WelcomeScreen,
    ExploreCategories,
    NewArrival,
    TheCollections,
    TheTrending,
    TheShop,
    EnterTheWorld,
    TheFooter,
    TheHeader,
    // CarasoluePractice,
    // CarasoluePractice2,
  },
};
</script>

<style lang="scss">
a {
  text-decoration: none;
  list-style: none;
  color: $white !important;
}
</style>
