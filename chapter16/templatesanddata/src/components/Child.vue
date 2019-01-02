<template>
  <div class="card-panel blue white-text">
    <h6 class="center-align">{{ message }}</h6>
    <div class="row">
      <label>{{ labelText }}</label>
      <input type="text" v-model="message">
    </div>
  </div>
</template>

<script>
export default {
  props: ["labelText"],
  data: function() {
    return {
      message: "This is the child component"
    };
  }
};
</script>
