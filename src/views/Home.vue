<template>
  <div class="home">
    <h1>Adopt a new best friend.</h1>
    <h5>Total no. of Animals ready for Adoption: 8</h5>
    <button class="btn btn-primary" @click="togglePetForm">Add New Pet</button>

    <!-- WHY V-SHOW NOT WORKING?? -->

    <b-form @submit="onSubmit" @reset="onReset" v-show="showPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select id="input-3" :options="pets" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-1" label="Pet's Age:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="petAge"
          type="number"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
// import dogs from '@/data/dogs';

export default {
  data: () => ({
    name: '',
    pets: ['cats', 'dogs'],
    petAge: 0,
    showPetForm: false,
  }),
  methods: {
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
  },
};
</script>
<style lang="sass" scoped>
form
  margin-top: 20px
</style>
