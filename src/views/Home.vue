<template>
  <div class="home">
    <NavBar />
    <Jumbor />
    <div class="container">
      <Carounsel />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import Jumbor from '../components/Jumborton.vue'
import Carounsel from '../components/Carounsel.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Jumbor,
    Carounsel,
    Footer
  }
}
</script>
