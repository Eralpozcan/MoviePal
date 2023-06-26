<script setup>
import { ImagePath } from '@/utils/index.js';
import { Mousewheel, Navigation, Pagination, Autoplay, Parallax, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
const SwiperModules = [Navigation, Pagination, Mousewheel, Autoplay, Parallax, A11y];

defineProps({
  data: {
    type: Array,
    required: true,
  },
})

</script>

<template>
  <div class="row ps-1 pe-1">
    <div v-if="data.length">
      <Swiper :modules="SwiperModules" :slides-per-view="3" :space-between="40" :navigation="true" :mousewheel="true"
        :autoHeight="true" :parallax="true" :pagination="{ clickable: true }" :lazy="true">
        <SwiperSlide v-for=" item  in  data " :key="item">
          <router-link class="router" :to="`/detail/${item.id}`">
            <div class="card border-0 my-5">
              <img :src="ImagePath(item.backdrop_path)" class="rounded-3" alt="..." loading="lazy" />
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              <span class="badge bg-warning text-dark">{{
                item.vote_average
              }}</span>
              <div class="card-item d-flex justify-content-center flex-column align-items-center">
                <h5 class="card-title text-truncate fw-bold">
                  {{ item.title }}
                </h5>
                <small class="text-muted">{{ item.release_date }}</small>
              </div>
            </div>
          </router-link>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
.sample-slider .swiper-pagination-bullets {
  bottom: -15px;
}
</style>

