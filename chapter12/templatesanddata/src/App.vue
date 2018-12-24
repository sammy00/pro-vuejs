<template>
  <div class="container-fluid">
    <div class="card-panel blue">
      <h3 :data-size="size" class="center-align">Product: {{name}}</h3>
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
    size() {
      return this.highlight ? "big" : "small";
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
