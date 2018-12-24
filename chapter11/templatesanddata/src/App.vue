<template>
  <div class="card-panel blue white-text">
    <h3 class="center-align">Product: {{ name }}</h3>
    <h3 class="center-align">Price: ${{ (price + (price * (taxRate / 100))).toFixed(2) }}</h3>
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
  }
};
</script>

