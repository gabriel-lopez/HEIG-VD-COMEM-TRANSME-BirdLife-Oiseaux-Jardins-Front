<template>
  <div>
    <v-navigation-drawer
      v-model="menuFiltre"
      right
      temporary
      fixed>

      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              {{$t('filters')}}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-container class="text-xs-center">
        <v-layout row>
          <v-flex xs12>
            <v-checkbox
              v-model="gardenCheckbox"
              label="Oiseaux de jardin"
              color="primary"

              hint=""
              persistent-hint
            ></v-checkbox>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-select
              multiple
              chips
              deletable-chips

              :items="orders"

              label="Ordre"

              item-text="name"
              item-value="id"
              item-avatar='<img src="https://randomuser.me/api/portraits/men/35.jpg\"></img>'

              v-model="ordersSelected"

              hint=""
              persistent-hint
            >
            </v-select>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-select
              multiple
              chips
              deletable-chips
              :items="families"
              label="Famille"
              item-text="name"
              item-value="id"
              v-model="familiesSelected"

              hint=""
              persistent-hint
            ></v-select>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-select
              multiple
              chips
              deletable-chips
              :items="habitats"
              label="Habitat"
              item-text="name_de"
              item-value="id"
              v-model="habitatsSelected"

              hint=""
              persistent-hint
            ></v-select>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-select
              multiple
              chips
              deletable-chips
              label="Plumage"
              :items="colors"
              v-model="plumageColorsSelected"
              item-text="name_de"
              item-value="id"
              hint=""
              persistent-hint
            >
              <template slot="selection" slot-scope="data">
                <v-chip
                  close
                  @input="plumageColorsSelected.splice(data.index, 1)"
                >
                  <v-avatar
                    :color="data.item.hex"
                  >
                  </v-avatar>
                  {{data.item.name_de}}
                </v-chip>
              </template>
            </v-select>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-select
              multiple
              chips
              deletable-chips
              label="Pattes"
              :items="colors"
              v-model="legsColorsSelected"
              item-text="name_de"
              item-value="id"
              hint=""
              persistent-hint
            >
              <template slot="selection" slot-scope="data">
                <v-chip
                  close
                  @input="legsColorsSelected.splice(data.index, 1)"
                >
                  <v-avatar
                    :color="data.item.hex"
                  >
                  </v-avatar>
                  {{data.item.name_de}}
                </v-chip>
              </template>
            </v-select>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-select
              multiple
              chips
              deletable-chips
              label="Bec"
              :items="colors"
              v-model="beakColorslected"
              item-text="name_de"
              item-value="id"
              hint=""
              persistent-hint
            >
              <template slot="selection" slot-scope="data">
                <v-chip
                  close
                  @input="beakColorslected.splice(data.index, 1)"
                >
                  <v-avatar
                    :color="data.item.hex"
                  >
                  </v-avatar>
                  {{data.item.name_de}}
                </v-chip>
              </template>
            </v-select>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-select
              multiple
              chips
              deletable-chips
              label="Bec Forme"
              :items="beakShapes"
              v-model="beakShapesSelected"
              item-text="name_de"
              item-value="id"
              hint=""
              persistent-hint
            >
              <template slot="selection" slot-scope="data">
                <v-chip
                  close
                  @input="beakShapesSelected.splice(data.index, 1)"
                >
                  <v-avatar
                    :color="data.item.hex"
                  >
                  </v-avatar>
                  {{data.item.name_de}}
                </v-chip>
              </template>
            </v-select>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-select
              multiple
              chips
              deletable-chips
              label="Taille"
              :items="sizes"
              v-model="sizesSelected"
              item-text="name_de"
              item-value="id"
              hint=""
              persistent-hint
            >
            </v-select>
          </v-flex>
        </v-layout>

        <v-layout row column>
          <v-btn  @click.prevent="resetFilters(); getBirds(); menuFiltre = !menuFiltre;" color="error">{{$t('reset')}}</v-btn>
        </v-layout>

        <v-layout row column>
          <v-btn @click.prevent="getBirds(); menuFiltre = !menuFiltre;" color="success">{{$t('filter')}}</v-btn>
        </v-layout>

      </v-container>

    </v-navigation-drawer>

    <v-container pb-0>
      <v-layout row>
        <v-text-field
          v-model="birdName"
          outline
          clearable
          label="Chercher"
          type="text"
          append-icon="search"
          @click:append="getBirds()"
          @click:clear="clearBirdName(); getBirds();"
        >
        </v-text-field>
        <div class="padding-5">
          <v-btn
            mt-10
            round
            @click.prevent="menuFiltre = !menuFiltre"
            color="secondary">
            <v-icon left>menu</v-icon>
            {{$t('filters')}}
          </v-btn>
        </div>
      </v-layout>
    </v-container>

    <v-container
      class="text-xs-center"
      pt-0
    >
      <v-pagination
        v-model="page"
        :length="pageCount"
        :dark=false>
      </v-pagination>
    </v-container>

    <v-container
      grid-list-lg
      pt-0
    >
      <v-layout row wrap>
        <v-flex xs12 sm6 lg3 v-for="bird in birds" :key="bird.id">

          <v-card @click.native="birdId=bird.id; showBirdDialog=true">

            <v-img
              v-if="bird.pictures.length > 0"
              :src="`http://localhost:8000/pictures/${bird.pictures[0].filename}`"
              aspect-ratio="1.5"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="title mb-0 text-no-wrap text-truncate">{{bird.name_fr}}</h3>
              </div>
            </v-card-title>

            <v-card-actions>
            </v-card-actions>
          </v-card>

        </v-flex>
      </v-layout>

      <Bird :visible="showBirdDialog" :birdId="birdId" @close="showBirdDialog=false"></Bird>
    </v-container>

    <v-container
      class="text-xs-center"
      pt-0
    >
      <v-pagination
        v-model="page"
        :length="pageCount"
        :dark=false>
      </v-pagination>
    </v-container>
  </div>
