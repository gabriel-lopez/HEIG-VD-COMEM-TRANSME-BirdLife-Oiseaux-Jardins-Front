<template>
  <div>
    <v-stepper
      v-model="step"
      non-linear
      vertical>
      <v-stepper-step
        step="1"
        :complete="step > 1">
        Mes observations
        <!--<small>Summarize if needed</small>-->
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card color="grey lighten-1" class="mb-5" height="200px">
          {{birds}}
        </v-card>
        <v-btn color="primary" @click="step = 2">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step
        step="2"
        :complete="step > 2"
        editable
      >
        Lieu et date de mes observations
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-text-field
              name="name"
              label="Nom"
              v-model="registration.name"
              v-validate="'required'"
              :error-messages="errors.collect('name')">
            </v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              name="surname"
              label="Prénom"
              v-model="registration.surname"
              v-validate="'required'"
              :error-messages="errors.collect('surname')">
            </v-text-field>
          </v-flex>
        </v-layout>
        <v-btn color="primary" @click="step = 3">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
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
                v-model="registration.name"
                v-validate="'required'"
                :error-messages="errors.collect('name')">
              </v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field
                name="surname"
                label="Prénom"
                v-model="registration.surname"
                v-validate="'required'"
                :error-messages="errors.collect('surname')">
              </v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
                name="email"
                label="Email"
                v-model="registration.email"
                v-validate="'required|email'"
                :error-messages="errors.collect('email')">
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
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click="step = 1">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>

        <v-btn color="primary" @click="submit">Save</v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: 1,
      registration: {
        name: null,
        surname: null,
        email: null,
        birthday: null,

        street: null,
        city: null,
        state: null,
        numtickets: null,
        shirtsize: null
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
