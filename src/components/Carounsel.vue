<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ImagePath } from '@/utils/index.js';

defineProps({
  data: {
    type: Array,
    required: true,
  },
  pagination: {
    type: Boolean,
    default: false,
  },
})

</script>

<template>
  <div class="row ps-1 pe-1">
    <div v-if="data.length">
      <Carousel :itemsToShow="2.57" :wrapAround="true" :transition="500">
        <Slide v-for="item in data" :key="item">
          <router-link class="router carousel__item" :to="`/detail/${item.id}`">
            <div class="card border-0">
              <img :src="ImagePath(item.backdrop_path)" class="rounded-3" alt="..." />
              <span class="badge bg-warning text-dark">{{
                item.vote_average
              }}</span>
              <div class="card-item ">
                <h5 class="card-title text-truncate fw-bold">
                  {{ item.title }}
                </h5>
              </div>
              <div class="card-item">
                <small class="text-muted">{{ item.release_date }}</small>
              </div>
            </div>
          </router-link>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination v-if="pagination" />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.05);
  margin-left: 22px;
}
</style>

