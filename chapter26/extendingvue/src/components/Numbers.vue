<template>
  <div class="card-panel">
    <h3 class="card-panel center-align green white-text">Numbers</h3>
    <div class="container-fluid">
      <div class="row">
        <div class="col m2">
          <input v-colorize="first > 45" v-model.number="first">
        </div>
        <div class="col m1">
          <h5>+</h5>
        </div>
        <div class="col m2">
          <input v-model.number="second">
        </div>
        <div class="col" v-colorize="total > 50">
          <h5>= {{ total }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Colorize from "../directives/colorize";

export default {
  data() {
    return {
      first: 10,
      second: 20
    };
  },
  directives: { Colorize },
  computed: {
    total() {
      return this.first + this.second;
    }
  }
};
</script>
