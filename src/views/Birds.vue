<template>
  <div>
    <h1>Birds</h1>
    <BirdsList/>
  </div>
</template>

<script>
  import BirdsList from '../components/BirdsList'

  export default {
    name: 'Birds',
    components: {
      BirdsList
    },
    mounted() {
      console.log("Birds mounted")
    },
  };
</script>

<style scoped>

</style>
