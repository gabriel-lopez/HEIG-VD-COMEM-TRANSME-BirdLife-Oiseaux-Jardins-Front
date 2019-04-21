<template>
  <v-footer
    dark
    height="auto">
    <v-card
      class="flex"
      flat
      tile>
      <v-card-title class="primary">

        <v-layout row wrap align-center>

          <v-flex xs12 md6 class="text-xs-center">
            <strong class="subheading">{{$t('social_networks')}}</strong>
          </v-flex>

          <v-flex xs12 md6 class="text-xs-center">
              <v-btn
                v-for="icon in icons"
                :key="icon.icon"
                class="mx-3"
                dark
                icon>
                <a v-bind:href="icon.link" target="_blank">
                  <v-icon
                    color="white"
                    size="24px">
                    {{ icon.icon }}
                  </v-icon>
                </a>
              </v-btn>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-actions class="grey darken-3 justify-center">
        &copy;&nbsp;{{ new Date().getFullYear() }}&nbsp;—&nbsp;<strong><a class="footer-text" href="https://www.birdlife.ch/" target="_blank">BirdLife</a></strong>
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
        { icon: 'fab fa-facebook', link: 'https://www.facebook.com/BirdLifeSuisse/' },
        { icon: 'fab fa-instagram', link: 'https://www.instagram.com/birdlife.ch/' },
        { icon: 'fab fa-youtube', link: 'https://www.youtube.com/user/SchweizerVogelschutz' },
        { icon: 'fab fa-twitter', link: 'https://twitter.com/SVS_BirdLife' }
      ]
    }
  }
}
</script>

<style scoped>
  .footer-text {
    color: inherit;
    text-decoration: inherit;
  }
</style>
