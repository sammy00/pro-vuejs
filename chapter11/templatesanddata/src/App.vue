<template>
  <div class="card-panel blue white-text">
    <h3 class="center-align">Product: {{ name }}</h3>
    <h4
      class="center-align"
    >Price: {{ getTotalPrice(lowTaxRate).toFixed(2) | currency(3) }} (Low Rate)</h4>
    <h4
      class="center-align"
    >Price: {{ getTotalPrice(highTaxRate).toFixed(2) | currency }} (High Rate)</h4>
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
  filters: {
    currency(value, places) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: places || 2,
        maximumFractionDigits: places || 2
      }).format(value);
    }
  },
  methods: {
    getTotalPrice(taxRate) {
      return this.price + this.price * (taxRate / 100);
    }
  }
};
</script>

