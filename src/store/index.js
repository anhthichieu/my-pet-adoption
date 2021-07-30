import Vue from 'vue'
import Vuex from 'vuex'
// import myPets from './myPets'

import cats from '@/data/cats';
import dogs from '@/data/dogs';

Vue.use(Vuex)

export default new Vuex.Store({
  // modules: {
  //   myPets
  // }

  state: () => ({
    cats,
    dogs,
    pets: [...cats, ...dogs]
  }),
  mutations: {
    appendPet: (state, { species, pet }) => { state[species].push(pet) }
  },
  actions: {
    addPet: ({ commit }, payload) => {
      commit('appendPet', payload)
    }
  },
  getters: {
    animalCount: state => {
      return state.pets.length;
    },
    getAllCats: (state, getters) => {
      return state.pets.filter(pet => { return pet.species === 'cat' })
    },
    getAllDogs: state => {
      return state.dogs
    }
  }
})
