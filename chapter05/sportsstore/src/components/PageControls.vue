<template>
  <v-layout row wrap>
    <v-flex col sm12 md2>
      <v-select :items="pageSizes" v-model="currentPageSize" label="Page Size" solo></v-select>
    </v-flex>
    <v-flex col sm12 md10 text-xs-right>
      <v-btn-toggle v-model="currentPage">
        <v-btn
          v-for="(i,index) in pageNumbers"
          :key="index"
          @click="setCurrentPage(index)"
          flat
        >{{i}}</v-btn>
      </v-btn-toggle>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      pageSizes: [
        { text: "4 per page", value: 4 },
        { text: "8 per page", value: 8 },
        { text: "12 per page", value: 12 }
      ],
      currentPageSize: null
    };
  },
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
  },
  watch: {
    currentPageSize: function(to) {
      if (to) {
        this.setPageSize(Number(to));
      }
    }
  }
};
</script>