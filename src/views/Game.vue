<template>
  <div>
    <Unity src="/game/web_prod_build_170419.json" width="1280" height="720" unityLoader="/game/UnityLoader.js"></Unity>
  </div>
</template>

<script>
  import Unity from 'vue-unity-webgl'

  export default {
    data () {
      return {
        publicPath: process.env.BASE_URL
      }
    },
    components: {
      Unity
    },
    mounted() {
      console.log("Game mounted")
    }
  };
</script>

<style scoped>

</style>

