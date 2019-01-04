<template>
  <tfoot>
    <transition @enter="enter" mode="out-in">
      <tr v-if="showAdd" key="addCancel">
        <td></td>
        <td>
          <input type="text" v-model="currentItem">
        </td>
        <td>
          <button id="add" class="btn btn-small" @click="handleAdd">Add</button>
          &nbsp;
          <button
            id="cancel"
            class="btn btn-small grey"
            @click="showAdd = false"
          >Cancel</button>
        </td>
      </tr>
      <tr v-else key="show">
        <td colspan="4" class="text-center p-2">
          <button class="btn btn-info" v-on:click="showAdd = true">Show Add</button>
        </td>
      </tr>
    </transition>
  </tfoot>
</template>

<script>
import { styler, tween } from "popmotion";

export default {
  data: function() {
    return {
      showAdd: false,
      currentItem: ""
    };
  },
  methods: {
    enter(el, done) {
      if (this.showAdd) {
        let t = tween({
          from: { opacity: 0 },
          to: { opacity: 1 },
          duration: 250
        });
        t.start({
          update: styler(el).set,
          complete: done
        });
      }
    },
    handleAdd() {
      this.$emit("add", this.currentItem);
      this.showAdd = false;
    }
  }
};
</script>
