<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>SPORTS STORE Admin</v-toolbar-title>
    </v-toolbar>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex col sm12 md3>
          <v-btn to="/admin/products" block color="primary">Products</v-btn>
          <v-btn to="/admin/orders" block color="primary">Orders</v-btn>
        </v-flex>
        <v-flex col sm12 md9>
          <router-view/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
