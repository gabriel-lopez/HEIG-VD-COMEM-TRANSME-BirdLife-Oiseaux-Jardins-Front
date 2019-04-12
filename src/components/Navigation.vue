<template>
  <v-toolbar app>

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

    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile v-for="item in menu" :key="item.icon">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        { icon: 'home', title: 'Apprends avec Zozo', link: '/zozo' },
        { icon: 'info', title: 'Participer', link: '/participer' },
        { icon: 'warning', title: 'About', link: '/about' }
      ]
    }
  }
}
</script>

<style scoped>
  .toolbar-title {
    color: inherit;
    text-decoration: inherit;
  }
</style>
