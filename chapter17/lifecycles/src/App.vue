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
      <div class="card-panel light-blue">Names:
        <ul>
          <li v-for="name in names" v-bind:key="name">{{ name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      checked: true,
      names: []
    };
  },
  beforeCreate() {
    console.log("beforeCreate method called " + this.checked);
  },
  created() {
    console.log("created method called" + this.checked);
  },
  mounted() {
    this.$el.dataset.names.split(",").forEach(name => this.names.push(name));
  }
};
</script>
