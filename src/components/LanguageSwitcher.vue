<template>

  <v-select
    flat
    :items="languages"
    label="Languages"
    v-model="currentLanguage"
    solo
  ></v-select>
</template>

<script>
  export default {
    name: 'LanguageSwitcher',
    data () {
      return {
        languages: [
          'de',
          'fr',
          'it'
        ],
        loading: true
      }
    },
    computed: {
      currentLanguage: {
        get () {
          return this.$store.state.language
        },
        set (value) {
          this.$store.commit('setLanguage', value)
          this.$i18n.locale = value
        }
      }
    }
  }
</script>

<style scoped>

</style>
