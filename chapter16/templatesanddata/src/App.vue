<template>
  <div class="container">
    <div class="card-panel grey darken-1 white-text">
      {{ message }}
      <MyFeature labelText="Name" initialValue="Kayak"></MyFeature>
      <my-feature label-text="Category" initial-value="Watersports"></my-feature>
    </div>
  </div>
</template>

<script>
import ChildComponent from "./components/Child";

export default {
  name: "MyComponent",
  data: function() {
    return {
      message: "This is the parent component"
    };
  },
  components: {
    MyFeature: ChildComponent
  }
};
</script>