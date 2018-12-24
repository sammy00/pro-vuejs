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
    <div class="center-align">
      <button class="btn" v-on:click="toggleSort" v-bind:class="sort ? 'blue': 'grey'">Toggle Sort</button>
      <button
        class="btn"
        v-on:click="toggleFilter"
        v-bind:class="filter ? 'blue': 'grey'"
      >Toggle Filter</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data: function() {
    return {
      currentPage: 1,
      filter: false,
      pageSize: 3,
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
      ],
      sort: false
    };
  },
  computed: {
    dataItems() {
      let data = this.filter
        ? this.products.filter(p => p.price > 100)
        : this.products;
      return this.sort
        ? data.concat().sort((p1, p2) => p2.price - p1.price)
        : data;
    },
    pageCount() {
      return Math.ceil(this.dataItems.length / this.pageSize);
    },
    pageItems() {
      let start = (this.currentPage - 1) * this.pageSize;
      return this.dataItems.slice(start, start + this.pageSize);
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
    selectPage(page) {
      this.currentPage = page;
    },
    toggleFilter() {
      this.filter = !this.filter;
      this.currentPage = 1;
    },
    toggleSort() {
      this.sort = !this.sort;
      this.currentPage = 1;
    }
  }
};
</script>

<style>
[odd] {
  background-color: lightblue;
}
</style>
