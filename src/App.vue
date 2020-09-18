<script>
import Lander from './components/Lander/lander.vue'
import Service from './components/Service/servicearea.vue'
import Footer from './components/Footer/footer.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    Lander,
    Footer,
    Service,
    NavBar
  }
}
</script>

<template>
  <div id="app">
    <NavBar></NavBar>
    <lander></lander>
    <service></service>
    <router-view/>
    <Footer/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.91);
}
</style>
