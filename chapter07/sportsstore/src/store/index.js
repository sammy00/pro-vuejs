import Vue from 'vue'

import Axios from 'axios'
import Vuex from 'vuex'

import CartModule from './cart'
import OrdersModule from './orders'

Vue.use(Vuex)

const baseUrl = 'http://localhost:3500'
const productsUrl = `${baseUrl}/products`
const categoriesUrl = `${baseUrl}/categories`

export default new Vuex.Store({
  strict: true,
  modules: { cart: CartModule, orders: OrdersModule },
  state: {
    //products: [],
    categoriesData: [],
    //productsTotal: 0,
    currentPage: 1,
    currentCategory: 'All',
    pages: [],
    pageSize: 4,
    serverPageCount: 0,
  },
  actions: {
    async getData(context) {
      await context.dispatch('getPage', 2)
      context.commit('setCategories', (await Axios.get(categoriesUrl)).data)
    },
    async getPage(context, getPageCount = 1) {
      let url =
        `${productsUrl}?_page=${context.state.currentPage}` +
        `&_limit=${context.state.pageSize * getPageCount}`
      if (context.state.currentCategory != 'All') {
        url += `&category=${context.state.currentCategory}`
      }
      let response = await Axios.get(url)
      context.commit('setPageCount', response.headers['x-total-count'])
      context.commit('addPage', {
        number: context.state.currentPage,
        data: response.data,
        pageCount: getPageCount,
      })
    },
    setCurrentCategory(context, category) {
      context.commit('clearPages')
      context.commit('_setCurrentCategory', category)
      context.dispatch('getPage', 2)
    },
    setCurrentPage(context, page) {
      context.commit('_setCurrentPage', page)
      if (!context.state.pages[page]) {
        context.dispatch('getPage')
      }
    },
    setPageSize(context, size) {
      context.commit('clearPages')
      context.commit('_setPageSize', size)
      context.dispatch('getPage', 2)
    },
  },
  getters: {
    //productsFilteredByCategory(state) {
    //  return state.products.filter(
    //    (p) =>
    //      'All' == state.currentCategory || p.category == state.currentCategory
    //  )
    //},
    processedProducts: (state) => state.pages[state.currentPage],
    pageCount: (state) => state.serverPageCount,
    categories: (state) => ['All', ...state.categoriesData],
  },
  mutations: {
    addPage(state, page) {
      for (let i = 0; i < page.pageCount; i++) {
        Vue.set(
          state.pages,
          page.number + i,
          page.data.slice(
            i * state.pageSize,
            i * state.pageSize + state.pageSize
          )
        )
      }
    },
    clearPages(state) {
      state.pages.splice(0, state.pages.length)
    },
    setCategories(state, categories) {
      state.categoriesData = categories
    },
    setPageCount(state, count) {
      state.serverPageCount = Math.ceil(Number(count) / state.pageSize)
    },
    _setCurrentCategory(state, category) {
      state.currentCategory = category
      state.currentPage = 1
    },
    _setCurrentPage(state, page) {
      state.currentPage = page
    },
    //setData(state, data) {
    //  state.products = data.pdata
    //  state.productsTotal = data.pdata.length
    //  state.categoriesData = data.cdata.sort()
    //},
    _setPageSize(state, size) {
      state.pageSize = size
      state.currentPage = 1
    },
  },
})
