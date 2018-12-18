<template>
  <v-layout row wrap>
    <v-flex col sm12 md2>
      <v-select :items="pageSizes" v-model="currentPageSize" label="Page Size" solo></v-select>
    </v-flex>
    <v-flex col sm12 md10 text-xs-right>
      <v-btn icon :disabled="1==mCurrentPage" @click="setCurrentPage(mCurrentPage-1)">
        <v-icon>chevron_left</v-icon>
      </v-btn>
      <span v-if="mCurrentPage>4">
        <v-btn icon @click="setCurrentPage(1)" color="grey lighten-2">1</v-btn>
        <span>...</span>
      </span>
      <v-btn-toggle v-model="currentPageIndex">
        <v-btn v-for="i in pageNumbers" :key="i" @click="setCurrentPage(i)" flat>{{i}}</v-btn>
      </v-btn-toggle>
      <span v-if="mCurrentPage<=pageCount-4">...
        <v-btn icon @click="setCurrentPage(pageCount)" color="grey lighten-2">{{pageCount}}</v-btn>
      </span>
      <v-btn icon :disabled="pageCount==mCurrentPage" @click="setCurrentPage(mCurrentPage+1)">
        <v-icon>chevron_right</v-icon>
      </v-btn>
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
      if (this.pageCount < 4) {
        return [...Array(this.pageCount + 1).keys()].slice(1);
      } else if (this.mCurrentPage <= 4) {
        return [1, 2, 3, 4, 5];
      } else if (this.mCurrentPage > this.pageCount - 4) {
        return [...Array(5).keys()].reverse().map(v => this.pageCount - v);
      } else {
        return [
          this.mCurrentPage - 1,
          this.mCurrentPage,
          this.mCurrentPage + 1
        ];
      }
    },
    mCurrentPage: {
      get() {
        return this.currentPage;
      },
      set(value) {
        this.setCurrentPage(value);
      }
    },
    currentPageIndex: {
      get() {
        return this.mCurrentPage - 1;
      },
      set() {}
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