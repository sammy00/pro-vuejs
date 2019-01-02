<template>
  <div class="container">
    <div class="card-panel white-text" :class="elemClass">
      <div>Value: {{ elemClass }}</div>
    </div>
    <div class="card-panel white-text">
      <form>
        <div class="row">
          <label>
            <input type="checkbox" v-model="dataValue">
            <span>Dark Color</span>
          </label>
        </div>
        <div class="row">
          <button @click="reset" class="btn">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      dataValue: false
    };
  },
  computed: {
    elemClass() {
      return this.dataValue ? "blue" : "orange";
    }
  }
};
</script>