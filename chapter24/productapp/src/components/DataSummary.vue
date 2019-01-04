<template>
  <div>
    <h3 class="green center-align white-text">Summary</h3>
    <table>
      <tr>
        <th>Number of Products:</th>
        <td>{{ products.length}}</td>
      </tr>
      <tr>
        <th>Number of Categories:</th>
        <td>{{ categoryCount }}</td>
      </tr>
      <tr>
        <th>Highest Price:</th>
        <td>{{ highestPrice | currency }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["products"]),
    categoryCount() {
      if (this.products.length > 0) {
        return this.products
          .map(p => p.category)
          .filter((cat, index, arr) => arr.indexOf(cat) == index).length;
      } else {
        return 0;
      }
    },
    highestPrice() {
      if (this.products.length == 0) {
        return 0;
      } else {
        return Math.max(...this.products.map(p => p.price));
      }
    }
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(value);
    }
  }
};
</script>
