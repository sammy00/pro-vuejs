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
          <li class="tab">
            <router-link active-class="red white-text lighten-4" to="/named/tableleft">Table Left</router-link>
          </li>
          <li class="tab">
            <router-link active-class="red white-text lighten-4" to="/named/tableright">Table Right</router-link>
          </li>
          <li class="tab">
            <router-link active-class="red white-text lighten-4" to="/filter/All">Filter Data</router-link>
          </li>
        </ul>
      </div>
      <div class="row">
        <h3
          class="card-panel orange white-text center-align"
          v-if="componentLoading"
        >Loading Component...</h3>
        <router-view v-show="!componentLoading"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["componentLoading"])
  },
  created() {
    this.$store.dispatch("getProductsAction");
  }
};
</script>
