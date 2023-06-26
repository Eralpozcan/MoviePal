<script setup>
import { onBeforeMount } from 'vue'
import Jumbor from '@/components/Jumborton.vue'
import Home from '@/components/Home.vue'
import { useMovieStore } from '@/stores/index'
const movieStore = useMovieStore()

onBeforeMount(() => {
  movieStore.getCountryFromIP()
})

</script>

<template>
  <main>
    <Jumbor></Jumbor>
    <div class="container">
      <Home></Home>
    </div>
  </main>
</template>
