<template>
  <div class="container">
    <div class="card-panel light-blue white-text">
      <div>Name: {{ name }}</div>
      <div>Password: {{ password }}</div>
      <div>Details: {{ details }}</div>
    </div>
    <div class="blue card-panel white-text">
      <form>
        <div class="row">
          <input type="text" v-model="name">
          <label for="name">Name</label>
        </div>
        <div class="row">
          <input type="password" v-model="password">
          <label>Password</label>
        </div>
        <div class="row">
          <textarea v-model="details"/>
          <label>Details</label>
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
      password: "secret",
      details: "Has admin access"
    };
  }
};
</script>