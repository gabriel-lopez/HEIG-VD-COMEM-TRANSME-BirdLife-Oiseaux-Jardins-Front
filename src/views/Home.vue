<template>
  <div class="home">
    <Jumbotron/>

    <v-container>
      <h1 class="text-xs-center primary--text">Une heure pour la biodiversité</h1>
    </v-container>

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 class="text-xs-justify">
          <v-card class="elevation-0 bg-grey">
            <v-card-title primary-title class="layout justify-center">
              <img class="logo-size" src="@/assets/action_logo.svg"/>
            </v-card-title>
            <v-card-text>
              <p>Quel est l’oiseau qui te réveille tous les matins? Combien d’espèces nichent autour de chez toi? Grâce à l’action “Oiseaux de nos jardins”, tu peux te poser une heure dans ton jardin ou dans un parc proche de chez toi et observer les oiseaux.</p>
              <p>Une heure de ton temps pour la biodiversité, c’est pour nous des données précieuses. En 2017, les participants ont observé plus de 35’000 oiseaux de 127 espèces différentes. Alors pour cette année, grâce à toi on peut en observer encore plus!</p>
              <p>Pour <router-link to="/participate">participer</router-link>, rien de plus simple. Il te suffit de trouver un endroit tranquille dans ton jardin ou pas trop loin de chez toi et d’ <router-link to="/birds">observer et noter</router-link>  les oiseaux que tu aperçois.</p>
              <p>L’action “Oiseaux de nos jardins” se déroule chaque année dans toute la Suisse. Elle a pour objectif de mieux protéger les oiseaux et la biodiversité. Depuis sa création en 2015, BirdLife Suisse a ainsi pu récolter de précieuses informations.</p>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md6 class="text-xs-left bg-grey">
          <v-card class="elevation-0 bg-grey">
            <v-card-title primary-title class="layout justify-center">
              <img class="logo-size" src="@/assets/birdlife_logo.svg"/>
            </v-card-title>
            <v-card-text>
              <p><span class="primary--text big">Depuis 1922</span>, BirdLife Suisse œuvre sur le territoire helvétique pour le bien être des oiseaux et de la biodiversité.</p>
              <p><span class="primary--text big">Depuis 1922</span>, BirdLife Suisse s’engage au niveau local et soutient des projets de protection de la nature dans le monde entier.</p>
              <p><span class="primary--text big">Depuis 1922</span>, BirdLife Suisse sensibilise à la fragilité de la biodiversité et des oiseaux.</p>
              <p><span class="primary--text big">Depuis 1922</span>, BirdLife Suisse vit grâce aux <a href="https://birdlife.ch/fr/content/dons-legs">dons</a> et aux soutiens de ses <a href="https://birdlife.ch/fr/content/membre">membres </a> . Si tu veux agir, n’hésite pas!</p>
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
    }
  }
}
</script>

<style scoped>
.logo-size {
  width: 50vh;
  max-height: 320px;
}
.bg-grey {
  background: #fafafa;
;
}
</style>
