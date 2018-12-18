<template>
  <div>
    <v-layout row wrap>
      <v-flex col sm12>
        <v-btn to="/admin/products/create" color="primary">Create Product</v-btn>
      </v-flex>
      <v-flex col sm12>
        <v-data-table hide-actions :headers="headers" :items="products">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.category }}</td>
            <td>{{ props.item.price | currency }}</td>
            <td>
              <v-btn small color="error" @click="removeProduct(props.item)">Delete</v-btn>
              <v-btn small color="error" @click="handleEdit(props.item)">Edit</v-btn>
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <page-controls/>
  </div>
</template>
/>
<script>
import PageControls from "../PageControls";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "City, Zip", value: "cityZip" },
        { text: "Total", value: "total" }
      ]
    };
  },
  components: { PageControls },
  computed: {
    ...mapGetters({
      products: "processedProducts"
    })
  },
  methods: {
    ...mapActions(["removeProduct"]),
    handleEdit(product) {
      this.$router.push(`/admin/products/edit/${product.id}`);
    }
  }
};
</script>

