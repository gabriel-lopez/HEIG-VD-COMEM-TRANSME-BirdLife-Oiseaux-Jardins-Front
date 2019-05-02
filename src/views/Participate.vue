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
            <p
              v-if="birds.length === 0">
              {{$t('empty_list')}}
            </p>

            <v-flex xs12 sm6 lg4 v-for="bird in birds" :key="bird.id">
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
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      flat
                      color="primary"
                      @click.prevent="removeBird(bird)">
                      {{$t('remove_from_list')}}
                    </v-btn>
                    <v-btn
                      flat
                      color="primary"
                      @click.prevent="addBird(bird)">
                      {{$t('add_one_more')}}
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-badge>
            </v-flex>
          </v-layout>
        </v-container>
        <router-link to="/birds">
          <v-btn flat>{{ $t('add_a_bird') }}</v-btn>
        </router-link>
        <v-btn color="primary" @click="step = 2">{{ $t('next') }}</v-btn>
      </v-stepper-content>

      <v-stepper-step
        step="2"
        :complete="step > 2"
        editable
        :rules="[() => !errors.has('npa') && !errors.has('city') && !errors.has('participation_date') && !errors.has('participation_time')]">
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
                    v-for="(feature, index) in features" :key="feature.id"
                    color="primary"
                    hide-details
                    v-model="features['' + index]['checked']"
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
                          name="participation_date"
                          v-model="participationDate"
                          :label="$t('day_of_observation')"
                          prepend-icon="event"
                          readonly
                          v-on="on"
                          v-validate="'required'"
                          :error-messages="errors.collect('participation_date')"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        min="2019-05-03"
                        max="2019-05-05"
                        v-model="participationDate"
                        @input="datePickerEvent = false"
                      ></v-date-picker>
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
                          name="participation_time"
                          v-model="participationTime"
                          :label="$t('start_time_of_the_observation')"
                          prepend-icon="access_time"
                          readonly
                          v-on="on"
                          v-validate="'required'"
                          :error-messages="errors.collect('participation_time')"
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
                    name="npa"
                    :label="this.$t('postcode')"
                    v-model="participationNpa"
                    v-validate="'required'"
                    :error-messages="errors.collect('npa')">
                  </v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    name="city"
                    :label="this.$t('city')"
                    v-model="participationCity"
                    v-validate="'required'"
                    :error-messages="errors.collect('city')">
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
        :rules="[() => !errors.has('name') && !errors.has('first_name') && !errors.has('email') && !errors.has('birthday')]">
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
              <v-menu
                v-model="birthdayPickerEvent"
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
                    name="birthday"
                    :error-messages="errors.collect('birthday')"
                    v-model="participationBirthday"
                    :label="$t('birthday')"
                    readonly
                    v-validate="'required'"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="participationBirthday"
                  @input="birthdayPickerEvent = false"
                ></v-date-picker>
              </v-menu>
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
          <v-btn
            color="primary"
            @click="submit"
            :loading="loading">
            {{$t('send')}}
          </v-btn>
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
      loading: false,

      metaInfo: '',
      step: 1,
      snackbar: false,
      snackbarColor: 'success',
      snackbarText: '',
      birthdayPickerEvent: false,
      datePickerEvent: false,
      timePickerEvent: false,

      features: [],

      participationName: '',
      participationSurname: '',
      participationEmail: '',
      participationBirthday: '',

      participationUserStreet: '',
      participationUserstreetNo: '',
      participationUserNpa: '',
      participationUserCity: '',

      participationNewsletter: false,
      participationNewMember: false,
      participationOrder: false
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
    addBird: function (bird) {
      this.$store.commit('addBird', bird)
    },
    removeBird: function (bird) {
      this.$store.commit('removeBird', bird)
    },
    postParticipation () {
      this.loading = true
      this.$validator.validate().then(result => {
        if (!result) {
          this.loading = false
          this.snackbarColor = 'error'
          this.snackbar = true
          this.snackbarText = this.$t('error_on_participation')
          return
        }
        API.postParticipation(
          this.birds,

          this.participationDate,
          this.participationTime,
          this.participationNpa,
          this.participationCity,
          this.features,

          this.participationName,
          this.participationSurname,
          this.participationEmail,
          this.participationBirthday,

          this.participationNewsletter,
          this.participationNewMember,
          this.participationOrder

        ).then(() => {
          this.loading = false
          this.snackbarColor = 'success'
          this.snackbar = true
          this.snackbarText = this.$t('thank_you_for_your_participation')
          this.reset()
        }).catch(() => {
          this.loading = false
          this.snackbarColor = 'error'
          this.snackbar = true
          this.snackbarText = this.$t('error_on_participation')
        })
      })
    },
    reset () {
      this.participationName = ''
      this.participationSurname = ''
      this.participationEmail = ''
      this.participationBirthday = ''

      this.participationUserStreet = ''
      this.participationUserstreetNo = ''
      this.participationUserNpa = ''
      this.participationUserCity = ''

      this.participationNewsletter = false
      this.participationNewMember = false
      this.participationOrder = false
    }
  },
  watch: {
    title () {
      //
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
      console.log(this.metaInfo)
      return this.metaInfo
    }
  }
}
</script>

<style scoped>

</style>
