<template>
  <div id="app">
    <div class="card-panel red white-text" v-if="error.occurred">An Error Has Occurred
      <h4>Error : "{{ error.error }}" ({{ error.source }})</h4>
    </div>
    <div class="card-panel" v-else>
      <div class="row">
        <label>
          <input type="checkbox" v-model="checked">
          <span>Checkbox</span>
        </label>
      </div>
      Checked Value: {{ checked }}
      <div class="card-panel light-blue" v-if="checked">
        <message-display></message-display>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import MessageDisplay from "./components/MessageDisplay";

export default {
  name: "app",
  components: { MessageDisplay },

  data() {
    return {
      checked: true,
      error: {
        occurred: false,
        error: "",
        source: ""
      },
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
  errorCaptured(error, component, source) {
    this.error.occurred = true;
    this.error.error = error;
    this.error.source = source;
    return false;
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
  },
  watch: {
    checked(newValue, oldValue) {
      console.log(`Checked Watch, Old: ${oldValue}, New: ${newValue}`);
    }
  }
};
</script>

