<script setup>
import { onMounted } from 'vue'
import Jumbor from '@/components/Jumborton.vue'
import Home from '@/components/Home.vue'
import { useMovieStore } from '@/stores/index'
const movieStore = useMovieStore()

onMounted(() => {
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
