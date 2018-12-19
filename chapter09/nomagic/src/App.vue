<template>
  <div class="card-panel grey">
    <h1 class="white-text">{{ message }}</h1>
    <button class="btn grey" @click="handleClick">Press Me</button>
  </div>
</template>

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
