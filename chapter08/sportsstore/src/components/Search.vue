<template>
  <v-layout row wrap v-if="showSearch">
    <v-flex col sm10>
      <v-text-field
        solo
        append-icon="search"
        append-outer-icon="close"
        @click:append-outer="handleClose"
        placeholder="Enter search term..."
        v-bind:value="searchTerm"
        @input="doSearch"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["showSearch", "searchTerm"])
  },
  methods: {
    ...mapMutations(["setShowSearch"]),
    ...mapActions(["clearSearchTerm", "search"]),
    handleClose() {
      this.clearSearchTerm();
      this.setShowSearch(false);
    },
    //doSearch($event) {
    //  this.search($event.target.value);
    //}
    doSearch(searchTerm) {
      this.search(searchTerm);
    }
  }
};
</script>
