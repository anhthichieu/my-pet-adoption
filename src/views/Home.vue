<template>
  <div class="home">HOME</div>
</template>

<script>
import cats from '@/data/cats';
// import dogs from '@/data/dogs';

export default {
  data: () => ({
    cats, // shorthand for 'cats: cats'
  }),
};
</script>
