<template>
  <div id="app">
    <div class="container">
      <div class="row center">
        <ul class="tabs">
          <li class="tab">
            <router-link active-class="red white-text lighten-4" to="/products">Products</router-link>
          </li>
          <li class="tab">
            <router-link active-class="red white-text lighten-4" to="/preferences">Preferences</router-link>
          </li>
        </ul>
      </div>
      <div class="row">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("getProductsAction");
  }
};
</script>
