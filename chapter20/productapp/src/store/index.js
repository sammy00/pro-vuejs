import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    products: [
      {
        id: 1,
        name: 'Product #1',
        category: 'Test',
        price: 100,
      },
      {
        id: 2,
        name: 'Product #2',
        category: 'Test',
        price: 150,
      },
      {
        id: 3,
        name: 'Product #3',
        category: 'Test',
        price: 200,
      },
    ],
  },
  getters: {
    orderedProducts(state) {
      return state.products.concat().sort((p1, p2) => p2.price - p1.price)
    },
    filteredProducts(state, getters) {
      return getters.orderedProducts.filter((p) => p.price > 100)
    },
  },
  mutations: {
    saveProduct(currentState, product) {
      let index = currentState.products.findIndex((p) => p.id == product.id)
      if (index == -1) {
        currentState.products.push(product)
      } else {
        Vue.set(currentState.products, index, product)
      }
    },
    deleteProduct(currentState, product) {
      let index = currentState.products.findIndex((p) => p.id == product.id)
      currentState.products.splice(index, 1)
    },
  },
})
