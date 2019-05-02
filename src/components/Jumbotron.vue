<template>
  <div>
    <img v-if="currentLanguage === 'fr'" src="@/assets/banniere2019_old.svg" />
    <img v-if="currentLanguage === 'de'" src="@/assets/banniere2019_de.svg" />
    <br/>
  </div>
</template>

<script>
export default {
  name: 'Jumbotron',
  computed: {
    currentLanguage: {
      get () {
        return this.$store.state.language
      }
    }
  }
}
</script>

<style scoped>

</style>
