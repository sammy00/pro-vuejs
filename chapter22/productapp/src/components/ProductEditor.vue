<template>
  <div>
    <div class="row">
      <input v-model="product.id">
      <label>ID</label>
    </div>
    <div class="row">
      <input v-model="product.name">
      <label>Name</label>
    </div>
    <div class="row">
      <input v-model="product.category">
      <label>Category</label>
    </div>
    <div class="row">
      <input v-model="product.price">
      <label>Price</label>
    </div>

    <div class="row">
      <button class="btn" @click="save">{{ editing ? "Save" : "Create" }}</button>
      &nbsp;
      <router-link to="/" class="btn grey">Cancel</router-link>
    </div>
  </div>
</template>

<script>
let unwatcher;

export default {
  data() {
    return {
      editing: false,
      product: {}
    };
  },
  methods: {
    async save() {
      this.$store.dispatch("saveProductAction", this.product);
      this.$router.push("/");

      this.product = {};
    },
    selectProduct(selectedProduct) {
      if (selectedProduct == null) {
        this.editing = false;
        this.product = {};
      } else {
        this.editing = true;
        this.product = {};
        Object.assign(this.product, selectedProduct);
      }
    }
  },
  beforeDestroy() {
    unwatcher();
  },
  created() {
    unwatcher = this.$store.watch(
      state => state.selectedProduct,
      this.selectProduct
    );
    this.selectProduct(this.$store.state.selectedProduct);
  }
};
</script>

<!--Listing 18-8. The Contents of the ProductEditor.vue-->