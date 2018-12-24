<template>
  <div class="card-panel blue white-text">
    <h3 class="center-align">Product: {{ name }}</h3>
    <h4 class="center-align">Price: ${{ lowTotalPrice.toFixed(2) }} (Low Rate)</h4>
    <h4 class="center-align">Price: ${{ highTotalPrice.toFixed(2) }} (High Rate)</h4>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data: function() {
    return {
      name: "Kayak",
      price: 275,
      lowTaxRate: 12,
      highTaxRate: 20
    };
  },
  computed: {
    totalPrice() {
      let tp = this.price + this.price * (this.taxRate / 100);
      console.log(`Calculated: ${tp} (${this.taxRate})`);
      return tp;
    },
    lowTotalPrice() {
      let tp = this.price + this.price * (this.lowTaxRate / 100);
      return tp;
    },
    highTotalPrice() {
      let tp = this.price + this.price * (this.highTaxRate / 100);
      return tp;
    }
  }
};
</script>

