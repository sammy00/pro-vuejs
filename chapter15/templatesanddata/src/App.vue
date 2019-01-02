<template>
  <div class="container">
    <div class="card-panel light-blue white-text">
      <div>Name: {{ name }}</div>
    </div>
    <div class="card-panel white-text">
      <form>
        <label>Selected Names</label>
        <select class="browser-default" v-model="name">
          <option value="all">Everyone</option>
          <option v-for="n in allNames" v-bind:key="n" v-bind:value="n">Just {{ n}}</option>
        </select>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      allNames: ["Bob", "Alice", "Joe"],
      name: "Bob"
    };
  }
};
</script>