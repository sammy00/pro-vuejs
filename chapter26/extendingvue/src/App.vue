<template>
  <div id="app" class="container">
    <numbers/>
    <subtraction/>
    <maths operation="Divide" firstVal="10" secondVal="20"/>
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
