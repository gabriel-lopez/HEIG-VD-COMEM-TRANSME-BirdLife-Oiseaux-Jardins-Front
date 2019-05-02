<template>
  <v-layout
    mt-2>
    <v-select
      class="max-width"
      background-color="#f5f5f5"
      flat
      :items="languages"
      label="Languages"
      v-model="currentLanguage"
      solo
      single-line>

      <template slot="selection" slot-scope="data">
        <v-avatar>
          <img :src="imagePath(data.item)">
        </v-avatar>
      </template>

      <template slot="item" slot-scope="data">
        <v-list-tile-avatar>
          <img :src="imagePath(data.item)">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="data.item"></v-list-tile-title>
        </v-list-tile-content>
      </template>
    </v-select>
  </v-layout>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data () {
    return {
      languages: [
        'de',
        'fr'
        // 'it'
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
.max-width {
  max-width: 100px;
}
</style>
