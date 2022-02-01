<template>
  <div class="row p-1">
    <VueSlickCarousel v-bind="settings">
        <div><h1>1</h1></div>
        <div><h1>2</h1></div>
        <div><h1>3</h1></div>
        <div><h1>4</h1></div>
        <div><h1>5</h1></div>
        <div><h1>6</h1></div>
        <div><h1>7</h1></div>
        <div><h1>8</h1></div>
        <div><h1>9</h1></div>
        <div><h1>10</h1></div>
        <div><h1>11</h1></div>
        <div><h1>12</h1></div>
        <div><h1>13</h1></div>
        <div><h1>14</h1></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },

  data() {
    return {
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>
