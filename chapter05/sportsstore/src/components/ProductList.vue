<template>
  <div>
    <ul class="collection">
      <li v-for="p in products" v-bind:key="p.id" class="collection-item">
        <h6 class="title">
          <span class="badge teal white-text">{{p.price | currency }}</span>
          {{p.name}}
        </h6>
        <span>{{ p.description}}</span>
      </li>
    </ul>
    <page-controls/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageControls from "./PageControls";

export default {
  components: { PageControls },
  computed: {
    //...mapState(["products"])
    ...mapGetters({ products: "processedProducts" })
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(value);
    }
  }
};
</script>