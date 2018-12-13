<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title class="text-uppercase">Sports Store</v-toolbar-title>
    </v-toolbar>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex col sm12>
          <h2 class="text-sm-center">Your Cart</h2>
        </v-flex>
        <v-flex col sm12>
          <v-data-table :headers="headers" :items="lines">
            <template slot="no-data">
              <v-alert :value="true" color="error" icon="warning">Your cart is empty</v-alert>
            </template>
            <template slot="items" slot-scope="props">
              <cart-line
                :key="props.item.product.id"
                :line="props.item"
                @quantity="handleQuantityChange(props.item, $event)"
                @remove="remove"
              />
            </template>
            <template slot="footer">
              <td :colspan="headers.length">
                <p class="text-sm-right">Total: {{ totalPrice | currency }}</p>
              </td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex col sm12>
          <v-btn color="grey darken-1" dark to="/">Continue Shopping</v-btn>
          <v-btn color="primary" to="/checkout" :disabled="lines.length==0">Checkout</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="container-fluid">
      <div class="row">
        <div class="col bg-dark text-white">
          <a class="navbar-brand">SPORTS STORE</a>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import CartLine from "./ShoppingCartLine";

export default {
  data() {
    return {
      headers: [
        { text: "Quantity", value: "quantity" },
        { text: "Product", value: "product.name" },
        { text: "Price", value: "product.price" },
        { text: "Subtotal", value: "(quantity*product.price)" }
      ]
    };
  },
  components: { CartLine },
  computed: {
    ...mapState({ lines: state => state.cart.lines }),
    ...mapGetters({ totalPrice: "cart/totalPrice" })
  },
  methods: {
    ...mapMutations({
      change: "cart/changeQuantity",
      remove: "cart/removeProduct"
    }),
    handleQuantityChange(line, $event) {
      this.change({ line, quantity: $event });
    }
  }
};
</script>
