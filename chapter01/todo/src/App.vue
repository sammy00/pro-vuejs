<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue">
        <a href="#" class="brand-logo center">{{name}}'s To Do List</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return { name: "Adam" };
  }
};
</script>
