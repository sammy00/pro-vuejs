<template>
  <div class="container">
    <div class="card-panel light-blue white-text">
      <div>Amount: {{ amount }}, Amount + 10 = {{ amount + 10 }}</div>
    </div>
    <div class="card-panel white-text">
      <form>
        <div class="row">
          <label>Amount</label>
          <input type="number" v-model.number.lazy="amount">
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
      amount: 100
    };
  }
};
</script>