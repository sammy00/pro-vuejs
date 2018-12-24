<template>
  <div class="container-fluid">
    <div class="card-panel blue">
      <h3 class="white-text center-align">Products</h3>
    </div>
    <div class="row">
      <div class="col s10 offset-s1">
        <table class="stripped">
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tbody>
            <tr v-for="(p, key, i) in products" :key="p.name">
              <td>{{ i }}</td>
              <td>{{ p.name }}</td>
              <td>{{ p.price | currency }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="center-align">
      <button v-on:click="handleClick" class="btn btn-primary">Press Me</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "MyComponent",
  data: function() {
    return {
      products: {
        1: { name: "Kayak", price: 275 },
        2: { name: "Lifejacket", price: 48.95 },
        3: { name: "Soccer Ball", price: 19.5 },
        4: { name: "Corner Flags", price: 39.95 }
      }
    };
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(value);
    }
  },

  methods: {
    handleClick() {
      Vue.set(this.products, 5, { name: "Running Shoes", price: 100 });
    }
  }
};
</script>

<style>
[odd] {
  background-color: lightblue;
}
</style>
