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
      <button class="btn grey" @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editing: false,
      product: {}
    };
  },
  methods: {
    save() {
      this.$store.dispatch("saveProductAction", this.product);
      this.product = {};
    },
    cancel() {
      this.$store.commit("selectProduct");
    }
  },
  created() {
    this.$store.watch(
      state => state.selectedProduct,
      (newValue, oldValue) => {
        if (newValue == null) {
          this.editing = false;
          this.product = {};
        } else {
          this.editing = true;
          this.product = {};
          Object.assign(this.product, newValue);
        }
      }
    );
  }
};
</script>

<!--Listing 18-8. The Contents of the ProductEditor.vue-->