<template>
  <v-container class="my-16">
    <v-row align="center" justify="center" class="mt-16 flex-column">
      <div class="d-flex align-center">
        <v-img
          max-width="65px"
          max-height="12px"
          src="../../assests/decoration.svg"
        ></v-img>
        <h1 class="mx-3">
          Enter the world of Sabhyata
        </h1>
        <v-img
          max-width="65px"
          max-height="12px"
          src="../../assests/decoration.svg"
        ></v-img>
      </div>
      <div>
        <h5 class="my-3">@sabhyataclothing</h5>
      </div>
    </v-row>
    <v-row>
      <v-col sm="3" v-for="item in items" :key="item.name">
        <v-img :src="require(`../../assests/World/${item.name}.png`)">
          <a href="#">
            <v-img
              class="instaImg"
              width="15px"
              src="../../assests/World/Group 186.svg"
            >
            </v-img>
          </a>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "Mask Group 22" },
        { name: "Mask Group 23" },
        { name: "Mask Group 24" },
        { name: "Mask Group 25" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.instaImg {
  margin: 2% 0% 0% 90%;
}
</style>
