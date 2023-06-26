<script setup>
import { defineProps } from "vue";
import { ImagePath } from "@/utils/index.js";

defineProps({
  movieDetail: {
    type: Object,
    required: true,
  },
});


function getDateYear(date) {
  if (date) {
    const dateData = date
    const newdate = dateData.split('-')
    return '(' + newdate[0] + ')'
  }
  return ''
}
</script>

<template>
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="card mb-4 border-0">
        <div class="row g-0">
          <div class="col-md-3 mt-1 mb-1 justify-content-center">
            <img :src="ImagePath(movieDetail.poster_path)" class="img-fluid rounded" alt="..." loading="lazy" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ movieDetail.title }} {{ getDateYear(movieDetail.release_date) }}</h5>
              <div class="col" v-if='movieDetail.genres'>
                <span v-for="(item, index) of movieDetail.genres" :key="index" class="badge bg-secondary mx-1">{{
                  item.name }}</span>
              </div>
              <span class="badge bg-warning mx-1">{{ Number(movieDetail.vote_average).toFixed(2) }}</span>

              <p class="card-text mx-1 mb-1 mt-1">{{ movieDetail.overview }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>