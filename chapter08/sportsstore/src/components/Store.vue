<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title class="text-uppercase">Sports Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <cart-summary/>
    </v-toolbar>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex col sm12 md3>
          <category-controls/>
        </v-flex>
        <v-flex col sm12 md9>
          <search/>
          <product-list/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import CartSummary from "./CartSummary";
import CategoryControls from "./CategoryControls";
import ProductList from "./ProductList";
import Search from "./Search";
import { mapMutations } from "vuex";

export default {
  components: { CartSummary, CategoryControls, ProductList, Search },
  methods: {
    ...mapMutations(["setShowSearch"])
  }
};
</script>