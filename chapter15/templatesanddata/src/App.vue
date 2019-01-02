<template>
  <div class="container">
    <div class="card-panel light-blue white-text">
      <div>Name: {{ name }}</div>
    </div>
    <div class="card-panel white-text">
      <form>
        <div v-for="n in allNames" v-bind:key="n">
          <label>
            <input type="radio" v-model="name" v-bind:value="n">
            <span>{{ n }}</span>
          </label>
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
      allNames: ["Bob", "Alice", "Joe"],
      name: "Bob"
    };
  }
};
</script>