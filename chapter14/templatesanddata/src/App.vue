<template>
  <div class="container-fluid">
    <div class="blue card-panel white-text">
      <h3 class="center-align" v-on:click="handleEvent('Soccer Ball', $event)">{{ name }}</h3>
    </div>
    <div class="blue card-panel white-text">
      <h3 class="center-align" v-on:click="handleEvent('Stadium', $event)">{{ name }}</h3>
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
    handleEvent(name, $event) {
      this.name = `${name} - ${$event.type}`;
    }
  }
};
</script>