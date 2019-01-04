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
      <router-link :to="{name: 'table'}" class="btn grey">Cancel</router-link>&nbsp;
      <router-link v-if="editing" :to="nextUrl" class="btn light-blue">Next</router-link>
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
  computed: {
    nextUrl() {
      if (this.product.id != null && this.$store.state.products != null) {
        let index = this.$store.state.products.findIndex(
          p => p.id == this.product.id
        );
        let target =
          index < this.$store.state.products.length - 1 ? index + 1 : 0;
        return `/edit/${this.$store.state.products[target].id}`;
      }
      return "/edit";
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch("saveProductAction", this.product);
      this.$router.push({ name: "table" });

      this.product = {};
    },
    selectProduct(route) {
      if ("create" == route.params.op) {
        this.editing = false;
        this.product = {};
        console.log("hell");
      } else {
        let productId = route.params.id;
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
  beforeRouteUpdate(to, from, next) {
    this.selectProduct(to);
    next();
  },
  created() {
    unwatcher = this.$store.watch(
      state => state.products,
      () => this.selectProduct(this.$route)
    );
    this.selectProduct(this.$route);
  }
};
</script>