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
            <router-link :to="`/edit/${p.id}`" :class="editClass" class="btn btn-small">Edit</router-link>&nbsp;
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
      <router-link class="btn blue" to="/create">Create New</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      tableClass: "prefs/tableClass",
      editClass: "prefs/editClass",
      deleteClass: "prefs/deleteClass"
    }),
    ...mapState(["products"]),
    ...mapState({
      useStripedTable: state => state.prefs.stripedTable
    })
  },
  methods: {
    ...mapActions({
      deleteProduct: "deleteProductAction"
    }),
    ...mapMutations({
      selectProduct: "selectProduct",
      setEditButtonColor: "prefs/setEditButtonColor",
      setDeleteButtonColor: "prefs/setDeleteButtonColor"
    }),
    createNew() {
      this.selectProduct();
      this.$router.push("/edit");
    },
    editProduct(product) {
      this.selectProduct(product);
      this.$router.push("/edit");
    }
  },
  created() {
    this.setEditButtonColor(false);
    this.setDeleteButtonColor(false);
  }
};
</script>
