<template>
  <div class="container-fluid">
    <div class="blue card-panel white-text">
      <h3 class="center-align" v-on:click="handleEvent">{{ name }}</h3>
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
  },
  methods: {
    handleEvent($event) {
      this.name = $event.type;
    }
  }
};
</script>