<template>
  <div class="row">
    <input v-model.number="value" :class="[colors.bg, colors.text]">
    <label for="value">{{label}}</label>
  </div>
</template>

<script>
export default {
  props: ["label"],
  data: function() {
    return {
      value: ""
    };
  },
  inject: ["colors"]
};
</script>