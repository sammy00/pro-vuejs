<template>
  <div class="container-fluid">
    <div class="card-panel blue white-text">
      <h3 class="center-align">
        Product:
        <span v-text="name"></span>
      </h3>
      <ul class="collection with-header black-text">
        <li class="collection-header">
          <h4>List item</h4>
        </li>
        <li v-if="showElements" class="collection-item">{{name}}</li>
        <li v-if="showElements" class="collection-item">{{price}}</li>
        <li class="collection-item">Other list item</li>
      </ul>
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
      price: 275,
      showElements: true
    };
  },
  methods: {
    handleClick() {
      // do nothing
      this.showElements = !this.showElements;
    }
  }
};
</script>

