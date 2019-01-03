<template>
  <div class="row">
    <input v-model.number="value" :class="[colors.bg, colors.text]">
    <label>{{ formattedLabel }}</label>
  </div>
</template>

<script>
export default {
  props: ["label"],
  data: function() {
    return {
      value: "",
      formattedLabel: this.format(this.label)
    };
  },
  inject: {
    colors: "colors",
    format: {
      from: "labelFormatter",
      default: () => value => `Default ${value}`
    }
  }
};
</script>