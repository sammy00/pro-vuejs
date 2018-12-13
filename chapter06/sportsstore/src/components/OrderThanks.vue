<template>
  <v-app>
    <v-layout row wrap>
      <v-flex col sm12>
        <div class="text-xs-center">
          <h2>Thanks!</h2>
          <p>Thanks for placing your order, which is #{{orderId}}.</p>
          <p>We'll ship your goods as soon as possible.</p>
          <v-btn to="/" color="primary">Return to Store</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  computed: {
    orderId() {
      return this.$route.params.id;
    }
  }
};
</script>
