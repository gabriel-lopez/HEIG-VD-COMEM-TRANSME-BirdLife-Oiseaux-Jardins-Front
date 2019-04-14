<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="primary">
        <v-spacer></v-spacer>
        <strong class="subheading">Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-actions class="grey darken-3 justify-center">
        &copy;&nbsp;{{ new Date().getFullYear() }}&nbsp;—&nbsp;<strong>BirdLife</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        icons: [
          { icon: 'fab fa-facebook' },
          { icon:'fab fa-instagram' },
          { icon:'fab fa-youtube' },
          { icon:'fab fa-twitter' }
        ]
      }
    }
  }
</script>
