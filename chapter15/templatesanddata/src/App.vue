<template>
  <div class="container">
    <div class="card-panel white-text" :class="dataValue">
      <div>Value: {{ dataValue }}</div>
    </div>
    <div class="card-panel white-text">
      <form>
        <div class="row">
          <label>
            <input type="checkbox" v-model="dataValue" true-value="blue" false-value="orange">
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
      dataValue: "orange"
    };
  },
  methods: {
    reset() {
      this.dataValue = "orange";
    }
  }
};
</script>