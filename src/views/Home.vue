<template>
  <div class="home">
    <Jumbotron/>

    <div>
      <h2 class="text-md-center primary--text">Une heure pour la biodiversité</h2>
    </div>
    <v-flex xs12>
      <v-container grid-list-xl>
        <v-layout row wrap align-center>
          <v-flex xs12 md6>
            <v-card class="elevation-0 white">
              <v-card-text class="text-xs-center">
                <v-icon x-large class="primary--text text--lighten-2">color_lens</v-icon>
              </v-card-text>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-xs-center">Action "Oiseaux de nos jardins"</div>
              </v-card-title>
              <v-card-text>
                Quel est l’oiseau qui te réveille tous les matins? Combien d’espèces nichent autour de chez toi? Grâce à l’action “Oiseaux de nos jardins”, tu peux te poser une heure dans ton jardin ou dans un parc proche de chez toi et observer les oiseaux.

                <br/><br/> Une heure de ton temps pour la biodiversité, c’est pour nous des données précieuses. En 2017, les participants ont observé plus de 35’000 oiseaux de 127 espèces différentes. Alors pour cette année, grâce à toi on peut en observer encore plus!

                <br/><br/>Pour <router-link to="/participate">participer</router-link>, rien de plus simple. Il te suffit de trouver un endroit tranquille dans ton jardin ou pas trop loin de chez toi et d’ <router-link to="/birds">observer et noter</router-link>  les oiseaux que tu aperçois.

                <br/><br/> L’action “Oiseaux de nos jardins” se déroule chaque année dans toute la Suisse. Elle a pour objectif de mieux protéger les oiseaux et la biodiversité. Depuis sa création en 2015, BirdLife Suisse a ainsi pu récolter de précieuses informations.

              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md6>
            <v-card class="elevation-0 white">
              <v-card-text class="text-xs-center">
                <v-icon x-large class="primary--text text--lighten-2">flash_on</v-icon>
              </v-card-text>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">BirdLife</div>
              </v-card-title>

              <v-list>
                <v-list-tile>

                  <v-list-tile-content>
                    <span><span class="primary--text big">Depuis 1922</span>, BirdLife Suisse œuvre sur le territoire helvétique pour le bien être des oiseaux et de la biodiversité.</span>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile>

                  <v-list-tile-content>
                    <span><span class="primary--text big">Depuis 1922</span>, BirdLife Suisse s’engage au niveau local et soutient des projets de protection de la nature dans le monde entier.</span>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile>

                  <v-list-tile-content>
                    <span><span class="primary--text big">Depuis 1922</span>, BirdLife Suisse sensibilise à la fragilité de la biodiversité et des oiseaux.</span>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>

                  <v-list-tile-content>
                    <span><span class="primary--text big">Depuis 1922</span>, BirdLife Suisse vit grâce aux <a href="https://birdlife.ch/fr/content/dons-legs">dons</a> et aux soutiens de ses <a href="https://birdlife.ch/fr/content/membre">membres </a> . Si tu veux agir, n’hésite pas!</span>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>

              <v-card-text>

              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </div>
</template>

<script>
  import Jumbotron from "../components/Jumbotron";

  export default {
    name: 'home',
    components: {
      Jumbotron
    },
    metaInfo() {
      return {
        title: this.metaInfo
      }
    },
    data() {
      return {
        metaInfo: ""
      }
    },
    watch: {
      title() {
        //
      }
    },
    computed : {
      title () {
        this.metaInfo = this.$i18n.t('title')
        return this.metaInfo
      },
    }
  }
</script>

<style scoped>

</style>
