<template>
  <v-card color="cyan">
    <v-card-title>
      <span class="headline white--text">Categories</span>
    </v-card-title>
    <v-card-text>
      <div col sm12 v-for="c in categories" v-bind:key="c">
        <v-btn
          block
          small
          @click="setCurrentCategory(c)"
          :color="c == currentCategory ? 'primary':'success'"
        >{{ c }}</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["currentCategory"]),
    ...mapGetters(["categories"])
  },
  methods: {
    ...mapMutations(["setCurrentCategory"])
  }
};
</script>
