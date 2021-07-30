<template>
  <div>
    <pet-table :species="'Cats'" :pets="cats"></pet-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PetTable from '../components/PetTable.vue';

export default {
  components: { PetTable },

  data: () => ({}),

  // computed: {
  //   ...mapState({
  //     cats: (state) => state.myPets.cats,
  //   }),
  // },

  computed: {
    ...mapState(['cats']),
  },
};
</script>
