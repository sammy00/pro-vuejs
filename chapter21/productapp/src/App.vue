<template>
  <div id="app">
    <div class="container">
      <div class="row center">
        <button class="btn" @click="selectComponent('table')">Standard Features</button>
        &nbsp;
        <button class="btn green" @click="selectComponent('summary')">Advanced</button>
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
import LoadingMessage from "./components/LoadingMessage";
import ProductDisplay from "./components/ProductDisplay";
import ProductEditor from "./components/ProductEditor";

const DataSummary = () => ({
  component: import("./components/DataSummary"),
  loading: LoadingMessage,
  delay: 100
});

import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  // eslint-disable-next-line
  components: { DataSummary, ErrorDisplay, ProductDisplay, ProductEditor },
  computed: {
    ...mapState({
      selected: state => state.nav.selected
    }),
    selectedComponent() {
      switch (this.selected) {
        case "table":
          return ProductDisplay;
        case "editor":
          return ProductEditor;
        case "summary":
          return DataSummary;
      }

      return null;
    }
  },
  methods: {
    ...mapMutations({
      selectComponent: "nav/selectComponent"
    })
  },
  created() {
    this.$store.dispatch("getProductsAction");
  }
};
</script>