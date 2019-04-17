<template>
  <div>
    <v-stepper
      v-model="step"
      non-linear
      vertical>

      <v-stepper-step
        step="1"
        :complete="step > 1"
        editable
        edit-icon="$vuetify.icons.complete"
        :rules="[]">
        Mes observations
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-container
          grid-list-lg>
          <v-layout row wrap>
            <v-flex xs4 sm3 lg3 v-for="bird in birds" :key="bird.id">
              <v-badge right overlap>
                <template v-slot:badge>
                  <span>{{bird.counter}}</span>
                </template>
                <v-card
                  @click.native="birdId=bird.id; showBirdDialog=true">
                  <v-img
                    v-if="bird.picture"
                    :src="`http://localhost:8000/pictures/${bird.picture}`"
                    aspect-ratio="1.5"
                  ></v-img>
                  <v-card-title
                    pa-0
                    primary-title>
                    <div>
                      <h4 class="caption ">{{bird.name_fr}}</h4>
                    </div>
                  </v-card-title>
                </v-card>
              </v-badge>
            </v-flex>
          </v-layout>
        </v-container>

        <v-btn color="primary" @click="step = 2">{{ $t('next') }}</v-btn>
      </v-stepper-content>

      <v-stepper-step
        step="2"
        :complete="step > 2"
        editable
        :rules="[() => !errors.has('participation.place.npa') && !errors.has('participation.place.city')]">
        Lieu et date de mes observations
      </v-stepper-step>

      <v-stepper-content step="2">

        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-checkbox
                    color="primary"
                    label="Bcp. d‘arbustes indigènes"></v-checkbox>
                  <v-checkbox
                    color="primary"
                    label="Bcp. d‘arbustes exotiques"></v-checkbox>
                  <v-checkbox
                    color="primary"
                    label="Arbres indigènes"></v-checkbox>
                  <v-checkbox
                    color="primary"
                    label="Arbres exotiques"></v-checkbox>
                  <v-checkbox
                    color="primary"
                    label="Prairie fleurie">
                  </v-checkbox>
                </v-flex>
                <v-flex xs12 md6>
                  <v-checkbox
                    color="primary"
                    label="Gazon"></v-checkbox>
                  <v-checkbox
                    color="primary"
                    label="Étang"></v-checkbox>
                  <v-checkbox
                    color="primary"
                    label="Nichoir"></v-checkbox>
                  <v-checkbox
                    color="primary"
                    label="Surface de gravier/sable"></v-checkbox>
                  <v-checkbox
                    color="primary"
                    label="Tas de bois"></v-checkbox>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12 md6>
            </v-flex>
          </v-layout>
        </v-container>

<!--
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-text-field
              name="participation.place.npa"
              label="NPA"
              v-model="participation.place.npa"
              v-validate="'required'"
              :error-messages="errors.collect('participation.place.npa')">
            </v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              name="participation.place.city"
              label="Ville"
              v-model="participation.place.city"
              v-validate="'required'"
              :error-messages="errors.collect('participation.place.city')">
            </v-text-field>
          </v-flex>
        </v-layout>
        -->
        <v-btn color="primary" @click="step = 3">{{ $t('next') }}</v-btn>
      </v-stepper-content>

      <v-stepper-step
        step="3"
        :complete="step > 3"
        editable
        :rules="[() => !errors.has('name') && !errors.has('email')]">
        Données personnelles
      </v-stepper-step>

      <v-stepper-content step="3">
        <div grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-text-field
                name="name"
                label="Nom"
                v-model="participation.name"
                v-validate="'required'"
                :error-messages="errors.collect('name')">
              </v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field
                name="surname"
                label="Prénom"
                v-model="participation.surname"
                v-validate="'required'"
                :error-messages="errors.collect('surname')">
              </v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-text-field
                name="email"
                label="Email"
                v-model="participation.email"
                v-validate="'required|email'"
                :error-messages="errors.collect('email')">
              </v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field
                name="birthday"
                label="Date de naissance"
                v-model="participation.birthday"
                v-validate="'required'"
                :error-messages="errors.collect('birthday')">
              </v-text-field>
            </v-flex>
          </v-layout>
        </div>
        <v-btn color="primary" @click="step = 4">{{ $t('next') }}</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step
        step="4"
        editable
        edit-icon="$vuetify.icons.complete">
        Inscription à la Newsletter
      </v-stepper-step>

      <v-stepper-content step="4">
        <v-container>
          <v-checkbox
            color="primary"
            v-model="participation.newsletter.checkbox1"
            label="Oui, je souhaiterais plus d‘infos de BirdLife Suisse."></v-checkbox>
          <v-checkbox
            color="primary"
            v-model="participation.newsletter.checkbox2"
            label="J‘aimerais devenir membre de BirdLife Suisse (Cotisation annuelle Fr. 50.– , comprend le journal «Info BirdLife Suisse»)"></v-checkbox>
          <v-checkbox
            color="primary"
            v-model="participation.newsletter.checkbox3"
            label="Je commande la brochure «Action Oiseaux de nos jardins» (gratuite pour ceux qui communiquent leurs observations, ex. supplémentaires Fr. 4.–)"></v-checkbox>
        </v-container>
        <div>
          <v-btn flat>Précédant</v-btn>
          <v-btn color="primary" @click="submit">Envoyer</v-btn>
        </div>
      </v-stepper-content>
    </v-stepper>

    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      :timeout="1500"
      vertical
    >
      {{ snackbarText }}
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: 1,
      snackbar: false,
      snackbarColor: '',
      snackbarText: '',
      participation: {
        user: {
          name: null,
          surname: null,
          email: null,
          birthday: null
        },
        userPlace: {
          street: null,
          streetNo: null,
          npa: null,
          city: null
        },
        place: {
          npa: null,
          city: null
        },
        newsletter: {
          checkbox1: false,
          checkbox2: false,
          checkbox3: false
        }
      }
    }
  },
  mounted () {
    console.log('Participate mounted')
  },
  methods: {
    submit () {
      this.$validator.validate().then(result => {
        if (result) {
          this.snackbarColor = 'success'
        } else {
          this.snackbarColor = 'error'
        }
        this.snackbar = true
      })
    }
  },
  computed: {
    birds () {
      return this.$store.state.birds
    }
  }
}
</script>

<style scoped>

</style>
