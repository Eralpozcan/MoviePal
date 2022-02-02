import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topRatedMovies: [],
    moviesNew:[],
    language:"en",

  },
  mutations: {
    setLanguage(state,payload){
      state.language = payload;
    },
    setMoviesNew(state,payload){
      state.moviesNew = payload
    },
    setTopRate(state,payload){
      state.topRatedMovies = payload
    }
  },
  actions: {
    getTopRate({state,commit}){
      axios.get(`${process.env.VUE_APP_API_URL}/3/movie/top_rated?api_key=${process.env.VUE_APP_API_KEY}&language=${state.language}`).then((response)=>{
        commit('setTopRate',response.data.results)
        console.log(response.data.results)
        console.log("1")
      });
    },
    getLatest({state,commit}){
      axios.get(`${process.env.VUE_APP_API_URL}/3/movie/latest?api_key=${process.env.VUE_APP_API_KEY}&language=${state.language}`).then((response)=>{
        commit('setMoviesNew',response.data.results)
        console.log(response.data.results)
        console.log("1")
      });
    }
  },
  getters:{
    getTopRatedMovies(state){
      return state.topRatedMovies
    },
    getLatestMovies(state){
      return state.moviesNew
    }

  },
  modules: {
  }
})
