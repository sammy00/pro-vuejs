<template>
  <div class="row">
    <input v-model.number="value" :class="[colors.bg, colors.text]">
    <label>{{ formattedLabel }}</label>
  </div>
</template>

<script>
export default {
  props: ["editorFor", "label"],
  data: function() {
    return {
      value: "",
      formattedLabel: this.format(this.label)
    };
  },
  inject: {
    colors: "colors",
    editingEventBus: "editingEventBus",
    format: {
      from: "labelFormatter",
      default: () => value => `Default ${value}`
    }
  },
  watch: {
    value(newValue) {
      this.editingEventBus.$emit("change", {
        name: this.editorFor,
        value: this.value
      });
    }
  },
  created() {
    this.editingEventBus.$on("target", p => (this.value = p[this.editorFor]));
  }
};
</script>