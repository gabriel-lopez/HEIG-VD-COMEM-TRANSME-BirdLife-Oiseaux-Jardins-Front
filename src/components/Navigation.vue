<template>
  <div v-resize="onResize">
    <v-toolbar
      app
      light
      fixed
      clipped-right
    >
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <router-link to="/" class="toolbar-title">
        <v-toolbar-title class="headline text-uppercase">
          <!--<span>Action </span>-->
          <span class="font-weight-light">{{ $t('title') }}</span>
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in menu"
          :key="item.icon"
          :to= "item.link"
          flat
        >{{ $t(item.title) }}</v-btn>

        <LanguageSwitcher/>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      class="your-custom-class"
      v-model="drawer"
      fixed
      static
      disable-resize-watcher
      app
    >
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              {{ $t('menu') }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list class="pt-0">
        <v-list-tile
          v-for="item in menu"
          :key="item.title"
          :to="item.link"
          ripple>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ $t(item.title) }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-layout
          p-1
          row
          wrap
          class="text-xs-center">
          <v-flex xs-4>
            <v-avatar
              @click="currentLanguage = 'de'">
              <img src='@/assets/flags/de.svg'>
            </v-avatar>
          </v-flex>
          <v-flex xs-4>
            <v-avatar
              @click="currentLanguage = 'fr'">
              <img src='@/assets/flags/fr.svg'>
            </v-avatar>
          </v-flex>
          <v-flex xs-4>
            <v-avatar
              @click="currentLanguage = 'it'">
              <img src='@/assets/flags/it.svg'>
            </v-avatar>
          </v-flex>
        </v-layout>
      </v-list >
      <v-spacer></v-spacer>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher'

export default {
  name: 'Navigation',
  components: {
    LanguageSwitcher
  },
  data () {
    return {
      menu: [
        { icon: 'fa-home', title: 'home', link: '/' },
        { icon: 'fa-dove', title: 'birds', link: '/birds' },
        { icon: 'fa-graduation-cap', title: 'learn_with_zozo', link: '/game' },
        { icon: 'fa-binoculars', title: 'participate', link: '/participate' },
        { icon: 'fa-info-circle', title: 'about_us', link: '/about' }
      ],
      drawer: false
    }
  },
  methods: {
    onResize () {
      if (this.drawer) {
        console.log('open')
      }
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
  .toolbar-title {
    color: inherit;
    text-decoration: inherit;
  }
  .your-custom-class {
    display: flex;
    flex-direction: column;
  }
</style>
