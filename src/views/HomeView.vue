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
    <Jumbor />
    <div class="container">
      <Home />
    </div>
  </main>
</template>
