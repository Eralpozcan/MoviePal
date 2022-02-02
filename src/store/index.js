import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topRatedMovies: [],
    moviesPopular:[],
    movieDetail:[],
    language:"en",

  },
  mutations: {
    setLanguage(state,payload){
      state.language = payload;
    },
    setMoviesPopular(state,payload){
      state.moviesPopular = payload
    },
    setTopRate(state,payload){
      state.topRatedMovies = payload
    },
    setMovieDetail(state,payload){
      state.movieDetail == []
      state.movieDetail = payload
    }
  },
  actions: {
    getTopRate({state,commit}){
      axios.get(`${process.env.VUE_APP_API_URL}/3/movie/top_rated?api_key=${process.env.VUE_APP_API_KEY}&language=${state.language}`).then((response)=>{
        commit('setTopRate',response.data.results)
      });
    },
    getPopular({state,commit}){
      axios.get(`${process.env.VUE_APP_API_URL}/3/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&language=${state.language}`).then((response)=>{
        commit('setMoviesPopular',response.data.results)
      });
    },
    movieIdFetch({state,commit},movieId){
      console.log("MovieID",movieId)
      axios.get(`${process.env.VUE_APP_API_URL}/3/movie/${movieId}?api_key=${process.env.VUE_APP_API_KEY}&language=${state.language}`).then((response)=>{
        commit('setMovieDetail',response.data)
        console.log(response.data)
        console.log("Detail")
      });
    },
  },
  getters:{
    getTopRatedMovies(state){
      return state.topRatedMovies
    },
    getPopularMovies(state){
      return state.moviesPopular
    },
    getMovieDetail(state){
      return state.movieDetail
    }

  },
  modules: {
  }
})
