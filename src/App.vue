<template>
  <v-app>

    <Navigation/>

    <v-content>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-content>

  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: 'App',
  components: {
    Navigation
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>

</style>
