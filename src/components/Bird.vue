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

        <v-toolbar-title>{{bird.name_fr}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <!--suppress JSUnnecessarySemicolon -->
          <v-btn dark flat @click.prevent="addBird(bird); show = false">Ajouter à ma liste d'observations</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-layout row>
        <v-flex xs12 md6>
          <v-carousel>
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
          <p v-html="bird.description_fr"></p>
        </v-flex>
      </v-layout>


      <!--
      {{bird.family}}
      {{bird.order}}
      -->
      <iframe :src="`https://www.xeno-canto.org/${bird.singing_xeno_canto_id}/embed?simple=1' scrolling='no' frameborder='0' width='340' height='115'`"></iframe>
    </v-card>
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
      loading: true
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
