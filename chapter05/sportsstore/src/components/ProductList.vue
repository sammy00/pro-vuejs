<template>
  <div>
    <v-list>
      <template v-for="(p,index) in products">
        <!--<v-list-tile v-for="p in products" :key="p.id">-->
        <v-list-tile :key="p.id">
          <v-list-tile-content>
            <v-list-tile-title>{{ p.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ p.description }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-chip color="teal" small text-color="white">{{ p.price | currency }}</v-chip>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider :key="index"></v-divider>
      </template>
    </v-list>
    <page-controls/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageControls from "./PageControls";

export default {
  components: { PageControls },
  computed: {
    //...mapState(["products"])
    ...mapGetters({ products: "processedProducts" })
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(value);
    }
  }
};
</script>