<template>
  <div class="card-panel">
    <h3 class="card-panel orange center-align white-text">Display</h3>
    <transition enter-to-class="fadeIn" leave-to-class="fadeOut">
      <h4 v-if="show" class="animated card-panel teal center white-text">Hello, Adam</h4>
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
