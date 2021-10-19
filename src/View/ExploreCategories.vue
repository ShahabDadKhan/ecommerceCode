<template>
  <v-container fluid class="my-16">
    <v-row>
      <v-col cols="12" sm="4" v-for="card in exploreCard" :key="card.title">
        <v-card tile flat class="mx-auto">
          <div v-show="card.id == true" class="showDiv mb-5">
            <v-img
              max-width="65px"
              max-height="12px"
              src="../../assests/decoration.svg"
            ></v-img>
            <h2 class=" mx-3">
              Explore Categories
            </h2>
            <v-img
              max-width="65px"
              max-height="12px"
              src="../../assests/decoration.svg"
            ></v-img>
          </div>
          <v-img
            width="400px"
            height="510px"
            :src="require(`../../assests/${card.title}.png`)"
            class="text-center align-end"
          >
            <p>{{ card.title }}</p>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      exploreCard: [
        { title: "Men's Kurta", id: false },
        { title: "Women's Kurti", id: true },
        { title: "Churidars & Salwars", id: false },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  // background-color: $background;
  height: 100vh;
}

p {
  font-size: 30px;
  font-style: italic;
  font-weight: 200;
  color: $white;
}

.v-card:nth-child(2) {
  margin-top: 20px !important;
}

.showDiv {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
