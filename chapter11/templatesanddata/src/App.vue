<template>
  <div class="card-panel blue white-text">
    <h3 class="center-align">Product: {{ name }}</h3>
    <h3 class="center-align">Price: ${{ totalPrice.toFixed(2) }}</h3>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data: function() {
    return {
      name: "Kayak",
      price: 275,
      taxRate: 12
    };
  },
  computed: {
    totalPrice: function() {
      return this.price + this.price * (this.taxRate / 100);
    }
  }
};
</script>

