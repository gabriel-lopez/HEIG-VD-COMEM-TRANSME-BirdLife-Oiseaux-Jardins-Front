<template>
  <div class="home">
    <Jumbotron/>
    <Birds/>
  </div>
</template>

<script>
  import Birds from '../components/Birds'
  import Jumbotron from "../components/Jumbotron";

  export default {
    name: 'home',
    components: {
      Birds,
      Jumbotron
    }
  }
</script>

<style scoped>

</style>
