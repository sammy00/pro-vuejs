<template>
  <div v-if="error" class="card-panel red white-text center">
    <h3>An Error Has Occurred</h3>
    <h6>{{ message }}</h6>
    <a href="/" class="btn grey">OK</a>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      error: false,
      message: ""
    };
  },
  methods: {
    handleError(err) {
      this.error = true;
      this.message = err;
    }
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("httpError", this.handleError);
  }
};
</script>
