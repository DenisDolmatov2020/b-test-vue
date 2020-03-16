import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
      selectedItems: [],
  },
  mutations: {
    selectedItemMutation(state, payload) {
      state.selectedItems.push(payload)
    },
    removeItemMutation(state, payload) {
      state.selectedItems.splice(payload, 1);
    },
    removeItemsMutation(state) {
      state.selectedItems = []
    },
  },
  actions: {
    selectedItem(context, payload) {
        context.commit('selectedItemMutation', payload)
    },
    removeItem(context, payload) {
        context.commit('removeItemMutation', payload)
    },
    removeItems(context) {
        context.commit('removeItemsMutation')
    },
  },
  getters: {
    selectedItemsStore (state) {
      return state.selectedItems
    }
  }

})

