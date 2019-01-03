<template>
  <div class="row">
    <table class="striped">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th></th>
      </tr>
      <tbody>
        <tr v-for="p in products" :key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.category }}</td>
          <td>{{ p.price }}</td>
          <td>
            <button class="btn btn-small" @click="editProduct(p)">Edit</button>
            &nbsp;
            <button class="btn btn-small" @click="deleteProduct(p)">Delete</button>
          </td>
        </tr>
        <tr v-if="products.length == 0">
          <td colspan="5" class="text-center">No Data</td>
        </tr>
      </tbody>
    </table>
    <div class="row center">
      <button class="btn" @click="createNew">Create New</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.filteredProducts;
    }
  },
  inject: ["eventBus", "restDataSource"],
  methods: {
    createNew() {},
    deleteProduct(product) {
      this.$store.commit("deleteProduct", product);
    },
    editProduct(product) {}
  }
};
</script>
