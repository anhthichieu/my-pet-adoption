import Vue from 'vue'
import Vuex from 'vuex'
import cats from '@/data/cats';
import dogs from '@/data/dogs';

Vue.use(Vuex)

export default {
  state: () => ({
    cats,
    dogs
  }),
  mutations: {
    appendPet: (state, { species, pet }) => { state[species].push(pet) }
  },
  actions: {
    addPet: ({ commit }, payload) => { // payload is an object with 2 props pet and spieces
      commit('appendPet', payload)
    }
  },
  modules: {
  }
}
