<template>
  <div class="container">
    <div class="card-panel grey darken-1">Root Component
      <MyFeature></MyFeature>
      <my-feature></my-feature>
    </div>
  </div>
</template>

<script>
import ChildComponent from "./components/Child";

export default {
  name: "MyComponent",
  components: {
    MyFeature: ChildComponent
  }
};
</script>