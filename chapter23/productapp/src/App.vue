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
          <router-link tag="li" to="/list">List</router-link>
          <router-link tag="li" to="/create">Create</router-link>
          <router-link tag="li" to="/edit">Edit</router-link>
          <router-link tag="li" to="/edit/1">Edit Kayak</router-link>
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

<style scoped>
li {
  text-align: left;
  color: blue;
  background-color: lightblue;
}

.router-link-active {
  font-size: xx-large;
}
.router-link-exact-active {
  font-weight: bolder;
}
</style>
