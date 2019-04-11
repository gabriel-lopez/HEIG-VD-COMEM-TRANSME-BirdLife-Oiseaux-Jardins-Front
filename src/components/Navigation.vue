<template>
  <v-toolbar app>

    <router-link to="/" class="toolbar-title">
      <v-toolbar-title class="headline text-uppercase">
        <span>Action </span>
        <span class="font-weight-light">Oiseaux de nos jardins</span>
      </v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn to="/zozo" flat>
      Apprends avec Zozo
    </v-btn>

    <v-btn to="/participer" flat>
      Participer
    </v-btn>

    <v-btn to="/about" flat>
      About
    </v-btn>

  </v-toolbar>
</template>

<script>
  export default {

  };
</script>

<style scoped>
  .toolbar-title {
    color: inherit;
    text-decoration: inherit;
  }
</style>
