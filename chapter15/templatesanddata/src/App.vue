<template>
  <div class="container">
    <div class="card-panel light-blue white-text">
      <div>Selected Cities: {{ cities }}</div>
    </div>
    <div class="card-panel white-text">
      <form>
        <div v-for="city in cityNames" v-bind:key="city">
          <label>
            <input type="checkbox" v-model="cities" v-bind:value="city">
            <span>{{city}}</span>
          </label>
        </div>
        <div>
          <button @click="reset" class="btn btn-info">Reset</button>
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
      cityNames: ["London", "New York", "Paris", "Berlin"],
      cities: []
    };
  },
  methods: {
    reset() {
      this.cities = [];
    }
  }
};
</script>