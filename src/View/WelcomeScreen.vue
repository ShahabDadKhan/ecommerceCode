<template>
  <v-container fluid>
    <v-row align="center" class="ml-2">
      <v-col md="2">
        <a href="#">
          <v-img src="../../assests/Group 123.png" width="161px"></v-img>
        </a>
      </v-col>
      <v-col md="7" align-self="center" class="title-Div">
        <div>
          <a href="">
            new in
          </a>
        </div>
        <div v-for="title in barTitles" :key="title.name" class="title-Div">
          <a href="">
            {{ title.name }}
          </a>
        </div>
        <div>
          <a href="">
            sale
          </a>
        </div>
      </v-col>
      <v-col md="2" class="title-Div">
        <a href="#">
          <v-img max-width="25px" src="../../assests/search.svg"></v-img>
        </a>
        <a href="#">
          <v-img max-width="25px" src="../../assests/person.svg"></v-img>
        </a>
        <a href="#">
          <v-img max-width="25px" src="../../assests/location.svg"></v-img>
        </a>
        <a href="#">
          <v-img max-width="25px" src="../../assests/favourite.svg"></v-img>
        </a>
        <a href="#">
          <v-badge bottom overlap color="red" content="3">
            <v-img max-width="25px" src="../../assests/bag.svg"></v-img>
          </v-badge>
        </a>
      </v-col>
      <v-col md="1">
        INR <v-icon color="white">mdi-chevron-down</v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      barTitles: [],
      barIcons: ["search", "person", "location", "favourite", "bag"],
    };
  },
  mounted() {
    this.fetchTitles();
  },
  methods: {
    async fetchTitles() {
      const baseURL =
        "https://sabhyata.pimkm.greenhonchos.com/pim/pimresponse.php/?service=menu&store=1";
      const response = await this.$http.get(baseURL);
      this.barTitles = response.data.result;
      console.log(this.barTitles);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-image: url("../../assests/Group 195.png");
  background-size: cover;
  height: 100vh;
}
.col {
  font-size: 16px;
  font-weight: 100;
  color: white;
  text-transform: uppercase;
}
.col:nth-child(3) {
  border-right: 1px solid white;
}
.title {
  &-Div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
