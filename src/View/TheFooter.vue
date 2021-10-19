<template>
  <v-container fluid>
    <v-container class="footer">
      <v-row class="footerUp">
        <ul style="width:100%" class="d-flex justify-space-around">
          <li
            class="d-flex flex-column justify-center align-center"
            v-for="item in topItems"
            :key="item.name"
          >
            <div>
              <v-img
                width="30px"
                :src="require(`../../assests/Footer/${item.src}.svg`)"
              >
              </v-img>
            </div>
            <span class="my-2">{{ item.name }}</span>
          </li>
        </ul>
      </v-row>
      <v-row class="footerDown mt-16 mb-5 d-flex justify-space-around">
        <v-col cols="12" sm="4">
          <h3>SIGN UP AND SAVE</h3>
          <h6>
            Subscribe to our newsletter and get 10% off your first purchase
          </h6>
          <v-text-field class="input" label="Enter your email">
            <h4>Subscribe</h4>
          </v-text-field>
          <h3>GIVE US A FOLLOW</h3>
          <ul style="" class="d-flex mt-2 mb-10">
            <li v-for="item in socialMediaIcons" :key="item.name">
              <a href="#">
                <v-img
                  width="12px"
                  height="12px"
                  class="mr-5"
                  :src="
                    require(`../../assests/Footer/Social Media/${item.name}.svg`)
                  "
                ></v-img>
              </a>
            </li>
          </ul>
          <h6>Copyright © 2021 by Sabhyata I GreenHonchos</h6>
        </v-col>
        <v-col cols="12" sm="2">
          <ul>
            <a href="#">
              <h3>Shop</h3>
            </a>
            <li class="my-1" v-for="item in shopItems" :key="item.name">
              <a href="#">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" sm="2">
          <ul>
            <a href="#">
              <h3>COLLECTION</h3>
            </a>
            <li class="my-1" v-for="item in collection" :key="item.name">
              <a href="#">
                {{ item.name }}
              </a>
            </li>
            <v-divider class="white my-5"></v-divider>
            <a href="#">
              <h3>New Arrival</h3>
            </a>
            <a href="#">
              <h3>Sale</h3>
            </a>
          </ul>
        </v-col>
        <v-col cols="12" sm="3">
          <ul>
            <a href="#">
              <h3>QUICK LINKS</h3>
            </a>
            <li class="my-1" v-for="item in quickLinks" :key="item.name">
              <a href="#">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      topItems: [
        { name: "24x7 Customer Support", src: "Path 914" },
        { name: "Made In India", src: "Path 129" },
        { name: "Free Shipping", src: "Group 160" },
        { name: "100+ Store", src: "Group 158" },
        { name: "18+ Experiance", src: "Group 99" },
      ],
      socialMediaIcons: [
        { name: "Path 49" },
        { name: "Path 51" },
        { name: "Path 130" },
        { name: "Path 131" },
        { name: "Path 136" },
      ],
      shopItems: [
        { name: "Kurti" },
        { name: "Kurta" },
        { name: "Top" },
        { name: "Pant" },
        { name: "Churidars & salwars" },
        { name: "Trousers" },
        { name: "Skirts" },
        { name: "Palazzo" },
      ],
      collection: [{ name: "Utsav Collection" }, { name: "Summer Collection" }],
      quickLinks: [
        { name: "About us" },
        { name: "Our Store" },
        { name: "Blogs" },
        { name: "Contact us" },
        { name: "Faq" },
        { name: "Terms and Condition" },
        { name: "Shipping & Delivery" },
        { name: "Bulk Orders Enquiry" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: $footerBgColor;
  color: white;
}

.input {
  color: white !important;
}

h3 {
  font-weight: 300;
  margin-bottom: 10px;
}

h6 {
  font-size: 12px;
  font-weight: 200;
}

li {
  font-size: 16px;
  font-weight: 100;
  list-style: none;
  color: white;
}
</style>
