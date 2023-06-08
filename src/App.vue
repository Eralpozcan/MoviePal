<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <NavBar> </NavBar>

  <RouterView></RouterView>

  <Footer> </Footer>
</template>

<style scoped>
#app {
  background-color: rgb(180, 179, 179);
}
</style>
