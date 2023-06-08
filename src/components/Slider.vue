<script setup>
import { UseImage } from '@vueuse/components'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ImagePath } from '@/utils/index.js';
import { useRouter } from 'vue-router'


const router = useRouter()


defineProps({
  sliderData: {
    required: true,
  },
  customFields: {
    type: Object,
    required: true,
  },
})

const settings = {
  itemsToShow: 4,
  snapAlign: 'center',
}

function moviesDetailGo(id, click) {
  if (click) {
    router.push({ name: 'Detail', params: { id: id } })
  } else return
}


</script>

<template>
  <div class="container" v-if="sliderData">
    <Carousel v-bind="settings">
      <Slide v-for="item in sliderData" :key="item">
        <div class="carousel__item">
          <div class="card border-0" @click="moviesDetailGo(item.id, customFields.clickable)">
            <UseImage v-if="customFields.imagePath" :src="ImagePath(item[customFields.imagePath])" class="rounded-3"
              alt="Picture">
              <template #loading>
                Loading..
              </template>

              <template #error>
                Failed
              </template>
            </UseImage>

            <div class="card-itemc cast-slider">
              <h5 class="card-title text-truncate fw-bold" v-if="customFields.title">{{ item[customFields.title] }}</h5>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted" v-if="customFields.profession">{{ item[customFields.profession] }}</small>
                <span class="badge bg-warning mx-1" v-if="customFields.vote">{{ Number(item[customFields.vote]).toFixed(2)
                }}</span>

              </div>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
.carousel__item {
  width: 70%;
}

.cast-slider {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column
}
</style>