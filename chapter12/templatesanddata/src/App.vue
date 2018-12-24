<template>
  <div class="container-fluid">
    <div class="card-panel blue white-text">
      <h3 v-bind:class="elemClasses" class="center-align">Product: {{name}}</h3>
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
      highlight: false
    };
  },
  computed: {
    elemClasses() {
      return this.highlight ? ["black-text"] : ["white-text"];
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
h3:first-child {
  background-color: aquamarine;
  padding: 10px;
  color: black;
}
</style>

