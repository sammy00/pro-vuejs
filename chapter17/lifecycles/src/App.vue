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
      <div class="row">
        <button class="btn" @click="doChange">Change</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

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
  beforeUpdate() {
    console.log(
      `beforeUpdate called. Checked: ${this.checked}` +
        ` Name: ${this.names[0]} List Elements: ` +
        this.$el.getElementsByTagName("li").length
    );
  },
  created() {
    console.log("created method called " + this.checked);
  },
  mounted() {
    this.$el.dataset.names.split(",").forEach(name => this.names.push(name));
  },
  updated() {
    console.log(
      `updated called. Checked: ${this.checked}` +
        ` Name: ${this.names[0]} List Elements: ` +
        this.$el.getElementsByTagName("li").length
    );
  },
  methods: {
    doChange() {
      this.checked = !this.checked;
      this.names.reverse();
      Vue.nextTick(() => console.log("Callback Invoked"));
    }
  }
};
</script>

