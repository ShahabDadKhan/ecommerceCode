<template>
  <v-container fluid class=" my-16">
    <v-row class="mb-4" align="center" justify="center">
      <v-img
        max-width="65px"
        max-height="12px"
        src="../../assests/decoration.svg"
      ></v-img>

      <h1 class=" mx-3">
        Collections
      </h1>
      <v-img
        max-width="65px"
        max-height="12px"
        src="../../assests/decoration.svg"
      ></v-img>
    </v-row>

    <!-- Trying Vue slider carasoule -->
    <v-row align="center" justify="center">
      <VueSlickCarousel v-bind="settings" ref="carousel" class="carousel">
        <div>
          <v-row class="ma-0">
            <v-col class="pa-0" cols="12" sm="6">
              <v-img
                width="100%"
                height="100%"
                src="../../assests/Collections/Mask Group 9.png"
              >
              </v-img>
            </v-col>
            <v-col class="pa-0" cols="12" sm="6">
              <v-img
                class="align-center justify-center"
                width="100%"
                height="100%"
                src="../../assests/Collections/Mask Group 10.svg"
              >
                <v-row justify="center" class="ma-0">
                  <v-img
                    max-width="150px"
                    height="120px"
                    src="../../assests/Collections/Group 150.svg"
                  ></v-img>
                </v-row>
                <v-row
                  justify="center"
                  class="mx-0 my-10 white--text font-weight-light"
                >
                  <p class="text-center">
                    Make Your every day look more fun and stylish with our new
                    range of everyday casual wear . The range not only assure
                    assure stylish appearance but also promise utmost ease while
                    you tackle the daily tasks.
                  </p>
                </v-row>
                <v-row class="ma-0" justify="center">
                  <v-btn class="btnColor--text mr-3" outlined plain tile
                    >Shop For Men</v-btn
                  >
                  <v-btn class="btnColor--text" outlined plain tile
                    >Shop For Women</v-btn
                  >
                </v-row>
              </v-img>
            </v-col>
          </v-row>
        </div>
        <div>
          <v-row class="ma-0">
            <v-col class="pa-0" cols="12" sm="6">
              <v-img
                width="100%"
                height="100%"
                src="../../assests/Collections/Mask Group 9.png"
              >
              </v-img>
            </v-col>
            <v-col class="pa-0" cols="12" sm="6">
              <v-img
                class="align-center justify-center"
                width="100%"
                height="100%"
                src="../../assests/Collections/Mask Group 10.svg"
              >
                <v-row justify="center" class="ma-0">
                  <v-img
                    max-width="150px"
                    height="120px"
                    src="../../assests/Collections/Group 150.svg"
                  ></v-img>
                </v-row>
                <v-row
                  justify="center"
                  class="mx-0 my-10 white--text font-weight-light"
                >
                  <p class="text-center">
                    Make Your every day look more fun and stylish with our new
                    range of everyday casual wear . The range not only assure
                    assure stylish appearance but also promise utmost ease while
                    you tackle the daily tasks.
                  </p>
                </v-row>
                <v-row class="ma-0" justify="center">
                  <v-btn class="btnColor--text mr-3" outlined plain tile
                    >Shop For Men</v-btn
                  >
                  <v-btn class="btnColor--text" outlined plain tile
                    >Shop For Women</v-btn
                  >
                </v-row>
              </v-img>
            </v-col>
          </v-row>
        </div>
      </VueSlickCarousel>
    </v-row>

    <!-- <button @click="showNext">show me the next</button> -->
    <!-- <button @click="showPrev">show me the Prev</button> -->

    <!-- Ending here -->
  </v-container>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      model: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style lang="scss" scoped>
.slick-slider {
  width: 90%;
  div {
    outline: none;
  }
  h1 {
    text-align: center;
    background-color: #2f3241;
    color: #abe8f6;
    line-height: 100px;
    margin: 3px;
  }
  ::v-deep .slick-arrow:before {
    color: black;
    opacity: 1;
  }
  // ::v-deep .slick-next:after {
  //   font-size: 32px;
  //   background: black;
  //   color: white !important;
  // }
}

p {
  width: 61%;
}
</style>
