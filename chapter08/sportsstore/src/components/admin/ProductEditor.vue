<template>
  <v-container>
    <v-layout row wrap>
      <v-flex col sm12>
        <v-card color="grey">
          <h2 class="text-xs-center">{{editMode ? "Edit": "Create Product" }}</h2>
        </v-card>
      </v-flex>
      <v-flex col sm12>
        <v-alert type="error" :value="$v.$invalid && $v.$dirty">Values Required for All Fields</v-alert>
      </v-flex>
      <v-flex>
        <form>
          <v-text-field disabled label="ID (Not Editable)" v-if="editMode" v-model="product.id"></v-text-field>
          <v-text-field label="Name" v-model="product.name"></v-text-field>
          <v-text-field label="Description" v-model="product.description"></v-text-field>
          <v-select :items="categories" label="Category" v-model="product.category"></v-select>
          <v-text-field label="Price" v-model="product.price"></v-text-field>
          <v-btn to="/admin/products" color="grey">Cancel</v-btn>
          <v-btn
            @click="handleSave"
            :color="themeColorButton"
          >{{ editMode ? "Save Changes" : "Store Product"}}</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  data: function() {
    return {
      product: {}
    };
  },
  computed: {
    ...mapState({
      pages: state => state.pages,
      currentPage: state => state.currentPage,
      categories: state => state.categoriesData
    }),
    editMode() {
      return this.$route.params["op"] == "edit";
    },
    themeColorButton() {
      return this.editMode ? "info" : "primary";
    }
  },
  validations: {
    product: {
      name: { required },
      description: { required },
      category: { required },
      price: { required }
    }
  },
  methods: {
    ...mapActions(["addProduct", "updateProduct"]),
    async handleSave() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        if (this.editMode) {
          await this.updateProduct(this.product);
        } else {
          await this.addProduct(this.product);
        }
        this.$router.push("/admin/products");
      }
    }
  },
  created() {
    if (this.editMode) {
      Object.assign(
        this.product,
        this.$store.getters.productById(this.$route.params["id"])
      );
    }
  }
};
</script>
