<template>
  <div id="app">
    <div class="container">
      <div class="row center">
        <ul class="tabs">
          <li class="tab">
            <router-link class="white-text" exact-active-class="teal" to="/list">List</router-link>
          </li>
          <li class="tab">
            <router-link class="white-text" exact-active-class="teal" to="/create">Create</router-link>
          </li>
          <li class="tab">
            <router-link class="white-text" exact-active-class="teal" to="/edit">Edit</router-link>
          </li>
          <li class="tab">
            <router-link class="white-text" exact-active-class="teal" to="/edit/1">Edit Kayak</router-link>
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
