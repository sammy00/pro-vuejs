<template>
  <main>
    <nav>
      <div class="nav-wrapper container">
        <a href="#" class="brand-logo">SPORTS STORE</a>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col s3 cyan">
          <h4 class="white-text">Categories</h4>
        </div>
        <div class="col s9 green">
          <!--<h4 class="white-text">Products</h4>-->
          <div class="col s12">
            <product-list/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProductList from "./ProductList";

export default {
  components: { ProductList }
};
</script>