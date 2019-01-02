<template>
  <div class="container">
    <div class="card-panel red white-text" v-if="errors">
      <h5>The following problems have been found:</h5>
      <ul class="browser-default">
        <template v-for="(errors) in validationErrors">
          <li v-for="error in errors" v-bind:key="error">{{error}}</li>
        </template>
      </ul>
    </div>
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
import validation from "./validationRules";
import Vue from "vue";

export default {
  name: "MyComponent",
  data() {
    return {
      name: "",
      category: "",
      price: 0,
      validationErrors: {}
    };
  },
  computed: {
    errors() {
      return Object.values(this.validationErrors).length > 0;
    }
  },

  methods: {
    validate(propertyName, value) {
      let errors = [];
      Object(validation)[propertyName].forEach(v => {
        if (!v.validator(value)) {
          errors.push(v.message);
        }
      });
      if (errors.length > 0) {
        Vue.set(this.validationErrors, propertyName, errors);
      } else {
        Vue.delete(this.validationErrors, propertyName);
      }
    },
    validateAll() {
      this.validate("name", this.name);
      this.validate("category", this.category);
      this.validate("price", this.price);
      return this.errors;
    },
    handleSubmit() {
      if (this.validateAll()) {
        console.log(
          `FORM SUBMITTED: ${this.name} ${this.category} ` + ` ${this.price}`
        );
      }
    }
  }
};
</script>