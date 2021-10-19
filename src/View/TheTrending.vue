<template>
  <v-container class="">
    <v-row align="center" justify="center">
      <v-img
        max-width="65px"
        max-height="12px"
        src="../../assests/decoration.svg"
      ></v-img>
      <h1 class=" mx-3">
        Trending
      </h1>
      <v-img
        max-width="65px"
        max-height="12px"
        src="../../assests/decoration.svg"
      ></v-img>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="3"
        class="pa-2"
        v-for="product in allProducts"
        :key="product.title"
      >
        <the-card :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheCard from "../components/TheCard.vue";
export default {
  components: { TheCard },
  data() {
    return {
      allProducts: [
        {
          title: "Mask Group 1",
          detail: "Grey round neck embroidered kurta with pant",
          sellingPrice: "Rs.1429",
          price: "",
          discount: "",
        },
        {
          title: "Mask Group 2",
          detail: "Mustard Round Neck Printed Kurta With Palazzos",
          sellingPrice: "Rs.2799",
          price: "",
          discount: "",
        },
        {
          title: "Mask Group 3",
          detail: "Navy Blue Mandarin Collar Cotton Printed Kurta",
          sellingPrice: "Rs.1499",
          price: "Rs.2998",
          discount: "50% Off",
        },
        {
          title: "Mask Group 4",
          detail: "Sky Blue Shirt-Collar Jacquard Kurti",
          sellingPrice: "Rs.1299",
          price: "",
          discount: "",
        },
      ],
    };
  },
};
</script>
