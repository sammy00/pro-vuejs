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
          </td>
        </tr>
        <tr v-if="products.length == 0">
          <td colspan="5" class="text-center">No Data</td>
        </tr>
      </tbody>
    </table>
    <div class="row">
      <button class="btn center-align" @click="createNew">Create New</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import Axios from "axios";
const baseUrl = "http://localhost:3500/products/";

export default {
  data: function() {
    return {
      products: []
    };
  },
  inject: ["eventBus"],
  methods: {
    createNew() {
      this.eventBus.$emit("create");
    },
    editProduct(product) {
      this.eventBus.$emit("edit", product);
    },
    processProducts(newProducts) {
      this.products.splice(0);
      this.products.push(...newProducts);
    }
  },
  created() {
    Axios.get(baseUrl).then(resp => {
      console.log(`HTTP Response: ${resp.status}, ${resp.statusText}`);
      console.log(`Response Data: ${resp.data.length} items`);
    });
  }
};
</script>
