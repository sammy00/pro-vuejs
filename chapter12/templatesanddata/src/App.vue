<template>
  <div class="container-fluid">
    <div class="card-panel blue white-text">
      <h3 class="center-align">
        Product:
        <span v-text="name"></span>
      </h3>
      <p v-text="fragment" class="center-align"></p>
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
      fragment: `<div class="form-group">
Password
<input class="form-control" />
</div>`
    };
  },
  methods: {
    handleClick() {
      // do nothing
    }
  }
};
</script>

