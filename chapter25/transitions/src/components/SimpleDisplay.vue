<template>
  <div class="card-panel">
    <h3 class="card-panel orange center-align white-text">Display</h3>
    <transition enter-active-class="fadeIn" leave-active-class="fadeOut" mode="out-in">
      <h4 v-if="show" class="animated card-panel teal center white-text" key="hello">Hello, Adam</h4>
      <h4 v-else class="animated card-panel center green white-text" key="goodbye">Goodbye, Adam</h4>
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
