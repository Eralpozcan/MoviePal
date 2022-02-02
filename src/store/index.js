import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topRatedMovies: [],
    moviesPopular:[],
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
        console.log(response.data.results)
        console.log("1")
      });
    }
  },
  getters:{
    getTopRatedMovies(state){
      return state.topRatedMovies
    },
    getPopularMovies(state){
      return state.moviesPopular
    }

  },
  modules: {
  }
})
