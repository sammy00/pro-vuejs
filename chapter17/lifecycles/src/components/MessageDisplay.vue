<template>
  <div class="card-panel grey darken-1 light-text">
    <div>Counter Value: {{ counter }}</div>
    <button class="btn btn-grey" @click="handleClick">Increment</button>
    <button class="btn btn-grey" @click="generateError">Generate Error</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter_base: 0,
      generate_error: false
    };
  },
  beforeDestroy() {
    console.log("MessageDisplay: beforeDestroy");
  },
  created() {
    console.log("MessageDisplay: created");
  },
  destroyed() {
    console.log("MessageDisplay: destroyed");
  },
  computed: {
    counter() {
      if (this.generate_error) {
        throw "My Component Error";
      } else {
        return this.counter_base;
      }
    }
  },
  methods: {
    generateError() {
      this.generate_error = true;
    },
    handleClick() {
      this.counter_base++;
    }
  }
};
</script>
