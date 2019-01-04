<template>
  <div class="card-panel">
    <h3 class="card-panel orange center-align white-text">Display</h3>
    <transition>
      <h4 v-if="show" class="card-panel teal center white-text">Hello, Adam</h4>
    </transition>
    <div class="row center">
      <button class="blue btn" @click="toggle">Toggle Visibility</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: true
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
.v-leave-active {
  opacity: 0;
  font-size: 0em;
  transition: all 250ms;
}
.v-enter {
  opacity: 0;
  font-size: 0em;
}
.v-enter-to {
  opacity: 1;
  font-size: x-large;
  transition: all 250ms;
}
</style>
