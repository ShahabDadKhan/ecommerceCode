<template>
  <v-container fluid class="my-16">
    <v-row justify="space-between">
      <v-col cols="12" sm="4">
        <v-img
          class="imgLeft"
          src="../../assests/shop/Mask Group 34.png"
        ></v-img>
      </v-col>
      <v-col class="" align-self="center" cols="12" sm="3">
        <v-row align="center" justify="center">
          <v-img
            max-width="55px"
            max-height="12px"
            src="../../assests/decoration.svg"
          ></v-img>
          <h1 class=" mx-3">
            Shop the look
          </h1>
          <v-img
            max-width="55px"
            max-height="12px"
            src="../../assests/decoration.svg"
          ></v-img>
        </v-row>
        <v-row>
          <p>
            Embroidered Kurta Set embellished with gold accents. A trendy
            amalgamation of the beauty of traditional motifs with modern designs
            available in a wide range of colours, perfect for any occasion.
          </p>
        </v-row>
        <v-row>
          <p>
            Embroidered Kurta Set embellished with gold accents. A trendy
            amalgamation of the beauty of traditional motifs with modern designs
            available in a wide range of colours, perfect for any occasion.
          </p>
        </v-row>
      </v-col>
      <v-col cols="12" sm="4">
        <v-img
          class="imgRight"
          src="../../assests/shop/Mask Group 35.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  background-color: $shopBgColor;
}

h1 {
  font-size: 30px;
  font-weight: 400;
  color: white;
}

p {
  font-size: 14px;
  font-weight: 200;
  text-align: center;
  color: white;

  &:first-child {
    margin: 15px 0px;
  }
}

.imgLeft {
  margin-top: -30px;
}

.imgRight {
  margin-bottom: -30px;
}
</style>
