<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <error-display/>
      </div>
      <div class="row">
        <label>
          <input
            type="radio"
            value="table"
            v-model="selected"
            :class="{active: (selected == 'table')}"
          >
          <span>Table</span>
        </label>
        <label>
          <input
            type="radio"
            value="editor"
            v-model="selected"
            :class="{active: (selected == 'table')}"
          >
          <span>Editor</span>
        </label>
      </div>

      <div class="row">
        <!-- eslint-disable-next-line -->
        <component :is="selectedComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorDisplay from "./components/ErrorDisplay";
import ProductDisplay from "./components/ProductDisplay";
import ProductEditor from "./components/ProductEditor";

export default {
  name: "App",
  // eslint-disable-next-line
  components: { ErrorDisplay, ProductDisplay, ProductEditor },
  data: function() {
    return {
      selected: "table"
    };
  },
  computed: {
    selectedComponent() {
      return this.selected == "table" ? ProductDisplay : ProductEditor;
    }
  },
  created() {
    this.$store.dispatch("getProductsAction");
  }
};
</script>