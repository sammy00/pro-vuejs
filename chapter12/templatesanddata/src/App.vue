<template>
  <div class="container-fluid">
    <div class="card-panel blue">
      <h3 v-bind:text-content.prop="textContent" class="center-align"></h3>
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
    textContent() {
      return this.highlight ? "Highlight!" : `Product: ${this.name}`;
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
[data-size="big"] {
  font-size: 40pt;
}
[data-size="small"] {
  font-size: 20pt;
}
</style>
