<template>
  <div class="container-fluid">
    <div class="card-panel blue white-text">
      <h3 v-if="counter % 2 == 0" class="center-align">Product: {{name}}</h3>
      <h3 v-else class="center-align">Category: {{category}}</h3>
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
      category: "Watersports",
      counter: 0
    };
  },
  methods: {
    handleClick() {
      // do nothing
      this.counter++;
    }
  }
};
</script>

<style>
h3:first-child {
  background-color: aquamarine;
  padding: 10px;
  color: black;
}
</style>

