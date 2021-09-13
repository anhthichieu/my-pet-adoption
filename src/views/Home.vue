<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend.</h1>
    <h5>Total no. of Animals ready for Adoption: {{ animalCount }}</h5>
    <h3>
      <font-awesome-icon icon="cat" />
      {{ getAllCats.length }} +
      <font-awesome-icon icon="dog" />
      {{ getAllDogs.length }}
    </h3>
    <button class="btn btn-primary" @click="togglePetForm">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          v-model="formData.species"
          id="input-3"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-1" label="Pet's Age:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="number"
          v-model="formData.age"
          placeholder="Enter age"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    formData: {
      age: undefined,
      name: '',
      species: null,
    },
    showPetForm: false,
  }),

  // computed: {
  //   animalCount() {
  //     return this.$store.getters.animalCount;
  //   },
  // },

  computed: {
    ...mapGetters(['animalCount', 'getAllCats', 'getAllDogs']),
  },

  methods: {
    // ...mapActions(['addPet']),

    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },

    async handleSubmit() {
      const { species, age, name } = this.formData;
      const payload = {
        species,
        pet: {
          species: species.slice(0, species.length - 1), // bo bot chu 's' o cuoi cats va dogs
          name,
          age,
        },
      };
      console.log('payload Thi Check', payload);
      await this.$store.dispatch('addPet', payload);
      // this.addPet(payload);

      // reset form after submit
      this.formData = {
        age: undefined,
        name: '',
        species: null,
      };
    },
  },
};
</script>
<style lang="sass" scoped>
form
  margin-top: 20px
</style>
