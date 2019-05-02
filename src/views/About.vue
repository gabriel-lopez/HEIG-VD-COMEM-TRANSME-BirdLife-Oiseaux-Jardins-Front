<template>
  <div>
    <v-container text-xs-center>

      <h1 class="text-xs-center primary--text">{{$t('about_us_know_better')}}</h1>

      <v-flex
        text-xs-center
        pa-5>
        <img class="logo-size" src='@/assets/birdlife_logo.svg'/>
      </v-flex>

      <p v-html="$t('about_us_line_1')"></p>
      <p v-html="$t('about_us_line_2')"></p>
      <p v-html="$t('about_us_line_3')"></p>
      <p v-html="$t('about_us_line_4')"></p>
      <p v-html="$t('about_us_line_5')"></p>
      <p v-html="$t('about_us_line_6')"></p>
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
                <h3 class="headline mb-0">{{$t('about_us_card1_title')}}</h3>
                <div>
                  <p>
                   {{$t('about_us_card1_text')}}
                  </p>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                flat
                color="primary"
                href="https://www.birdlife.ch/fr/content/la-sauge-fr" target="_blank">
                {{$t('about_us_card_more_about_it')}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 pa-2>
          <v-card>
            <v-img
              :src="require('@/assets/kiebitz_slideshow.jpg')"
              aspect-ratio="1.75"
            ></v-img>

            <v-card-title primary--text>
              <div>
                <h3 class="headline mb-0">{{$t('about_us_card2_title')}}</h3>
                <div>
                  <p>
                    {{$t('about_us_card2_text')}}
                  </p>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                flat
                color="primary"
                href="https://www.birdlife.ch/fr/content/oiseaux-prioritaires-des-milieux-cultives-dans-le-grand-marais" target="_blank">
                {{$t('about_us_card_more_about_it')}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 pa-2>
          <v-card>
            <v-img
              :src="require('@/assets/initiative.jpg')"
              aspect-ratio="1.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{$t('about_us_card3_title')}}</h3>
                <div>
                  <p>
                    {{$t('about_us_card3_text')}}
                  </p>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                flat
                color="primary"
                href="https://www.birdlife.ch/fr/content/initiativen" target="_blank">
                {{$t('about_us_card_more_about_it')}}
              </v-btn>
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
