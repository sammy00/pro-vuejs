<template>
  <div class="container-fluid">
    <div class="card-panel blue">
      <h3 :class="elemClasses" class="center-align">Product: {{name}}</h3>
    </div>
    <div class="center-align">
      <button v-on:click="handleClick" class="btn btn-primary">Press Me</button>
      <button v-on:click="handleOtherClick" class="btn btn-primary">Or Press Me</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data: function() {
    return {
      name: "Lifejacket",
      highlight1: false,
      highlight2: false
    };
  },
  computed: {
    elemClasses() {
      return {
        "white-text": this.highlight1,
        "flow-text": this.highlight2
      };
    }
  },

  methods: {
    handleClick() {
      // do nothing
      this.highlight1 = !this.highlight1;
    },
    handleOtherClick() {
      // do nothing
      this.highlight2 = !this.highlight2;
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

