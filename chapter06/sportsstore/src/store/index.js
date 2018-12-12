import Vue from 'vue'

import Axios from 'axios'
import Vuex from 'vuex'

import CartModule from './cart'

Vue.use(Vuex)

const baseUrl = 'http://localhost:3500'
const productsUrl = `${baseUrl}/products`
const categoriesUrl = `${baseUrl}/categories`

export default new Vuex.Store({
  strict: true,
  modules: { cart: CartModule },
  state: {
    products: [],
    categoriesData: [],
    productsTotal: 0,
    currentPage: 0,
    pageSize: 4,
    currentCategory: 'All',
  },
  actions: {
    async getData(context) {
      let pdata = (await Axios.get(productsUrl)).data
      let cdata = (await Axios.get(categoriesUrl)).data
      context.commit('setData', { pdata, cdata })
    },
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
      //return ['All', ...new Set(state.products.map((p) => p.category).sort())]
      return ['All', ...state.categoriesData]
    },
  },
  mutations: {
    setCurrentCategory(state, category) {
      console.log('hello' + category)
      state.currentCategory = category
      state.currentPage = 0
    },
    setCurrentPage(state, page) {
      state.currentPage = page
    },
    setData(state, data) {
      state.products = data.pdata
      state.productsTotal = data.pdata.length
      state.categoriesData = data.cdata.sort()
    },
    setPageSize(state, size) {
      state.pageSize = size
      state.currentPage = 0
    },
  },
})
