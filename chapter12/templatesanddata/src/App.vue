<template>
  <div class="container-fluid">
    <div class="card-panel blue white-text">
      <h3 v-if="showElements" class="center-align">Product: {{ name }}</h3>
      <h3 v-if="!showElements" class="center-align">Price: {{price}}</h3>
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
      name: "Lifejacket",
      price: 275,
      showElements: true
    };
  },
  methods: {
    handleClick() {
      // do nothing
      this.showElements = !this.showElements;
    }
  }
};
</script>

