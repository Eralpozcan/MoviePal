<template>
  <div class="home">
    <NavBar />
    <Jumbor />
    <Carounsel />

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import Jumbor from '../components/Jumborton.vue'
import Carounsel from '../components/Carounsel.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Jumbor,
    Carounsel
  }
}
</script>
