import { getProductsList } from '@/api/products'

const namespaced = true

const state = {
  products: []
}

const getters = {
  PRODUCTS: state => state.products,
}

const mutations = {
  SET_PRODUCTS_LIST: (state, payload) => {
    state.products = payload
  }
}

const actions = {
  GET_PRODUCTS_LIST ({ commit }, payload) {
    return new Promise((resolve, reject) => {
        getProductsList(payload.searchParams, payload.filterParams)
        .then(response => {
          commit('SET_PRODUCTS_LIST', response)
          resolve(response)
        })
        .catch(err => {
          commit('SET_PRODUCTS_LIST', [])
          reject(err)
        })
      })
  }
}

export default {
  state, getters, mutations, actions, namespaced
} 