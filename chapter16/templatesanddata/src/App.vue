<template>
  <div class="container">
    <div class="card-panel grey darken-1 white-text">
      <div class="row">
        <input type="text" v-model="labelText">
      </div>
      <my-feature :label-text="labelText" initialValue="Kayak"></my-feature>
    </div>
  </div>
</template>

<script>
import ChildComponent from "./components/Child";

export default {
  name: "MyComponent",
  data: function() {
    return {
      labelText: "Name",
      message: "This is the parent component"
    };
  },
  components: {
    MyFeature: ChildComponent
  }
};
</script>