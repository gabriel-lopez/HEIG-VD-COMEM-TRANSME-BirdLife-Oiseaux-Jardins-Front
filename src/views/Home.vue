<template>
  <div class="home">
    <Jumbotron/>

    <v-container>
      <h1 class="text-xs-center primary--text">{{$t('slogan')}}</h1>
    </v-container>

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 class="text-xs-justify">
          <v-card class="elevation-0 bg-grey">
            <v-card-title primary-title class="layout justify-center">
              <img class="logo-size" v-if="currentLanguage === 'fr'" src="@/assets/action_logo.svg" />
              <img class="logo-size" v-if="currentLanguage === 'de'" src="@/assets/LogoAktion.svg" />
            </v-card-title>
            <v-card-text>
              <p v-html="$t('home_action_line_1')"></p>
              <p v-html="$t('home_action_line_2')"></p>
              <p v-html="$t('home_action_line_3')"></p>
              <p v-html="$t('home_action_line_4')"></p>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md6 class="text-xs-left bg-grey">
          <v-card class="elevation-0 bg-grey">
            <v-card-title primary-title class="layout justify-center">
              <img class="logo-size" src="@/assets/birdlife_logo.svg"/>
            </v-card-title>
            <v-card-text>
              <p v-html="$t('home_birdlife_line_1')"></p>
              <p v-html="$t('home_birdlife_line_2')"></p>
              <p v-html="$t('home_birdlife_line_3')"></p>
              <p v-html="$t('home_birdlife_line_4')"></p>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron'

export default {
  name: 'home',
  components: {
    Jumbotron
  },
  metaInfo () {
    return {
      title: this.metaInfo
    }
  },
  data () {
    return {
      metaInfo: ''
    }
  },
  watch: {
    title () {
      //
    }
  },
  computed: {
    title () {
      this.metaInfo = this.$i18n.t('title')
      return this.metaInfo
    },
    currentLanguage: {
      get () {
        return this.$store.state.language
      }
    }
  }
}
</script>

<style scoped>
.logo-size {
  width: 50vh;
  min-height: 200px;
  max-height: 200px;
}
.bg-grey {
  background: #fafafa;
;
}
</style>
