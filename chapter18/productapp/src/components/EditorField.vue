<template>
  <div class="input-field">
    <input v-model.number="value" class="form-control">
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
  }
};
</script>

<!--Listing 18-7. The Contents of the EditorField.vue File-->