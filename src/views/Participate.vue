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
        {{$t('my_observations')}}
        <small>{{$t('my_observations_small')}}</small>
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
                    :src="`/pictures/${bird.picture}`"
                    aspect-ratio="1.5"
                  ></v-img>
                  <v-card-title
                    pa-0
                    primary-title>
                    <div >
                      <h4 class="caption text-truncate">{{bird["name_" + currentLanguage]}}</h4>
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
        {{$t('place_and_date_of_my_observations')}}
        <small>{{$t('place_and_date_of_my_observations_small')}}</small>
      </v-stepper-step>

      <v-stepper-content step="2">

        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-layout row wrap>
                <v-flex xs12>
                  {{$t('on_my_observation_site_there_are_many')}}:
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-checkbox
                    v-for="feature in features" :key="features.id"
                    color="primary"
                    hide-details
                    :label="feature['name_' + currentLanguage]">
                  </v-checkbox>
                </v-flex>
                <v-flex xs12 md6>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12 md6>
              <v-layout row wrap>
                <v-flex xs12>
                  {{$t('i_observed_for_1_hour_the')}}:
                </v-flex>
                <v-flex>
                  <v-flex xs12>
                    <v-menu
                      v-model="datePickerEvent"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="participationDate"
                          label=""
                          prepend-icon="event"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="participationDate" @input="datePickerEvent = false"></v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-flex xs12>
                    <v-menu
                      ref="menu"
                      v-model="timePickerEvent"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="participationTime"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="participationTime"
                          label=""
                          prepend-icon="access_time"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="timePickerEvent"
                        v-model="time"
                        full-width
                        @click:minute="$refs.menu.save(time)"
                      ></v-time-picker>
                    </v-menu>
                  </v-flex>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12>
                  {{$t('place_of_observation')}}:
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    name="participation.place.npa"
                    :label="this.$t('postcode')"
                    v-model="participationNpa"
                    v-validate="'required'"
                    :error-messages="errors.collect('participation.place.npa')">
                  </v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    name="participation.place.city"
                    :label="this.$t('city')"
                    v-model="participationCity"
                    v-validate="'required'"
                    :error-messages="errors.collect('participation.place.city')">
                  </v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
        <div>
          <v-btn flat @click="step = 1">{{$t('previous')}}</v-btn>
          <v-btn color="primary" @click="step = 3">{{ $t('next') }}</v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-step
        step="3"
        :complete="step > 3"
        editable
        :rules="[() => !errors.has('name') && !errors.has('email')]">
        {{$t('personal_data')}}
        <small>{{$t('personal_data_small')}}</small>
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-text-field
                name="name"
                :label="this.$t('name')"
                v-model="participationName"
                v-validate="'required'"
                :error-messages="errors.collect('name')">
              </v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field
                name="surname"
                :label="this.$t('first_name')"
                v-model="participationSurname"
                v-validate="'required'"
                :error-messages="errors.collect('surname')">
              </v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-text-field
                name="email"
                :label="this.$t('email')"
                v-model="participationEmail"
                v-validate="'required|email'"
                :error-messages="errors.collect('email')">
              </v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field
                name="birthday"
                :label="this.$t('birthday')"
                v-model="participationBirthday"
                v-validate="'required'"
                :error-messages="errors.collect('birthday')">
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn flat @click="step = 2">{{$t('previous')}}</v-btn>
        <v-btn color="primary" @click="step = 4">{{ $t('next') }}</v-btn>
      </v-stepper-content>

      <v-stepper-step
        step="4"
        editable
        edit-icon="$vuetify.icons.complete">
        {{$t('subscribe_to_the_newsletter')}}
        <small>{{$t('subscribe_to_the_newsletter_small')}}</small>
      </v-stepper-step>

      <v-stepper-content step="4">
        <v-container>
          <v-checkbox
            color="primary"
            v-model="participationNewsletter"
            :label="$t('participation_newsletter')"></v-checkbox>
          <v-checkbox
            color="primary"
            v-model="participationNewMember"
            :label="$t('participation_new_member')"></v-checkbox>
          <v-checkbox
            color="primary"
            v-model="participationOrder"
            :label="$t('participation_order')"></v-checkbox>
        </v-container>
        <div>
          <v-btn flat @click="step = 3">{{$t('previous')}}</v-btn>
          <v-btn color="primary" @click="submit">{{$t('send')}}</v-btn>
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
        {{$t('close')}}
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { API } from '../api'

export default {
  name: 'Participate',
  metaInfo () {
    return {
      title: this.metaInfo
    }
  },
  data () {
    return {
      step: 1,
      snackbar: false,
      snackbarColor: 'success',
      snackbarText: '',
      datePickerEvent: false,
      timePickerEvent: false,
      metaInfo: '',

      features: [],

      participationName: '',
      participationSurname: '',
      participationEmail: '',
      participationBirthday: '',

      participationUserStreet: '',
      participationUserstreetNo: '',
      participationUserNpa: '',
      participationUserCity: '',

      participationNewsletter: '',
      participationNewMember: '',
      participationOrder: ''
    }
  },
  mounted () {
    console.log('Participate mounted')
    this.getFeatures()
  },
  methods: {
    submit () {
      this.postParticipation()
    },
    getFeatures () {
      API.getFeatures().then((data) => {
        this.features = data
      })
    },
    postParticipation () {
      this.$validator.validate().then(result => {
        if (!result) {
          return
        }
        API.postParticipation(
          this.birds,

          this.participationDate,
          this.participationTime,
          this.participationNpa,
          this.participationCity,
          null,

          this.participationName,
          this.participationSurname,
          this.participationEmail,
          this.participationBirthday,

          this.participationNewsletter,
          this.participationNewMember,
          this.participationOrder

        ).then(() => {
          this.snackbarColor = 'success'
          this.snackbar = true
          this.snackbarText = this.$t('thank_you_for_your_participation')
        }).catch(() => {
          this.snackbarColor = 'error'
          this.snackbar = true
          this.snackbarText = this.$t('error_on_participation')
        })
      })
    }
  },
  computed: {
    currentLanguage: {
      get () {
        return this.$store.state.language
      }
    },
    birds () {
      return this.$store.state.birds
    },
    participationDate: {
      get () {
        return this.$store.state.participation.date
      },
      set (value) {
        this.$store.commit('setParticipationDate', value)
      }
    },
    participationTime: {
      get () {
        return this.$store.state.participation.time
      },
      set (value) {
        this.$store.commit('setParticipationTime', value)
      }
    },
    participationNpa: {
      get () {
        return this.$store.state.participation.npa
      },
      set (value) {
        this.$store.commit('setParticipationNpa', value)
      }
    },
    participationCity: {
      get () {
        return this.$store.state.participation.city
      },
      set (value) {
        this.$store.commit('setParticipationCity', value)
      }
    },
    title () {
      this.metaInfo = this.$i18n.t('participate')
      return this.metaInfo
    }
  }
}
</script>

<style scoped>

</style>
