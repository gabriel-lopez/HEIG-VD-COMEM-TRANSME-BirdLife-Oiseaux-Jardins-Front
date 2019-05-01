<template>
  <div>
    <v-container text-xs-center>

      <h1 class="text-xs-center primary--text">Mieux nous connaître</h1>

      <v-flex
        text-xs-center
        pa-5>
        <img class="logo-size" src='@/assets/birdlife_logo.svg'/>
      </v-flex>

      <p>Depuis 1922, BirdLife Suisse œuvre sur le territoire helvétique pour le bien être des oiseaux et de la biodiversité.</p>
      <p>Elle s’engage au niveau local et soutient des projets de protection de la nature dans le monde entier.</p>
      <p>Cette association vit grâce aux <a href="https://www.birdlife.ch/fr/content/dons-legs" target="_blank">dons</a> et aux soutiens de ses <a href="https://birdlife.ch/fr/content/membre" target="_blank">membres</a>. Si tu veux agir, n’hésite pas!</p>
      <p>BirdLife est une organisation non gouvernementale. Nous tenons à remercier les nombreux membres et donateurs, sans qui la réalisation de ses projets n’aurait pas été possible. Grâce à leurs dons, ils permettent à BirdLife de s’engager pour la biodiversité et les oiseaux.</p>
      <p>Le Troglodyte Mignon, la pomme Gala et l’Homo Sapiens ont tous un point commun: nous faisons en sorte qu’ils vivent ensemble et en harmonie.</p>
      <p>Pour te donner une idée concrète du travail réalisé, voici quelques projets qui symbolisent un engagement de tous les instants:</p>
    </v-container>

    <v-container
      grid-list-xs
      pt-0
    >
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 pa-2>
          <v-card>
            <v-img
              src="/img/lasauge_0.jpg"
              aspect-ratio="1.75"
            ></v-img>

            <v-card-title primary--text>
              <div>
                <h3 class="headline mb-0">Centre-nature</h3>
                <div>
                  <p>Le Centre-nature BirdLife de la Sauge aux abords de la rive sud-est du lac de Neuchâtel est vrai petit paradis pour les oiseaux. Ainsi, depuis sa création, plus de 200 espèces y ont été aperçues!</p>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary">en savoir plus</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 pa-2>
          <v-card>
            <v-img
              src="/img/birdlife-farnsberg.png"
              aspect-ratio="1.75"
            ></v-img>

            <v-card-title primary--text>
              <div>
                <h3 class="headline mb-0">Amélioration de la politique agricole</h3>
                <div>
                  <p>Dans le canton de Bâle-Campagne, la plantation de plusieurs arbres fruitiers a permis aux pie-grièches de s’installer en milieu agricole et leur nombre augmenté.</p>

                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary">en savoir plus</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 pa-2>
          <v-card>
            <v-img
              src="/img/barrage-klingnau.png"
              aspect-ratio="1.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Renaturation de grandes surfaces</h3>
                <div>
                  <p>BirdLife Suisse est engagée dans plusieurs nouvelles concessions accordées à des centrales hydrauliques. Au lac de barrage de Klingnau, où un nouveau centre-nature est en train de voir le jour, BirdLife Suisse, BirdLife Argovie et d’autres organisations ont obtenu la renaturation de grandes surfaces. Cette pratique est en vigueur depuis des décennies. Nous combattons la suppression de cette obligation de réaliser des mesures de compensation. Cela rendrait de nombreux projets de protection de la nature impossible.</p>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary">en savoir plus</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'About',
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
      this.metaInfo = this.$i18n.t('about_us')
      return this.metaInfo
    }
  },
  mounted () {
    console.log('About mounted')
  }
}
</script>

<style scoped>
.logo-size {
  width: 30vw;
}
</style>
