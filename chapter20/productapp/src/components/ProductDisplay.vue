<template>
  <div class="row">
    <table :class="'striped' == useStripedTable">
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
            <button class="btn btn-small" :class="editClass" @click="editProduct(p)">Edit</button>
            &nbsp;
            <button
              class="btn btn-small"
              :class="deleteClass"
              @click="deleteProduct(p)"
            >Delete</button>
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
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["tableClass", "editClass", "deleteClass"]),
    ...mapState(["products"]),
    ...mapState({
      useStripedTable: state => state.prefs.stripedTable
    })
  },
  methods: {
    ...mapActions({
      getProducts: "getProductsAction",
      deleteProduct: "deleteProductAction"
    }),
    ...mapMutations({
      editProduct: "selectProduct",
      createNew: "selectProduct"
    }),
    ...mapMutations(["setEditButtonColor", "setDeleteButtonColor"])
  },
  created() {
    this.getProducts();
    this.setEditButtonColor(false);
    this.setDeleteButtonColor(false);
  }
};
</script>
