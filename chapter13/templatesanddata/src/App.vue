<template>
  <div class="container-fluid">
    <div class="card-panel blue">
      <h3 class="white-text center-align">Products</h3>
    </div>
    <div class="row">
      <div class="col s10 offset-s1">
        <table class="stripped">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tbody>
            <tr v-for="p in pageItems" :key="p.name">
              <td>{{ p.name }}</td>
              <td>{{ p.price | currency }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="center-align">
      <ul class="pagination">
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <li
          class="waves-effect"
          v-for="i in pageCount"
          :class="{'active': currentPage == i}"
          :key="i"
        >
          <a @click="selectPage(i)">{{ i }}</a>
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
      pageSize: 3,
      currentPage: 1,
      products: [
        { name: "Kayak", price: 275 },
        { name: "Lifejacket", price: 48.95 },
        { name: "Soccer Ball", price: 19.5 },
        { name: "Corner Flags", price: 39.95 },
        { name: "Stadium", price: 79500 },
        { name: "Thinking Cap", price: 16 },
        { name: "Unsteady Chair", price: 29.95 },
        { name: "Human Chess Board", price: 75 },
        { name: "Bling Bling King", price: 1200 }
      ]
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.products.length / this.pageSize);
    },
    pageItems() {
      let start = (this.currentPage - 1) * this.pageSize;
      return this.products.slice(start, start + this.pageSize);
    }
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
    },
    selectPage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style>
[odd] {
  background-color: lightblue;
}
</style>
