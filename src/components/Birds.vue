<template>
  <div>
    <v-container>

      <v-flex xs6>
        <v-subheader>Selected Value: {{habitatsSelected}}</v-subheader>
        <v-subheader>Selected Value: {{ordersSelected}}</v-subheader>
        <v-subheader>Selected Value: {{familiesSelected}}</v-subheader>
      </v-flex>

      <h2>Filtres</h2>

      <v-layout row>

        <v-flex xs12 sm6 lg4>
          <v-select
            multiple
            chips
            :items="orders"
            label="Ordre"
            item-text="name"
            item-value="id"
            v-model="ordersSelected"
          ></v-select>
        </v-flex>

        <v-flex xs12 sm6 lg4>
          <v-select
            multiple
            chips
            :items="families"
            label="Famille"
            item-text="name"
            item-value="id"
            v-model="familiesSelected"
          ></v-select>
        </v-flex>

        <v-flex xs12 sm6 lg4>
          <v-select
            multiple
            chips
            :items="habitats"
            label="Habitat"
            item-text="name_de"
            item-value="id"
            v-model="habitatsSelected"
          ></v-select>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex xs12 sm6 lg3 v-for="bird in birds" :key="bird.id">

          <v-card @click.native="birdId=bird.id; showBirdDialog=true">
            <v-img
              :src="`http://localhost:8000/pictures/${bird.pictures[0].filename}`"
              aspect-ratio="1.5"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{bird.name_fr}}</h3>
              </div>
            </v-card-title>

            <v-card-actions>
            </v-card-actions>
          </v-card>

        </v-flex>
      </v-layout>

      <Bird :visible="showBirdDialog" :birdId="birdId" @close="showBirdDialog=false"></Bird>
    </v-container>

    <div class="text-xs-center">
      <v-pagination
        v-model="page"
        :length="pageCount"
        :dark=false>
      </v-pagination>
    </div>

  </div>
</template>

<script>
import { API } from '../api'
import Bird from './Bird'

export default {
  name: 'Birds',
  components: {
    Bird
  },
  data () {
    return {
      birds: [],
      numberOfBirds: 0,

      page: 1,
      pageCount: 1,

      habitats: [],
      habitatsSelected: [],

      orders: [],
      ordersSelected: [],

      families: [],
      familiesSelected: [],

      birdId: -1,
      showBirdDialog: false
    }
  },
  mounted () {
    this.getBirds()
    this.getOrders()
    this.getFamilies()
    this.getHabitats()
  },
  methods: {
    getBirds (page = 1) {
      API.getBirds(page).then((data) => {
        this.birds = data.data
        this.numberOfBirds = data.count
        this.pageCount = data.meta.last_page
      })
    },
    getOrders () {
      API.getOrders().then((data) => {
        this.orders = data
      })
    },
    getFamilies () {
      API.getFamilies().then((data) => {
        this.families = data
      })
    },
    getHabitats () {
      API.getHabitats().then((data) => {
        this.habitats = data
      })
    }
  },
  watch: {
    page: function (page) {
      this.getBirds(page)
    },
    habitatsSelected: function (newVal) {
      console.log(newVal)
    }
  }
}
</script>
