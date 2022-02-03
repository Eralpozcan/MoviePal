<template>
  <div class="detail">
    <NavBar />
    
    <Detail :movieDetail="movieDetail"/>


    <div class="container">
        <h3>{{ $t("Cast") }}</h3>
        <CastSlider :castDetail="castDetail" />

        <h3 class="mt-5">{{ $t("Producer") }}</h3>

        <CrewSlider :castDetail="castDetail" />
    </div>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import Detail from '../components/Detail.vue'
import CastSlider from '../components/CastSlider.vue'
import CrewSlider from '../components/CrewSlider.vue'
import Footer from '../components/Footer.vue'
import { mapActions,mapState } from "vuex";

export default {
  name: 'Details',
  components: {
    NavBar,
    Detail,
    CastSlider,
    CrewSlider,
    Footer
  },
  methods:{
    ...mapActions(['movieIdFetch','getCast'])
  },
  computed:{
    ...mapState(['movieDetail','castDetail'])
  },
  data() {
    return {
      imagePath: process.env.VUE_APP_API_IMAGE_PATH,
    };
  },
  created(){
      this.movieIdFetch(this.$route.params.id)
      this.getCast(this.$route.params.id)
  }
};
</script>
