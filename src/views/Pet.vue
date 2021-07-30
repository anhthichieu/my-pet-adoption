<template>
  <div>
    <!-- <h1>{{ pet[id].name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ pet[id].age }} years old</p>
    <p>Breed: {{ pet[id].breed }}</p> -->

    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      animal: {},
    };
  },
  // my solution is commented
  // computed: {
  //   pet() {
  //     return this.$route.params.species === 'cats'
  //       ? this.$store.state.myPets.cats
  //       : this.$store.state.myPets.dogs;
  //   },
  //   id() {
  //     return this.$route.params.id;
  //   },
  // },
  // computed: {
  //   ...mapState({
  //     cats: (state) => state.myPets.cats,
  //     dogs: (state) => state.myPets.dogs,
  //   }),
  // },

  computed: {
    ...mapState(['cats', 'dogs']),
  },
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id];
    // this is equal to this['cat'] (bracket notation to access object property)
    // can also be written as this.cats
    this.animal = animal;
  },
};
</script>
