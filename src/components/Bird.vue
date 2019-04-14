<template>
  <v-layout row justify-center>
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
            <v-btn dark flat @click.prevent="addBird(bird.id); show = false">Ajouter à ma liste d'observations</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        
        <v-carousel>
          <v-carousel-item
            v-for="(picture,id) in bird.pictures"
            :key="id"
            :src="`http://localhost:8000/pictures/${picture.filename}`"
            reverse-transition="fade"
            transition="fade"
          ></v-carousel-item>
        </v-carousel>

        <p v-html="bird.description_fr"></p>

        {{bird.family}}
        {{bird.order}}

      </v-card>

    </v-dialog>
  </v-layout>
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
    addBird: function (id) {
      this.$store.commit('addBird', id)
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
