import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n';
import axios from 'axios';
// skipcq: JS-C1003 - sentry does not expose itself as an ES Module.
import * as Sentry from '@sentry/vue'

export const useMovieStore = defineStore('movie', () => {
  const upComingsMovies = ref([])
  const nowPlayingMovies = ref([])
  const topRatedMovies = ref([])
  const moviesPopular = ref([])
  const movieDetail = ref([])
  const creditsDetail = ref([])
  const recommendationsDetail = ref([])
  const similarMovies = ref([])
  const language = ref('en')
  const countryData = ref('')


  const { locale } = useI18n()

  function setLanguage(lang) {
    language.value = lang
    locale.value = lang
  }

  async function getCountryFromIP() {
    try {
      const response = await axios.get('https://ipapi.co/json/');
      const { country } = response.data;
      countryData.value = country
    } catch (error) {
      console.log(error);
      Sentry.captureException(error)
    }
  }

  async function getUpComingsMovies() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_VUE_APP_API_URL}/3/movie/upcoming?api_key=${import.meta.env.VITE_VUE_APP_API_KEY}&language=${language.value}&page=1`)
      upComingsMovies.value = response.data.results
    } catch (error) {
      console.error(error)
      Sentry.captureException(error)
    }
  }

  async function getNowPlayingMovies() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_VUE_APP_API_URL}/3/movie/now_playing?api_key=${import.meta.env.VITE_VUE_APP_API_KEY}&language=${language.value}&region=${countryData.value}`)
      nowPlayingMovies.value = response.data.results
    } catch (error) {
      console.error(error)
      Sentry.captureException(error)
    }
  }

  async function getTopRatedMovies() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_VUE_APP_API_URL}/3/movie/top_rated?api_key=${import.meta.env.VITE_VUE_APP_API_KEY}&language=${language.value}&region=${countryData.value}`)
      topRatedMovies.value = response.data.results
    } catch (error) {
      console.error(error)
      Sentry.captureException(error)
    }
  }

  async function getPopularMovies() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_VUE_APP_API_URL}/3/movie/popular?api_key=${import.meta.env.VITE_VUE_APP_API_KEY}&language=${language.value}&region=${countryData.value}`)
      moviesPopular.value = response.data.results
    } catch (error) {
      console.error(error)
      Sentry.captureException(error)
    }
  }

  async function getMovieDetail(id) {
    try {
      const response = await axios.get(`${import.meta.env.VITE_VUE_APP_API_URL}/3/movie/${id}?api_key=${import.meta.env.VITE_VUE_APP_API_KEY}&language=${language.value}`)
      movieDetail.value = response.data
    } catch (error) {
      console.error(error)
      Sentry.captureException(error)
    }
  }

  async function getCreditsDetail(id) {
    try {
      const response = await axios.get(`${import.meta.env.VITE_VUE_APP_API_URL}/3/movie/${id}/credits?api_key=${import.meta.env.VITE_VUE_APP_API_KEY}&language=${language.value}`)
      creditsDetail.value = response.data
    } catch (error) {
      console.error(error)
      Sentry.captureException(error)
    }
  }

  async function getMovieRecommendations(id) {
    try {
      const response = await axios.get(`${import.meta.env.VITE_VUE_APP_API_URL}/3/movie/${id}/recommendations?api_key=${import.meta.env.VITE_VUE_APP_API_KEY}&language=${language.value}`)
      const bestRecommendations = response.data.results.filter((item) => item.vote_average > 7);
      const sortedBestRecommendations = bestRecommendations.sort((a, b) => b.vote_average - a.vote_average);
      recommendationsDetail.value = sortedBestRecommendations;
    } catch (error) {
      console.error(error)
      Sentry.captureException(error)
    }
  }

  async function getSimilarMovies(id) {
    try {
      const response = await axios.get(`${import.meta.env.VITE_VUE_APP_API_URL}/3/movie/${id}/similar?api_key=${import.meta.env.VITE_VUE_APP_API_KEY}&language=${language.value}`)
      const bestSimilarMovies = response.data.results.filter((item) => item.vote_average > 5);
      const sortedBestSimilarMovies = bestSimilarMovies.sort((a, b) => b.vote_average - a.vote_average);
      similarMovies.value = sortedBestSimilarMovies;
    } catch (error) {
      console.error(error)
      Sentry.captureException(error)
    }
  }

  async function getMovieSearch(query) {
    try {
      const response = await axios.get(`${import.meta.env.VITE_VUE_APP_API_URL}/3/search/movie?query=${query}&language=${language.value}&api_key=${import.meta.env.VITE_VUE_APP_API_KEY}`)
      const sortedData = response.data.results.sort((a, b) => b.vote_average - a.vote_average);
      if (sortedData) return sortedData
    } catch (error) {
      console.error(error)
      Sentry.captureException(error)
      return null
    }
  }


  return { upComingsMovies, nowPlayingMovies, topRatedMovies, moviesPopular, movieDetail, creditsDetail, recommendationsDetail, similarMovies, language, setLanguage, getCountryFromIP, getNowPlayingMovies, getUpComingsMovies, getTopRatedMovies, getPopularMovies, getMovieDetail, getCreditsDetail, getMovieRecommendations, getSimilarMovies, getMovieSearch }
})

