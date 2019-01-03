<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <error-display/>
      </div>

      <div class="row">
        <!-- eslint-disable-next-line -->
        <component is="ProductDisplay"></component>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorDisplay from "./components/ErrorDisplay";
import ProductDisplay from "./components/ProductDisplay";
import ProductEditor from "./components/ProductEditor";

export default {
  name: "App",
  // eslint-disable-next-line
  components: { ErrorDisplay, ProductDisplay, ProductEditor },
  created() {
    this.$store.dispatch("getProductsAction");
  }
};
</script>