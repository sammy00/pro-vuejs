<template>
  <div class="container">
    <div class="card-panel grey darken-1 white-text">
      <h6>{{ message }}</h6>
      <product-display :product="product">
        <div
          class="card-panel black-text"
          slot-scope="data"
        >{{data.propname}} is {{ data.propvalue }}</div>
      </product-display>

      <my-feature :initial-product="product" @productSubmit="updateProduct">
        <div class="card-panel orange" slot="header">
          <h3 class="center-align">Product Editor</h3>
        </div>
        <h5 class="orange-text" slot="footer">Check Details Before Submitting</h5>
      </my-feature>
    </div>
  </div>
</template>

<script>
import ChildComponent from "./components/Child";
import ProductDisplay from "./components/ProductDisplay";

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
    MyFeature: ChildComponent,
    ProductDisplay
  },
  methods: {
    updateProduct(newProduct) {
      this.message = JSON.stringify(newProduct);
    }
  }
};
</script>