<template>
  <v-container>
    <v-layout row wrap>
      <v-flex col sm12>
        <v-card color="grey">
          <h1 class="text-xs-center">Orders</h1>
        </v-card>
      </v-flex>
      <v-flex col sm12>
        <v-checkbox color="primary" label="Show Shipped Orders" v-model="showShipped"></v-checkbox>
      </v-flex>
      <v-flex col sm12>
        <v-data-table hide-actions :headers="headers" :items="displayOrders">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ `${props.item.city}, ${props.item.zip}` }}</td>
            <td>{{ getTotal(props.item) | currency }}</td>
            <td>
              <v-btn
                small
                @click="shipOrder(props.item)"
                color="error"
              >{{ props.item.shipped ? 'Not Shipped' : 'Shipped' }}</v-btn>
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data: function() {
    return {
      showShipped: false,
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "City, Zip", value: "cityZip" },
        { text: "Total", value: "total" }
      ]
    };
  },
  computed: {
    ...mapState({ orders: state => state.orders.orders }),
    displayOrders() {
      return this.showShipped
        ? this.orders
        : this.orders.filter(o => o.shipped != true);
    }
  },
  methods: {
    ...mapMutations(["changeOrderShipped"]),
    ...mapActions(["getOrders", "updateOrder"]),
    getTotal(order) {
      if (order.cartLines != null && order.cartLines.length > 0) {
        return order.cartLines.reduce(
          (total, line) => total + line.quantity * line.product.price,
          0
        );
      } else {
        return 0;
      }
    },
    shipOrder(order) {
      this.updateOrder(order);
    }
  },
  created() {
    this.getOrders();
  }
};
</script>
