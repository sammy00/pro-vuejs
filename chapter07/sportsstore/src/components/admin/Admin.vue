<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>SPORTS STORE Admin</v-toolbar-title>
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
