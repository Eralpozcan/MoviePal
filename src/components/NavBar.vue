<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid navbar-color">
    <a class="navbar-brand" href="/"><i class="bi bi-film"></i>Movie Pal</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">{{ $t("About") }}</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2 my-1" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline" type="submit">{{ $t("Search") }}</button>
      </form>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">{{ $t("Register") }}</a></li>
            <li><a class="dropdown-item" href="#">{{ $t("Login") }}</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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

<script>

export default {
  name:'Navbar',

  methods:{
    changeLanguage(val){
      this.$store.commit('setLanguage',val)
    },
  },
}
</script>

<style>
.navbar-color{
  background-color:rgb(230, 228, 228) !important;
}

</style>