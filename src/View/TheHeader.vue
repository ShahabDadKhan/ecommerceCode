<template>
  <!-- <v-container fluid> -->
  <div class="header">
    <img width="100%" src="../../assests/Group 195@2x.png" alt="#" />
    <div class="navbar">
      <div class="navbar-Logo">
        <img width="100%" src="../../assests/Group 123.png" alt="#" />
      </div>
      <div class="navbar-Links">
        <a href="#">
          New In
        </a>
        <a href="#" v-for="title in barTitles" :key="title.name">
          {{ title.name }}
        </a>
        <a href="#">
          Sale
        </a>
      </div>
      <div class="navbar-Icons">
        <a href="#" v-for="icon in barIcons" :key="icon.name">
          <img width="22px" :src="require(`../../assests/${icon.name}.svg`)" />
        </a>
        <a href="#">
          <v-badge bottom overlap color="red" content="3">
            <img width="22px" src="../../assests/bag.svg" />
          </v-badge>
        </a>
        <a href="#" class="navbar-Icons-INR">
          INR
          <v-icon class="white--text ml-1">mdi-chevron-down</v-icon>
        </a>
      </div>
    </div>
  </div>
  <!-- </v-container> -->
</template>

<script>
export default {
  data() {
    return {
      barTitles: [],
      barIcons: [
        { name: "search" },
        { name: "person" },
        { name: "location" },
        { name: "favourite" },
        // { name: "bag" },
      ],
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
// .header {
//   //   height: 100vh;
// }

.navbar {
  position: absolute;
  top: 25px;
  left: 20px;
  height: 10vh;
  width: 100%;
  display: flex;
  //   justify-content: space-between;
  align-items: center;

  &-Logo {
    width: 10%;
  }

  &-Links {
    width: 55%;
    display: flex;
    font-weight: 200;
    justify-content: space-between;
    // padding-left: 0px;
    margin-left: 5%;
    align-items: center;
  }

  &-Icons {
    margin-left: 2%;
    // margin-right: %;
    width: 25%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    &-INR {
      //   width: 10%;
      border-left: 1px solid white;
      padding-left: 15px;
      margin-left: 10px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }
}
</style>
