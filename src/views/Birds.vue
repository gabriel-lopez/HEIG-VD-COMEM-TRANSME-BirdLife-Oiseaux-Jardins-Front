<template>
  <div>
    <BirdsList/>
  </div>
</template>

<script>
import BirdsList from '../components/BirdsList'

export default {
  name: 'Birds',
  components: {
    BirdsList
  },
  metaInfo() {
    return {
      title: this.metaInfo
    }
  },
  data() {
    return {
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
      this.metaInfo = this.$i18n.t('birds')
      return this.metaInfo
    },
  },
  mounted () {
    console.log('Birds mounted')
  }
}
</script>

<style scoped>

</style>
