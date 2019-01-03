<template>
  <div id="app">
    <div class="container">
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
  components: { ProductDisplay, ProductEditor }
};
</script>