<template>
  <div v-resize="onResize">
    <v-toolbar
      app
      light
      fixed
      clipped-right
    >
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <router-link to="/" class="toolbar-title">
        <v-toolbar-title class="headline text-uppercase">
          <span>Action </span>
          <span class="font-weight-light">Oiseaux de nos jardins</span>
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in menu"
          :key="item.icon"
          :to="item.link"
          flat
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      class="your-custom-class"
      v-model="drawer"
      fixed
      static
      disable-resize-watcher
      app
    >
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Application
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list class="pt-0" >
        <v-list-tile
          v-for="item in menu"
          :key="item.title"
          ripple
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list >

      <v-spacer></v-spacer>

    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        { icon: 'birds', title: 'Birds', link: '/birds', divider: true },
        { icon: 'home', title: 'Apprends avec Zozo', link: '/game', divider: true },
        { icon: 'info', title: 'Participer', link: '/participate' },
        { icon: 'warning', title: 'About', link: '/about' }
      ],
      drawer: false
    }
  },
  methods: {
    onResize () {
      if (this.drawer) {
        console.log('open')
      }
    }
  }
}
</script>

<style scoped>
  .toolbar-title {
    color: inherit;
    text-decoration: inherit;
  }
  .your-custom-class {
    display: flex;
    flex-direction: column;
  }
</style>
