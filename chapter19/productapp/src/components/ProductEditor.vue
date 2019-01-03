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

    <div>
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
  inject: ["eventBus"],
  methods: {
    startEdit(product) {
      this.editing = true;
      this.product = {
        category: product.category,
        id: product.id,
        name: product.name,
        price: product.price
      };
    },
    startCreate() {
      this.editing = false;
      this.product = {};
    },
    save() {
      this.eventBus.$emit("complete", this.product);
      this.startCreate();
    },
    cancel() {
      this.product = {};
      this.editing = false;
    }
  },
  created() {
    this.eventBus.$on("create", this.startCreate);
    this.eventBus.$on("edit", this.startEdit);
  }
};
</script>

<!--Listing 18-8. The Contents of the ProductEditor.vue-->