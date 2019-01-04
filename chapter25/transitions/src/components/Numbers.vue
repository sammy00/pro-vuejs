<template>
  <div class="card-panel">
    <h3 class="card-panel green white-text center-align">Numbers</h3>
    <div class="container-fluid">
      <div class="row">
        <div class="col m1">
          <input v-model.number="first">
        </div>
        <div class="col m1">
          <h5>+</h5>
        </div>
        <div class="col m1">
          <input v-model.number="second">
        </div>
        <div class="col m2">
          <h5 id="total">= {{ displayTotal }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tween } from "popmotion";

export default {
  data: function() {
    return {
      first: 10,
      second: 20,
      displayTotal: 30
    };
  },
  computed: {
    total() {
      return this.first + this.second;
    }
  },
  watch: {
    total(newVal, oldVal) {
      let classes = ["animated", "fadeIn"];
      let totalElem = this.$el.querySelector("#total");
      totalElem.classList.add(...classes);

      let t = tween({
        from: Number(oldVal),
        to: Number(newVal),
        duration: 250
      });

      // eslint-disable-next-line
      t.start({
        update: val => (this.displayTotal = val.toFixed(0)),
        complete: () => totalElem.classList.remove(...classes)
      });
    }
  }
};
</script>
