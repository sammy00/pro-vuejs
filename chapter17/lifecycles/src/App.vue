<template>
  <div id="app">
    <div class="card-panel">
      <div class="row">
        <label>
          <input type="checkbox" v-model="checked">
          <span>Checkbox</span>
        </label>
      </div>
      Checked Value: {{ checked }}
    </div>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  //components: {
  //  HelloWorld
  //}
  data() {
    return {
      checked: true
    };
  },
  beforeCreate() {
    console.log("beforeCreate method called " + this.checked);
  },
  created() {
    console.log("created method called" + this.checked);
  }
};
</script>
