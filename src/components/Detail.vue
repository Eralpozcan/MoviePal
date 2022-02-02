<template>
<div>
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="card mb-4">
        <div class="row g-0">
          <div class="col-md-3 mt-1 mb-1 justify-content-center">
            <img
              :src="imagePath + movieDetail.poster_path"
              class="img-fluid rounded"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{movieDetail.title}} {{getDateYear}}</h5>
              <div class="col " v-if='movieDetail.genres'>
                <span v-for="(item,index) of movieDetail.genres" :key="index" class="badge bg-secondary mx-1">{{item.name}}</span>
              </div>
              <span class="badge bg-warning mx-1">{{movieDetail.vote_average}}</span>

              <p class="card-text mx-1 mb-1 mt-1">{{movieDetail.overview}}</p>
              <p class="card-text">
                <small class="text-muted"></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



</template>

<script>
export default {
  name: "Detail",
  props:['movieDetail'],
  data() {
    return {
      imagePath: process.env.VUE_APP_API_IMAGE_PATH,
    };
  },
  computed:{
    getDateYear : function(){
      console.log(this.movieDetail.release_date)
      if(this.movieDetail.release_date !== null) {
        let dateData = this.movieDetail.release_date
        let newdate = dateData.split('-')
        return '('+newdate[0]+')'
      }
      return ''
    },
  }
};
</script>

<style scoped>

</style>
