<template>
  <div class="container">
    <div
      class="card-panel teal white-text"
    >Name: {{ name }}, Category: {{ category }}, Price: {{ price }}</div>
    <div class="card-panel white-text">
      <form v-on:submit.prevent="handleSubmit">
        <div class="row">
          <label>Name</label>
          <input v-model="name">
        </div>
        <div class="row">
          <label>Category</label>
          <input v-model="category">
        </div>
        <div class="row">
          <label>Price</label>
          <input type="number" v-model.number="price">
        </div>
        <div class="row">
          <button class="btn" type="submit">Submit</button>
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
      name: "",
      category: "",
      price: 0
    };
  },
  methods: {
    handleSubmit() {
      console.log(
        `FORM SUBMITTED: ${this.name} ${this.category} ` + ` ${this.price}`
      );
    }
  }
};
</script>