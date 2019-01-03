<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <button class="btn" @click="toggleColors">Toggle Colors</button>
      </div>
      <div class="row">
        <div class="col m8">
          <product-display></product-display>
        </div>
        <div class="col m3 offset-m1">
          <product-editor></product-editor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDisplay from "./components/ProductDisplay";
import ProductEditor from "./components/ProductEditor";

export default {
  name: "App",
  data() {
    return {
      reactiveColors: {
        bg: "grey",
        text: "white-text"
      }
    };
  },
  components: { ProductDisplay, ProductEditor },
  methods: {
    toggleColors() {
      if (this.reactiveColors.bg == "grey") {
        this.reactiveColors.bg = "grey lighten-1";
        this.reactiveColors.text = "red-text";
      } else {
        this.reactiveColors.bg = "grey";
        this.reactiveColors.text = "white-text";
      }
    }
  },
  provide() {
    return {
      colors: this.reactiveColors,
      labelFormatter: value => `Enter ${value}:`
    };
  }
};
</script>