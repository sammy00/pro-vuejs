<template>
  <div class="card-panel blue white-text">
    <h3 class="center-align">Product: {{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data: function() {
    return {
      name: "Kayak"
    };
  }
};
</script>

