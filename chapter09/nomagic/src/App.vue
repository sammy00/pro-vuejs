<template src="./App.html" />

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  computed: {
    message() {
      return 0 == this.counter
        ? "Button Not Pressed"
        : `Button Presses: ${this.counter}`;
    }
  },
  methods: {
    handleClick() {
      this.counter++;
    }
  }
};
</script>
