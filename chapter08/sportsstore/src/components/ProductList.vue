<template>
  <div>
    <v-list two-line>
      <template v-for="p in products">
        <!--<v-list-tile v-for="p in products" :key="p.id">-->
        <v-list-tile :key="p.id">
          <v-list-tile-content>
            <v-list-tile-title>{{ p.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ p.description }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-list-tile-action-text>
              <v-chip color="teal" small text-color="white">{{ p.price | currency }}</v-chip>
            </v-list-tile-action-text>
            <!--<v-chip color="teal" small text-color="white">{{ p.price | currency }}</v-chip>-->
            <v-btn small color="success" @click="handleProductAdd(p)">Add To Cart</v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <!-- eslint-disable-next-line -->
        <v-divider></v-divider>
      </template>
    </v-list>
    <page-controls/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
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
  },
  methods: {
    ...mapMutations({ addProduct: "cart/addProduct" }),
    handleProductAdd(product) {
      this.addProduct(product);
      this.$router.push("/cart");
    }
  }
};
</script>