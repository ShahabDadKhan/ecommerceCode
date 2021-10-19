<template>
  <v-carousel v-model="model">
    <v-carousel-item>
      <v-sheet :color="color" height="100%" tile>
        <v-row class="ma-0">
          <v-col class="pa-0" cols="12" sm="6" style="width:100%; height:100%;">
            <v-img
              width="100%"
              height="100%"
              src="../../assests/Collections/Mask Group 9.png"
            >
            </v-img>
          </v-col>
          <v-col class="pa-0" cols="12" sm="6" style="width:100%; height:100%;">
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
                <p class="text-center" style="width:350px">
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
      </v-sheet>
    </v-carousel-item>
    <!--  -->
    <v-carousel-item>
      <v-sheet :color="color" height="100%" tile>
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
                <p class="text-center" style="width:350px">
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
      </v-sheet>
    </v-carousel-item>
    <!--  -->
    <v-carousel-item>
      <v-sheet :color="color" height="100%" tile>
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
                <p class="text-center" style="width:350px">
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
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    exploreCard: [
      { title: "Men's Kurta", id: false },
      { title: "Women's Kurti", id: true },
      { title: "Churidars & Salwars", id: false },
    ],
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>
