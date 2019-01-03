export default {
  state: {
    stripedTable: true,
    primaryEditButton: false,
    dangerDeleteButton: false,
  },
  getters: {
    editClass(state) {
      return state.primaryEditButton ? 'teal' : 'grey'
    },
    deleteClass(state) {
      return state.dangerDeleteButton ? 'red' : 'grey'
    },
    tableClass(state, payload, rootState) {
      return rootState.products.length > 0 && rootState.products[0].price > 500
        ? 'striped'
        : ''
    },
  },
  mutations: {
    setEditButtonColor(currentState, primary) {
      currentState.primaryEditButton = primary
    },
    setDeleteButtonColor(currentState, danger) {
      currentState.dangerDeleteButton = danger
    },
  },
}