</template>

<script>
import { API } from '../api'
import Bird from './Bird'

export default {
  name: 'BirdsList',
  components: {
    Bird
  },
  data () {
    return {
      menuFiltre: false,

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
      showBirdDialog: false,

      gardenCheckbox: true,

      colors: [],
      plumageColorsSelected: [],
      legsColorsSelected: [],
      beakColorslected: [],

      beakShapes: [],
      beakShapesSelected: [],

      sizes: [],
      sizesSelected: [],

      birdName: ''
    }
  },
  mounted () {
    this.getBirds()
    this.getOrders()
    this.getFamilies()
    this.getHabitats()
    this.getColors()
    this.getBeakShapes()
    this.getSizes()
  },
  methods: {
    getBirds (page = 1) {
      API.getBirds(
        this.gardenCheckbox ? 1 : 0,
        this.ordersSelected.join(),
        this.familiesSelected.join(),
        this.habitatsSelected.join(),
        this.plumageColorsSelected.join(),
        this.legsColorsSelected.join(),
        this.beakColorslected.join(),
        this.beakShapesSelected.join(),
        this.sizesSelected.join(),
        this.birdName,
        page)
        .then((data) => {
          this.birds = data.data
          this.numberOfBirds = data.count
          this.pageCount = data.meta.last_page
        })
    },
    resetFilters () {
      this.gardenCheckbox = 1
      this.ordersSelected = []
      this.familiesSelected = []
      this.habitatsSelected = []
      this.plumageColorsSelected = []
      this.legsColorsSelected = []
      this.beakColorslected = []
      this.beakShapesSelected = []
      this.sizesSelected = []
      this.birdName = ''
    },
    clearBirdName () {
      this.birdName = ''
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
    },
    getColors () {
      API.getColors().then((data) => {
        this.colors = data
      })
    },
    getBeakShapes () {
      API.getBeakShapes().then((data) => {
        this.beakShapes = data
      })
    },
    getSizes () {
      API.getSizes().then((data) => {
        this.sizes = data
      })
    }
  },
  watch: {
    page: function (page) {
      this.getBirds(page)
    }
  }
}
</script>

<style scoped>
.padding-5 {
  padding-top: 5px;
}
</style>
