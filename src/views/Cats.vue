<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table striped hover :items="cats">
      <template slot="name" slot-scope="data">
        <router-link :to="`/pets/${data.index}`"> {{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
// import cats from '@/data/cats';
import { mapState } from 'vuex';

export default {
  // data: () => ({
  //   cats, // shorthand for 'cats: cats'
  // }),
  computed: {
    // ...mapState({
    //   cats: (state) => state.store.cats,
    // }),
    ...mapState(['cats']),
  },
};
</script>
