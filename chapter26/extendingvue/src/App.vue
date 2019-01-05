<template>
  <div id="app" class="container">
    <numbers/>
    <subtraction/>
  </div>
</template>

<script>
import Numbers from "./components/Numbers";
import Subtraction from "./components/Subtraction";

export default {
  name: "app",
  components: {
    Numbers,
    Subtraction
  }
};
</script>
