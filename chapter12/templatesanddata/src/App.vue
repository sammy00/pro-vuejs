<template>
  <div class="container-fluid">
    <div class="card-panel blue">
      <h3 v-bind="attrValues" class="center-align">Product: {{name}}</h3>
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
    attrValues() {
      return {
        class: this.highlight ? ["white-text"] : [],
        style: {
          border: this.highlight ? "5px solid red" : ""
        },
        "data-size": this.highlight ? "big" : "small"
      };
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
