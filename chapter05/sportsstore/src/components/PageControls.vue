<template>
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
        <a href="#!">{{i}}</a>
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

  <!--
  <div v-if="pageCount > 1" class="text-right">
    <div class="btn-group mx-2">
      <button
        v-for="i in pageNumbers"
        v-bind:key="i"
        class="btn btn-secpmdary"
        v-bind:class="{ 'btn-primary': i == currentPage }"
      >{{ i }}</button>
    </div>
  </div>
  -->
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["currentPage"]),
    ...mapGetters(["pageCount"]),
    pageNumbers() {
      return [...Array(this.pageCount + 1).keys()].slice(1);
    }
  }
};
</script>