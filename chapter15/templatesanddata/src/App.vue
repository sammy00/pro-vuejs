<template>
  <div class="container">
    <div class="card-panel teal white-text">
      <div>Value: {{ dataValue }}</div>
      <div>Other Value: {{ otherValue || "(Empty)" }}</div>
    </div>

    <form>
      <div class="row">
        <label>
          <input type="checkbox" @change="handleChange" :checked="dataValue">
          <span>Data Value</span>
        </label>
      </div>
      <div class="input-field">
        <input type="text" @input="handleChange" :value="otherValue">
      </div>
      <div class="row">
        <button class="btn grey" type="reset" @click="reset">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      dataValue: false,
      otherValue: ""
    };
  },
  methods: {
    handleChange($event) {
      if ($event.target.type == "checkbox") {
        this.dataValue = $event.target.checked;
      } else {
        this.otherValue = $event.target.value;
      }
    },
    reset() {
      this.dataValue = false;
    }
  }
};
</script>