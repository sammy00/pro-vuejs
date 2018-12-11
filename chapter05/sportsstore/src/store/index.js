import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const testData = []

for (let i = 1; i <= 10; i++) {
  testData.push({
    id: i,
    name: `Product #${i}`,
    category: `Category ${i % 3}`,
    description: `This is Product #${i}`,
    price: i * 50,
  })
}

export default new Vuex.Store({
  strict: true,
  state: {
    products: testData,
    productsTotal: testData.length,
    //currentPage: 1,
    currentPage: 0,
    pageSize: 4,
    currentCategory: 'All',
  },
  getters: {
    productsFilteredByCategory(state) {
      return state.products.filter(
        (p) =>
          'All' == state.currentCategory || p.category == state.currentCategory
      )
    },
    processedProducts: (state, getters) => {
      let index = state.currentPage * state.pageSize
      //return state.products.slice(index, index + state.pageSize)
      return getters.productsFilteredByCategory.slice(
        index,
        index + state.pageSize
      )
    },
    pageCount(state, getters) {
      //Math.ceil(state.productsTotal / state.pageSize),
      return Math.ceil(
        getters.productsFilteredByCategory.length / state.pageSize
      )
    },
    categories(state) {
      return ['All', ...new Set(state.products.map((p) => p.category).sort())]
    },
  },
  mutations: {
    setCurrentCategory(state, category) {
      state.currentCategory = category
      state.currentPage = 1
    },
    setCurrentPage(state, page) {
      state.currentPage = page
    },
    setPageSize(state, size) {
      state.pageSize = size
      state.currentPage = 1
    },
  },
})
