<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs"></b-table>
  </div>
</template>

<script>
// import dogs from '@/data/dogs';
import { mapState } from 'vuex';

export default {
  // data: () => ({
  //   dogs, // shorthand for 'dogs: dogs'
  // }),
  computed: {
    ...mapState({
      dogs: (state) => state.store.dogs,
    }),
  },
};
</script>
