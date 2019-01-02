<template>
  <div class="container">
    <div class="card-panel teal white-text">Value: {{ dataValue }}</div>
    <form>
      <div class="row">
        <label>
          <input type="checkbox" @change="handleChange">
          <span>Data Value</span>
        </label>
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
      dataValue: false
    };
  },
  methods: {
    handleChange($event) {
      this.dataValue = $event.target.checked;
    },
    reset() {
      this.dataValue = false;
    }
  }
};
</script>