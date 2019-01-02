<template>
  <div class="container">
    <div class="card-panel light-blue white-text">
      <div>Name: {{ name }}</div>
      <div>Has Admin Access: {{ hasAdminAccess }}</div>
    </div>
    <div class="card-panel white-text">
      <form>
        <div class="row">
          <label>
            <input type="radio" v-model="name" value="Bob">
            <span>Bob</span>
          </label>
        </div>
        <div class="row">
          <label>
            <input type="radio" v-model="name" value="Alice">
            <span>Alice</span>
          </label>
        </div>
        <div class="row">
          <label>
            <input type="checkbox" v-model="hasAdminAccess">
            <span>Has Admin Access?</span>
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
      name: "Bob",
      hasAdminAccess: true
    };
  }
};
</script>