<template>
  <v-app>
    <v-toolbar>
      <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
      <v-toolbar-title class="text-uppercase">Sports Store</v-toolbar-title>
      <!--
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
      -->
    </v-toolbar>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex col sm3>
          <v-card color="cyan">
            <v-card-title>
              <span class="headline white--text">Categories</span>
            </v-card-title>
            <v-card-text>More...</v-card-text>
          </v-card>
        </v-flex>
        <v-flex col sm9 green>
          <!--<h4 class="white-text">Products</h4>-->
          <v-layout row>
            <div class="col s12">
              <product-list/>
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import ProductList from "./ProductList";

export default {
  components: { ProductList }
};
</script>