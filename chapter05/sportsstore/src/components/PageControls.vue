<template>
  <div class="row">
    <div class="input-field col s6">
      <select v-on:change="changePageSize">
        <option value="4">4 per page</option>
        <option value="8">8 per page</option>
        <option value="12">12 per page</option>
      </select>
      <label>Page Size</label>
    </div>
    <div class="right">
      <ul class="pagination">
        <!--
      <li v-bind:class="{ 'disabled': 1==currentPage}">
        <a href="#!">
          <i class="material-icons">chevron_left</i>
        </a>
      </li>
        -->
        <li
          v-for="i in pageNumbers"
          v-bind:key="i"
          class="waves-effect"
          v-bind:class="{ 'active': i==currentPage}"
        >
          <a href="#!" v-on:click="setCurrentPage(i)">{{i}}</a>
        </li>
        <!--
      <li class="waves-effect">
        <a href="#!">
          <i class="material-icons">chevron_right</i>
        </a>
      </li>
        -->
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["currentPage"]),
    ...mapGetters(["pageCount"]),
    pageNumbers() {
      return [...Array(this.pageCount + 1).keys()].slice(1);
    }
  },
  methods: {
    ...mapMutations(["setCurrentPage", "setPageSize"]),
    changePageSize($event) {
      this.setPageSize(Number($event.target.value));
    }
  }
};
</script>