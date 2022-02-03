<template>
  <div class="container" v-if="castDetail.crew.length > 0">
    <VueSlickCarousel v-bind="settings">
      <div v-for="(item, index) of castDetail.crew" :key="index">
        <div
          class="card shadow-sm m-2 border-0"
          style="width: 25rem; min-height: 60rem"
        >
          <img
            :src="getImage(item.profile_path)"
            class="rounded-3"
            alt="..."
          />
          <div class="card-body pt-4 ps-2 pe-2 pb-1">
            <h5 class="card-title text-truncate fw-bold">{{ item.name }}</h5>
            <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted">{{ item.job }}</small>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";


export default {
  name: "Slider",
  components: { VueSlickCarousel },
  props: ["castDetail"],
  methods:{
      getImage : function(val){
          if (val !== null){
            let imagePath = process.env.VUE_APP_API_IMAGE_PATH
            let profileImage = val
            return imagePath + profileImage
          }else {
            return "https://via.placeholder.com/500x750"
          }
      },
  },
  data() {
    return {
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
    };
  },
};
</script>
