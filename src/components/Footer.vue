<script setup>
import { ref } from "vue";
const currentYear = ref(new Date().getFullYear());

</script>

<template>
  <footer class="d-flex flex-wrap  py-3 my-2 mt-5 border-top footer-color">
    <div class="col d-flex justify-content-center">
      <span class="text-muted">© 2022 - {{ currentYear }} Eralp Özcan</span>
      <a class="github-route mx-1" href="https://github.com/Eralpozcan/MoviesApp"><i class="bi bi-github"></i></a>
    </div>
  </footer>
</template>

<style scoped>
.github-route {
  color: black;
  text-decoration: none;
}

.footer-color {
  position: relative !important;
  background-color: rgb(230, 228, 228) !important;
  bottom: 0 !important;
}
</style>