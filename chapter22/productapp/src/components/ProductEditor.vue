<template>
  <div>
    <h3 class="card-panel blue center-align white-text">{{ editing ? "Edit" : "Create"}}</h3>
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
      <router-link :to="{name: 'table'}" class="btn grey">Cancel</router-link>
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
      await this.$store.dispatch("saveProductAction", this.product);
      this.$router.push({ name: "table" });

      this.product = {};
    },
    selectProduct() {
      if ("create" == this.$route.params.op) {
        this.editing = false;
        this.product = {};
        console.log("hell");
      } else {
        let productId = this.$route.params.id;
        let selectedProduct = this.$store.state.products.find(
          p => p.id == productId
        );

        this.product = {};
        Object.assign(this.product, selectedProduct);
        this.editing = true;
      }
    }
  },
  beforeDestroy() {
    unwatcher();
  },
  created() {
    unwatcher = this.$store.watch(state => state.products, this.selectProduct);
    this.selectProduct();
  }
};
</script>