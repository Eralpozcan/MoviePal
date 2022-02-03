<template>
<div>
  <NavBar />
  <AboutPage />
  <Footer />
</div>




</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import AboutPage from '../components/About.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'About',
  components: {
    NavBar,
    AboutPage,
    Footer
  }
}
</script>

