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
    dogs
  }),
})
