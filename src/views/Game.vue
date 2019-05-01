<template>
  <v-container>
    <Unity src="/game/WebGL_Build.json" width="1280" height="720" unityLoader="/game/UnityLoader.js"></Unity>
  </v-container>
</template>

<script>
import Unity from 'vue-unity-webgl'

export default {
  name: 'Learn with Zozo',
  components: {
    Unity
  },
  metaInfo() {
    return {
      title: this.metaInfo
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      metaInfo: ""
    }
  },
  watch: {
    title() {
      //
    }
  },
  computed : {
    title () {
      this.metaInfo = this.$i18n.t('learnwithzozo')
      return this.metaInfo
    },
  },
  mounted () {
    console.log('Game mounted')
  }
}
</script>

<style scoped>

</style>
