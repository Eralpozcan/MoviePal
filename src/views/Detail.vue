<template>
  <div class="detail">
    <NavBar />
    
    <Detail :movieDetail="movieDetail" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import Detail from '../components/Detail.vue'
import { mapActions,mapState } from "vuex";

export default {
  name: 'Details',
  components: {
    NavBar,
    Detail
  },
  methods:{
    ...mapActions(['movieIdFetch'])
  },
  computed:{
    ...mapState(['movieDetail'])
  },

  data() {
    return {
      imagePath: process.env.VUE_APP_API_IMAGE_PATH,
    };
  },
  created(){
      console.log(this.$route.params.id)
      this.movieIdFetch(this.$route.params.id)
  }
};
</script>
