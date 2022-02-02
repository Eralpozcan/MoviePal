<template>
  <div class="detail">
    <NavBar />
    
    <Detail :movieDetail="movieDetail"/>


    <div class="container mx-1 my-3">
        <h3>Cast</h3>
    </div>

    <CastSlider :castDetail="castDetail" />

    <div class="container mx-1 mt-5">
        <h3>Producer Team</h3>
    </div>

    <CrewSlider :castDetail="castDetail" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import Detail from '../components/Detail.vue'
import CastSlider from '../components/CastSlider.vue'
import CrewSlider from '../components/CrewSlider.vue'
import { mapActions,mapState } from "vuex";

export default {
  name: 'Details',
  components: {
    NavBar,
    Detail,
    CastSlider,
    CrewSlider
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
      console.log(this.$route.params.id)
      this.movieIdFetch(this.$route.params.id)
      this.getCast(this.$route.params.id)
  }
};
</script>
