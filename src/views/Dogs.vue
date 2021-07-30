<template>
  <div>
    <pet-table :species="'Dogs'" :pets="dogs"></pet-table>
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
  //     dogs: (state) => state.myPets.dogs,
  //   }),
  // },

  computed: {
    ...mapState(['dogs']),
  },
};
</script>
