<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title class="text-uppercase">Sports Store</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout row wrap>
        <v-flex col sm12>
          <v-text-field label="Name" v-model="$v.order.name.$model"></v-text-field>
          <validation-error :validation="$v.order.name"/>
        </v-flex>
        <v-flex col sm12>
          <v-text-field label="Email" v-model="$v.order.email.$model"></v-text-field>
          <validation-error :validation="$v.order.email"/>
        </v-flex>
        <v-flex col sm12>
          <v-text-field label="Address" v-model="$v.order.address.$model"></v-text-field>
          <validation-error :validation="$v.order.address"/>
        </v-flex>
        <v-flex col sm12>
          <v-text-field label="City" v-model="$v.order.city.$model"></v-text-field>
          <validation-error :validation="$v.order.city"/>
        </v-flex>
        <v-flex col sm12>
          <v-text-field label="Zip" v-model="$v.order.zip.$model"></v-text-field>
          <validation-error :validation="$v.order.zip"/>
        </v-flex>
        <v-flex col sm12>
          <div class="text-sm-center">
            <v-btn to="/cart" color="grey" dark>Back</v-btn>
            <v-btn color="primary" @click="submitOrder">Place Order</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import ValidationError from "./ValidationError";

export default {
  components: { ValidationError },
  data: function() {
    return {
      order: {
        name: null,
        email: null,
        address: null,
        city: null,
        zip: null
      }
    };
  },
  methods: {
    ...mapActions({
      storeOrder: "storeOrder",
      clearCart: "cart/clearCartData"
    }),
    async submitOrder() {
      this.$v.$touch();
      // todo: save order
      if (!this.$v.$invalid) {
        let order = await this.storeOrder(this.order);
        this.clearCart();
        this.$router.push(`/thanks/${order}`);
      }
    }
  },
  validations: {
    order: {
      name: { required },
      email: { required, email },
      address: { required },
      city: { required },
      zip: { required }
    }
  }
};
</script>
