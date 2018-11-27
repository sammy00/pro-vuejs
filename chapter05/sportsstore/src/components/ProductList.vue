<template>
  <div>
    <ul class="collection">
      <li v-for="p in products" v-bind:key="p.id" class="collection-item">
        <h6 class="title">
          <span class="badge teal white-text">{{p.price}}</span>
          {{p.name}}
        </h6>
        <span>{{ p.description}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["products"])
  }
};
</script>