<script setup>
import { ref, watch } from "vue";
import { useMovieStore } from '@/stores/index'
import { useRouter } from 'vue-router'
import { ImagePath } from '@/utils/index'


const router = useRouter()
const search = ref('')
const movieStore = useMovieStore()
const searchResult = ref([])


function changeLanguage(val) {
  movieStore.setLanguage(val)
}
function GoMoviesDetail(id) {
  router.push({ name: 'Detail', params: { id: id } })
  setTimeout(() => {
    ClearSearch()
  }, 1000)
}

function ClearSearch() {
  searchResult.value = []
  search.value = ''
}
async function Search() {
  searchResult.value = await movieStore.getMovieSearch(search.value)
}

watch(search, async (val) => {
  if (val.length >= 3) {
    await Search()
  }
  if (val.length < 3) {
    searchResult.value = []
  }
})
</script>


<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container-fluid navbar-color">
      <a class="navbar-brand" href="/"><i class="bi bi-film"></i>Movie Pal</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/about">{{ $t("About") }}</a>
          </li>
        </ul>
        <form class="d-flex search-form">
          <input class="form-control me-2 my-1" autocomplete="on" type="search" placeholder="Search" aria-label="Search"
            @change="Search()" v-model="search">

          <ul class="list-group" v-if="searchResult.length > 1" v-for="(item, index) in searchResult" :key="item.id">
            <li class="list-group-item" v-if="index < 5">
              <div class="col d-flex suggestion">
                <img :src="ImagePath(item.poster_path)" alt="" width="50" height="50">
                <ul @click="GoMoviesDetail(item.id)">{{ item.title }}</ul>
              </div>
            </li>
          </ul>
        </form>


        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-person"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">{{ $t("Register") }}</a></li>
              <li><a class="dropdown-item" href="#">{{ $t("Login") }}</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-translate"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" @click="changeLanguage('tr')">{{ $t("Turkish") }}</a></li>
              <li><a class="dropdown-item" @click="changeLanguage('en')">{{ $t("English") }}</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-color {
  background-color: rgb(230, 228, 228) !important;
}

.suggestion {
  align-items: center;
}

.search-form {
  position: absolute;
  left: 45%;
  top: 9%;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  z-index: 1;
  width: 15%;
}
</style>