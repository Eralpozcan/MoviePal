<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Detail from '@/components/Detail.vue'
import Slider from '@/components/Slider.vue'
import Loading from '@/components/Loading.vue'
import { useMovieStore } from '@/stores/index'

const movieStore = useMovieStore()
const route = useRoute()

const castFields = {
  imagePath: "profile_path",
  title: "name",
  profession: "character",
}
const crewFields = {
  imagePath: "profile_path",
  title: "name",
  profession: "job",
}

const recommendationsFields = {
  imagePath: "poster_path",
  title: "title",
  profession: "",
  clickable: "true",
  vote: "vote_average",
}

onMounted(() => {
  updateMovieDetail()
})

watch(() => route.params, () => {
  updateMovieDetail()
})

async function updateMovieDetail() {
  movieStore.getMovieDetail(route.params.id)
  movieStore.getCreditsDetail(route.params.id)
  await movieStore.getMovieRecommendations(route.params.id)
  if (movieStore.recommendationsDetail.length < 1) {
    movieStore.getSimilarMovies(route.params.id)
  }
}

</script>

<template>
  <div class="detail">
    <Loading> </Loading>
    <Detail :movieDetail="movieStore.movieDetail"></Detail>

    <div class="container">
      <template v-if="movieStore.recommendationsDetail.length > 1">
        <h3>{{ $t("Recommendations") }}</h3>
        <Slider :sliderData="movieStore.recommendationsDetail" :customFields="recommendationsFields"></Slider>
      </template>

      <template v-else>
        <h3>{{ $t("SimilarMovies") }}</h3>

        <Slider :sliderData="movieStore.similarMovies" :customFields="recommendationsFields"></Slider>
      </template>



      <h3>{{ $t("Cast") }}</h3>

      <Slider :sliderData="movieStore.creditsDetail.cast" :customFields="castFields"></Slider>

      <h3 class="mt-5">{{ $t("Producer") }}</h3>

      <Slider :sliderData="movieStore.creditsDetail.crew" :customFields="crewFields"></Slider>
    </div>
  </div>
</template>
