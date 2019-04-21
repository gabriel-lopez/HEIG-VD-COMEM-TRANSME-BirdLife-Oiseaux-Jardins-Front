<template>

  <v-select
    flat
    :items="languages"
    label="Languages"
    v-model="currentLanguage"
    solo>

    <template slot="selection" slot-scope="data">
      <v-avatar>
        <img :src="imagePath(data.item)" alt="avatar">
      </v-avatar>
    </template>

    <template slot="item" slot-scope="data">
      <v-list-tile-avatar>
        <img :src="imagePath(data.item)" alt="avatar">
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title v-html="data.item"></v-list-tile-title>
      </v-list-tile-content>
    </template>

  </v-select>
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
  methods: {
    imagePath: function (lang) {
      return require('@/assets/flags/' + (lang === undefined ? this.currentLanguage : lang) + '.svg')
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
