<template>
  <div class="container-fluid">
    <div class="card-panel blue">
      <h3 class="white-text center-align">Products</h3>
    </div>
    <div class="row">
      <div class="col s10 offset-s1">
        <table class="striped">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tbody>
            <tr v-for="p in products">
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
        { name: "Soccer Ball", price: 19.5 }
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
      // do nothing
      this.highlight = !this.highlight;
    }
  }
};
</script>

<style>
[data-size="big"] {
  font-size: 40pt;
}
[data-size="small"] {
  font-size: 20pt;
}
</style>
