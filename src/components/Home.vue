<script setup>
import { onMounted } from 'vue'
import { useMovieStore } from '@/stores/index'
import CarouselComponent from '@/components/Carounsel.vue'

const movieStore = useMovieStore()

onMounted(() => {
  movieStore.getTopRatedMovies()
  movieStore.getPopularMovies()
  movieStore.getUpComingsMovies()
})
</script>


<template>
  <div class="row ps-1 pe-1">
    <h3 class="mt-5 mb-5 mx-2">{{ $t("UpComings") }}</h3>
    <CarouselComponent :data="movieStore.upComingsMovies" />
    <h3 class="mt-5 mb-5 mx-2">{{ $t("TopRated") }}</h3>
    <CarouselComponent :data="movieStore.topRatedMovies" :pagination="true" />
    <h3 class="mt-5 mb-5 mx-2">{{ $t("PopulerMovies") }}</h3>
    <CarouselComponent :data="movieStore.moviesPopular" :pagination="true" />

  </div>
</template>
