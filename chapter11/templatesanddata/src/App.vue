<template>
  <div class="card-panel blue white-text">
    <h3 class="center-align">Product: {{ name | capitalize | reverse }}</h3>
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
      name: "Lifejacket",
      price: 48.95,

      lowTaxRate: 12,
      highTaxRate: 20
    };
  },
  filters: {
    currency(value, places = 2) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: places,
        maximumFractionDigits: places
      }).format(value);
    },
    capitalize(value) {
      return value[0].toUpperCase() + value.slice(1);
    },
    reverse(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    getTotalPrice(taxRate) {
      return this.price + this.price * (taxRate / 100);
    }
  }
};
</script>

