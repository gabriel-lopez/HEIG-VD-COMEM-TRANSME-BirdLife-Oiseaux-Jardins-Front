<template>
  <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark color="primary">

        <v-btn
          v-if="!loading"
          icon
          dark
          @click.prevent="show = false">
          <v-icon>close</v-icon>
        </v-btn>

        <v-progress-circular
          v-if="loading"
          indeterminate
          color="white"
        ></v-progress-circular>

        <v-toolbar-title>{{bird["name_" + currentLanguage]}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <!--suppress JSUnnecessarySemicolon -->
          <v-btn
            v-if="!loading"
            dark
            flat
            @click.prevent="addBird(bird); snackbar = true">
            {{$t('add_to_my_list')}}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-carousel
            :cycle="false">
            <v-carousel-item
              v-for="(picture,id) in bird.pictures"
              :key="id"
              :src="`/pictures/${picture.filename}`"
              reverse-transition="fade"
              transition="fade"
            ></v-carousel-item>

          </v-carousel>
        </v-flex>
        <v-flex xs12 md6>
          <v-container>
            <p v-html="bird['description_' + currentLanguage]"></p>
            <iframe v-if="!loading" :src="`https://www.xeno-canto.org/${bird.singing_xeno_canto_id}/embed?simple=1' scrolling='no' frameborder='0' width='340' height='115'`"></iframe>
          </v-container>
        </v-flex>
      </v-layout>
    </v-card>
    <v-snackbar
      v-model="snackbar"
      color="success"
      :timeout="3000"
      vertical
    >
      {{$t('added_to_list')}}
      <v-btn
        dark
        flat
        to="/participate"
        @click="snackbar = false; show = false;"
      >
        {{$t('see_my_list')}}
        </v-btn>
    </v-snackbar>
  </v-dialog>
</template>

<script>
import { API } from '../api'

export default {
  name: 'Bird',
  props: ['visible', 'birdId'],
  data () {
    return {
      bird: {},
      loading: true,
      snackbar: false
    }
  },
  methods: {
    getBird (id) {
      this.loading = true
      API.getBird(id).then((data) => {
        this.bird = data
        this.loading = false
      })
    },
    addBird: function (bird) {
      this.$store.commit('addBird', bird)
    }
  },
  computed: {
    show: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.bird = {}
          this.$emit('close')
        }
      }
    },
    birds () {
      return this.$store.state.birds
    },
    currentLanguage: {
      get () {
        return this.$store.state.language
      }
    }
  },
  watch: {
    show: function (value) {
      if (value) {
        this.getBird(this.birdId)
      }
    }
  }
}
</script>

<style scoped>

</style>
