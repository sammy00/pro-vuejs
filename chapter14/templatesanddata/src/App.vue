<template>
  <div class="container-fluid">
    <div class="blue card-panel white-text">
      <h3 class="center-align" v-on:click="name = 'Clicked!'">{{ name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data: function() {
    return {
      name: "Lifejacket"
    };
  }
};
</script>