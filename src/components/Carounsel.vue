<template>
  <div class="row ps-1 pe-1">
    <h3 class="mt-5 mb-5 mx-2"> {{ $t("TopRated") }}</h3>
    <div v-if="topRatedMovies.length > 0">
      <VueSlickCarousel v-bind="settings">
          <div v-for="(item,index) of topRatedMovies" :key="index">
            <router-link class="router" :to="`/detail/${item.id}`">
              <div class="card shadow-sm m-2 border-0" style="width: 25rem; min-height:60rem;">
                <img :src="imagePath + item.backdrop_path" class="rounded-3" alt="...">
                <span class="badge bg-warning text-dark">{{item.vote_average}}</span>
                <div class="card-body pt-4 ps-2 pe-2 pb-1">
                  <h5 class="card-title text-truncate fw-bold">{{item.title}}</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">{{item.release_date}}</small>
                  </div>
                </div>
              </div>
            </router-link>
          </div>       
      </VueSlickCarousel>
    </div>

    <h3 class="mt-5 mb-5 mx-2">{{ $t("PopularMovies") }}</h3>
    <div v-if="moviesPopular.length > 0">
      <VueSlickCarousel v-bind="settings">
        <div v-for="(item,index) of moviesPopular" :key="index">
          <router-link class="router" :to="`/detail/${item.id}`">
            <div class="card shadow-sm m-2 border-0" style="width: 25rem; min-height:60rem;">
              <img :src="imagePath + item.backdrop_path" class="rounded-3" alt="...">
              <span class="badge bg-warning text-dark">{{item.vote_average}}</span>
              <div class="card-body pt-4 ps-2 pe-2 pb-1">
                <h5 class="card-title text-truncate fw-bold">{{item.title}}</h5>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted">{{item.release_date}}</small>
                </div>
              </div>
            </div>
          </router-link>
        </div>       
      </VueSlickCarousel>
    </div>  
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import {mapState,mapActions} from "vuex";


export default {
  name: "Carounsel",
  components: { VueSlickCarousel },
  methods:{
    ...mapActions(["getTopRate","getPopular"])
  },
  computed:{
    ...mapState(["topRatedMovies","moviesPopular"]),
  },
  data() {
    return {
      imagePath: process.env.VUE_APP_API_IMAGE_PATH,
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
              dots: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
            },
          },
        ],
      },
    };
  },
  created () {
    this.getTopRate();
    this.getPopular();
  },
};
</script>

<style>
.router{
  color:black;
  text-decoration: none;
}
.slick-prev:before, .slick-next:before {
    color: #000000 !important;
}
</style>
