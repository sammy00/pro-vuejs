<template>
  <div class="card-panel blue white-text">
    <h3 class="center-align">Product: {{ name }}</h3>
    <h4 class="center-align">Price: ${{ getTotalPrice(lowTaxRate).toFixed(2) }} (Low Rate)</h4>
    <h4 class="center-align">Price: ${{ getTotalPrice(highTaxRate).toFixed(2) }} (High Rate)</h4>
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
  methods: {
    getTotalPrice(taxRate) {
      return this.price + this.price * (taxRate / 100);
    }
  }
};
</script>

