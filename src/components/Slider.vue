<script setup>
import { ImagePath } from '@/utils/index.js';
import { useRouter } from 'vue-router'
import { Mousewheel, Navigation, Autoplay, Parallax, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

const SwiperModules = [Navigation, Mousewheel, Autoplay, Parallax, A11y];
const router = useRouter()

defineProps({
  sliderData: {
    type: Object,
    default: () => ({}),
  },
  customFields: {
    type: Object,
    required: true,
  },
})

function moviesDetailGo(id, click) {
  if (click) {
    router.push({ name: 'Detail', params: { id: id } })
  } else return
}
</script>

<template>
  <div class="container" v-if="sliderData">
    <Swiper :modules="SwiperModules" :slides-per-view="3" :space-between="40" :navigation="true" :mousewheel="true"
      :autoHeight="true" :parallax="true" :lazy="true">
      <SwiperSlide v-for="item in sliderData" :key="item">
        <div class="carousel__item">
          <div class="card border-0" @click="moviesDetailGo(item.id, customFields.clickable)">
            <img v-if="customFields.imagePath" loading="lazy" :src="ImagePath(item[customFields.imagePath])"
              class="rounded-3" alt="Picture">
            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            <div class="card-itemc cast-slider">
              <h5 class="card-title text-truncate fw-bold" v-if="customFields.title">{{ item[customFields.title] }}</h5>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted" v-if="customFields.profession">{{ item[customFields.profession] }}</small>
                <span class="badge bg-warning mx-1" v-if="customFields.vote">{{ Number(item[customFields.vote]).toFixed(2)
                }}
                </span>

              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.cast-slider {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column
}
</style>