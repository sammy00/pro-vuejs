<template>
  <tfoot>
    <transition v-on:beforeEnter="beforeEnter" v-on:after-enter="afterEnter" mode="out-in">
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
export default {
  data: function() {
    return {
      showAdd: false,
      currentItem: ""
    };
  },
  methods: {
    afterEnter(el) {
      el.classList.remove("animated", "fadeIn");
    },
    beforeEnter(el) {
      if (this.showAdd) {
        el.classList.add("animated", "fadeIn");
      }
    },
    handleAdd() {
      this.$emit("add", this.currentItem);
      this.showAdd = false;
    }
  }
};
</script>
