<template>
  <div class="home">
    <Birds/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Birds from '@/components/Birds.vue'
  export default {
    name: 'home',
    components: {
      Birds
    }
  }
</script>
