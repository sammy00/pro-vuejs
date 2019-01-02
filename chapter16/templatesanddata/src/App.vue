<template>
  <div class="container">
    <div class="card-panel grey darken-1 white-text">
      <h6>{{ message }}</h6>

      <my-feature :initial-product="product" @productSubmit="updateProduct">
        <div class="card-panel orange">
          <h3 class="center-align">Product Editor</h3>
        </div>
      </my-feature>
    </div>
  </div>
</template>

<script>
import ChildComponent from "./components/Child";

export default {
  name: "MyComponent",
  data: function() {
    return {
      message: "Ready",
      product: {
        name: "Kayak",
        category: "Watersports",
        price: 275
      }
    };
  },
  components: {
    MyFeature: ChildComponent
  },
  methods: {
    updateProduct(newProduct) {
      this.message = JSON.stringify(newProduct);
    }
  }
};
</script>