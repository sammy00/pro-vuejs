<template>
  <div class="card-panel">
    <h3 class="card-panel center-align white-text teal">My List</h3>
    <table class="table-small">
      <tr>
        <th>#</th>
        <th>Item</th>
        <th></th>
      </tr>
      <transition-group
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        move-class="time"
        tag="tbody"
      >
        <tr v-for="(item, i) in items" :key="item">
          <td>{{i}}</td>
          <td>{{item}}</td>
          <td>
            <button class="btn btn-sm btn-info" @click="moveItem(i)">Move</button>
            &nbsp;
            <button class="btn btn-sm btn-danger" @click="removeItem(i)">Delete</button>
          </td>
        </tr>
      </transition-group>
      <controls v-on:add="addItem"/>
    </table>
  </div>
</template>

<script>
import Controls from "./ListMakerControls";
export default {
  components: { Controls },
  data: function() {
    return {
      items: ["Apples", "Oranges", "Grapes"]
    };
  },
  methods: {
    addItem(item) {
      this.items.push(item);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    moveItem(index) {
      this.items.push(...this.items.splice(index, 1));
    }
  }
};
</script>

<style>
.time {
  transition: all 250ms;
}
</style>
