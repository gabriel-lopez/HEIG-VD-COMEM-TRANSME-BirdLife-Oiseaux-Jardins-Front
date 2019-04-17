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
        <p>
          {{birds}}
        </p>
        <v-btn color="primary" @click="step = 2">Continue</v-btn>
      </v-stepper-content>

      <v-stepper-step
        step="2"
        :complete="step > 2"
        editable
        :rules="[() => !errors.has('participation.place.npa') && !errors.has('participation.place.city')]">
        Lieu et date de mes observations
      </v-stepper-step>

      <v-stepper-content step="2">
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
        <v-btn color="primary" @click="step = 3">Continue</v-btn>
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
                v-validate="'required|date'"
                :error-messages="errors.collect('birthday')">
              </v-text-field>
            </v-flex>
          </v-layout>
        </div>
        <v-btn color="primary" @click="step = 4">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step
        step="4">
        Inscription à la Newsletter
      </v-stepper-step>

      <v-stepper-content step="4">
        <v-checkbox v-model="participation.newsletter.checkbox1" :label="`Checkbox 1: ${participation.newsletter.checkbox1.toString()}`"></v-checkbox>
        <v-checkbox v-model="participation.newsletter.checkbox2" :label="`Checkbox 1: ${participation.newsletter.checkbox2.toString()}`"></v-checkbox>
        <v-checkbox v-model="participation.newsletter.checkbox3" :label="`Checkbox 1: ${participation.newsletter.checkbox3.toString()}`"></v-checkbox>

        <div>
          <v-btn flat>Précédant</v-btn>
          <v-btn color="primary" @click="submit">Envoyer</v-btn>
        </div>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: 1,
      participation: {
        user: {
          name: null,
          surname: null,
          email: null,
          birthday: null,
        },
        userPlace: {
          street: null,
          streetNo: null,
          npa: null,
          city: null,
        },
        place: {
          npa: null,
          city: null,
        },
        newsletter: {
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
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
          alert('This is the post. Blah')
        }
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
