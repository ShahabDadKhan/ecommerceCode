<template>
  <v-container>
    <!-- <a href="#"> -->
    <v-card tile flat>
      <!--  -->
      <VueSlickCarousel v-bind="settings" ref="carousel" class="carousel">
        <div v-for="n in 5" :key="n">
          <v-img
            class="text-right"
            :src="require(`../../assests/New Arrival/${product.title}.png`)"
          >
            <v-avatar class="white mr-2 mt-1" size="25">
              <v-icon small class="favouriteColor--text ma-0"
                >mdi-heart-outline</v-icon
              >
            </v-avatar>
          </v-img>
        </div>
      </VueSlickCarousel>

      <!--  -->
      <v-card-title
        class="detail px-0 font-weight-medium caption"
        style="white-space: pre;"
      >
        {{ product.detail }}
      </v-card-title>
      <div class="d-flex">
        <v-card-subtitle class="px-0 black--text font-weight-bold">
          {{ product.sellingPrice }}
        </v-card-subtitle>
        <v-card-subtitle style="text-decoration: line-through;">
          {{ product.price }}
        </v-card-subtitle>
        <v-card-subtitle class="px-0 red--text">
          {{ product.discount }}
        </v-card-subtitle>
      </div>
    </v-card>
    <!-- </a> -->
  </v-container>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  props: {
    product: {
      required: true,
    },
  },
  data() {
    return {
      settings: {
        dots: true,
        arrows: false,
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
};
</script>

<style lang="scss" scoped>
.detail {
  font-style: 30px;
}

::v-deep ul {
  padding: 0px 0px 15% 45%;
  color: white;
  // background: white;

  li {
    width: 5px;
    color: white !important;
    // padding: 0px;
    // margin: 0px;
    // background: white;
  }
}

.slick-slider {
  width: 100%;
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
    display: none;
    color: black;
    opacity: 1;
  }
}
</style>
