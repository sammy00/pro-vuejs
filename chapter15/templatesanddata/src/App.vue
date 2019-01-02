<template>
  <div class="container">
    <div class="card-panel light-blue white-text">
      <div>Name: **{{name}}**</div>
    </div>
    <div class="card-panel white-text">
      <form>
        <div class="row">
          <label>Name</label>
          <input type="text" v-model.trim="name">
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
      name: "Bob"
    };
  }
};
</script>