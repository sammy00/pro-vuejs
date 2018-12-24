<template>
  <div class="container-fluid">
    <div class="card-panel blue">
      <h3 class="white-text center-align">Products</h3>
    </div>
    <div class="row">
      <div class="col s10 offset-s1">
        <table>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tbody>
            <tr v-for="(p,i) in products" :key="p.name" :odd="i%2==0">
              <td>{{ i+ 1 }}</td>
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
export default {
  name: "MyComponent",
  data: function() {
    return {
      products: [
        { name: "Kayak", price: 275 },
        { name: "Lifejacket", price: 48.95 },
        { name: "Soccer Ball", price: 19.5 },
        { name: "Corner Flags", price: 39.95 },
        { name: "Stadium", price: 79500 },
        { name: "Thinking Cap", price: 16 }
      ]
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
      this.products = this.products.filter(p => p.price > 20);
    }
  }
};
</script>

<style>
[odd] {
  background-color: lightblue;
}
</style>
