<template>
  <div class="card-panel">
    <h3 class="card-panel center-align green white-text">Numbers</h3>
    <div class="container-fluid">
      <div class="row">
        <div class="col m2">
          <input v-colorize:teal.bg="first > 45" v-model.number="first">
        </div>
        <div class="col m1">
          <h5>+</h5>
        </div>
        <div class="col m2">
          <input v-colorize:teal="second > 30" v-model.number="second">
        </div>
        <div class="col" v-colorize.bg.text="total > 50">
          <h5>= {{ total | currency }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import mixin from "../mixins/numbersMixin";

export default {
  computed: {
    total() {
      return Vue.sumValues(this.first, this.second);
    }
  },
  mixins: [mixin]
};
</script>
