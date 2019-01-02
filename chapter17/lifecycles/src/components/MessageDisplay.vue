<template>
  <div class="card-panel grey darken-1 light-text">
    <div>Counter Value: {{ counter }}</div>
    <button class="btn btn-grey" @click="handleClick">Increment</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  created: function() {
    console.log("MessageDisplay: created");
  },
  beforeDestroy: function() {
    console.log("MessageDisplay: beforeDestroy");
  },
  destroyed: function() {
    console.log("MessageDisplay: destroyed");
  },
  methods: {
    handleClick() {
      this.counter++;
    }
  }
};
</script>
