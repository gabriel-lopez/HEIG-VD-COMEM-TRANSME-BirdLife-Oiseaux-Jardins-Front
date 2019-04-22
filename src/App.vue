<template>
  <v-app>

    <Navigation/>

    <v-content>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-content>

    <Footer/>

  </v-app>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default {
  name: 'App',
  metaInfo: {
    title: 'Default Title',
    titleTemplate: '%s • BirdLife Schweiz/Suisse/Svizzera'
  },
  components: {
    Navigation,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>

</style>
