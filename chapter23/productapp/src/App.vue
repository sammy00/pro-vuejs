<template>
  <div id="app">
    <div class="container">
      <div class="row center">
        <!--
        <ul class="tabs">
          <li class="tab">
            <router-link to="/list">List</router-link>
          </li>
          <li class="tab">
            <router-link to="/create">Create</router-link>
          </li>
        </ul>
        -->
        <ol>
          <router-link tag="li" event="mouseenter" to="/list">List</router-link>
          <router-link tag="li" event="mouseenter" to="/create">Create</router-link>
        </ol>
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