<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title class="text-uppercase">Sports Store</v-toolbar-title>
    </v-toolbar>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex col sm12 md3>
          <category-controls/>
        </v-flex>
        <v-flex col sm12 md9>
          <product-list/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import CategoryControls from "./CategoryControls";
import ProductList from "./ProductList";

export default {
  components: { CategoryControls, ProductList }
};
</script>