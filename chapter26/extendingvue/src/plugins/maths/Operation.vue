<template>
  <div class="card-panel">
    <h3 class="card-panel center-align teal white-text">{{ operation }}</h3>
    <div class="container-fluid">
      <div class="row">
        <div class="col m2">
          <input v-model.number="first">
        </div>
        <div class="col m1">
          <h5>{{ symbol }}</h5>
        </div>
        <div class="col m2">
          <input v-model.number="second">
        </div>
        <div class="col" v-borderize="total > 25">
          <h5>= {{ total }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: ["firstVal", "secondVal", "operation"],
  data: function() {
    return {
      first: Number(this.firstVal),
      second: Number(this.secondVal)
    };
  },
  computed: {
    symbol() {
      return Vue.getSymbol(this.operation);
    },
    // eslint-disable-next-line
    total() {
      switch (this.operation.toLowerCase()) {
        case "add":
          return this.$calc.add(this.first, this.second);
        case "subtract":
          return this.$calc.subtract(this.first, this.second);
        case "multiply":
          return this.$calc.multiply(this.first, this.second);
        case "divide":
          return this.$calc.divide(this.first, this.second);
      }
    }
  }
};
</script>
