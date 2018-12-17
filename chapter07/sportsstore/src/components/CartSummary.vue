<template>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat>
      Your cart:
      <span v-if="itemCount > 0">{{ itemCount }} item(s) {{ totalPrice | currency }}</span>
      <span v-else>(empty)</span>
    </v-btn>
    <v-btn icon to="/cart" v-bind:disabled="itemCount == 0">
      <v-icon>shopping_cart</v-icon>
    </v-btn>
  </v-toolbar-items>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      itemCount: "cart/itemCount",
      totalPrice: "cart/totalPrice"
    })
  }
};
</script>
