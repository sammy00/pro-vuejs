<template>
  <div class="container">
    <div class="card-panel teal white-text">{{ message }}</div>
    <input class="input-field" placeholder="Type here..." type="text" @keydown.ctrl="handleKey">
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      message: "Ready"
    };
  },
  methods: {
    handleKey($event) {
      this.message = $event.key;
    }
  }
};
</script>