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
            <th>Key</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tbody>
            <tr v-for="(p, key, i) in products" :key="p.name">
              <td>{{ i }}</td>
              <td>{{ key }}</td>
              <td>{{ p.name }}</td>
              <td>{{ p.price | currency }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="center-align">
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <!--<button v-for="i in 5" v-on:click="handleClick(i)" class="btn btn-primary">{{ i }}</button>-->
      <ul class="pagination">
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <li class="waves-effect" v-for="i in 5" :class="pagination == i ? 'active':''" :key="i">
          <a @click="handleClick(i)">{{ i }}</a>
        </li>
      </ul>
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
        kayak: { name: "Kayak", price: 275 },
        22: { name: "Lifejacket", price: 48.95 },
        3: { name: "Soccer Ball", price: 19.5 },
        "4": { name: "Corner Flags", price: 39.95 }
      },
      pagination: 1
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
