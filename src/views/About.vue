<template>
<div>
  <NavBar />
  <AboutPage />
</div>




</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import AboutPage from '../components/About.vue'
export default {
  name: 'Home',
  components: {
    NavBar,
    AboutPage,
  }
}
</script>

