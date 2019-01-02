<template>
  <div class="container">
    <div class="card-panel blue">Root Component
      <ChildComponent></ChildComponent>
    </div>
  </div>
</template>

<script>
import ChildComponent from "./components/Child";

export default {
  name: "MyComponent",
  components: {
    ChildComponent
  }
};
</script>