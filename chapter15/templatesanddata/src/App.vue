<template>
  <div class="container">
    <div class="card-panel white-text" :class="dataValue">
      <div>Value: {{ dataValue }}</div>
    </div>
    <div class="card-panel white-text">
      <form>
        <div class="row">
          <label>
            <input
              type="checkbox"
              v-model="dataValue"
              :true-value="darkColor"
              :false-value="lightColor"
            >
            <span>Dark Color</span>
          </label>
        </div>
        <div class="row">
          <label>Color</label>
          <select v-model="dataValue">
            <option :value="darkColor">Dark Color</option>
            <option :value="lightColor">Light Color</option>
          </select>
        </div>
        <div class="row">
          <label>
            <input type="radio" v-model="dataValue" :value="darkColor">
            <span>Dark Color</span>
          </label>
          <label>
            <input type="radio" v-model="dataValue" :value="lightColor">
            <span>Light Color</span>
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
      darkColor: "blue",
      lightColor: "orange",
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