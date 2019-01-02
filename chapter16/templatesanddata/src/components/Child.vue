<template>
  <div class="card-panel grey darken-1 white-text">
    <div class="row">
      <label>Name</label>
      <input v-model="product.name">
    </div>
    <div class="row">
      <label>Category</label>
      <input v-model="product.category">
    </div>
    <div class="row">
      <label>Price</label>
      <input v-model.number="product.price">
    </div>
    <div class="row">
      <button class="btn" @click="doSubmit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["initialProduct"],
  data: function() {
    return {
      product: this.initialProduct || {}
    };
  },
  methods: {
    doSubmit() {
      this.$emit("productSubmit", this.product);
    }
  }
};
</script>
