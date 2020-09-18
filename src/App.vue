<script>

import Lander from './components/Lander/lander.vue'
import Portfolio from './components/Portfolio/portfolio.vue'
import Contact from './components/Contact/contact.vue'
import Service from './components/Service/servicearea.vue'
import Footer from './components/Footer/footer.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    Portfolio,
    Lander,
    Footer,
    Contact,
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
    <portfolio></portfolio>
    <contact></contact>
    <router-view/>
    <Footer/>
  </div>
</template>

<style lang="scss">
#app {
  font: normal bold 50px/ 72px var(--roboto);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Global Classes */

.title-text{
  font: normal bold 50px/ 72px var(--roboto);
}

.text-uppercase{
  text-transform: uppercase;
}

/* Buttons */

.button{
  padding: .8rem 2.2rem;
  font: normal 500 16px/20px var(--roboto);
  position: relative;
  border: 3px solid transparent;
  border-radius: 4px;
}

.button.primary-button{
  background: var(--gradient-color);
  background-clip: padding-box;
  color: whitesmoke;
  transition: background .6s ease;
  box-shadow: var(--box-shadow);
}

.button.primary-button:hover{
  background: whitesmoke;
  background-clip: padding-box;
  color: black;
}

.button.primary-button::after, .button.secondary-button::after{
  position: absolute;
  top: -2px; left: -2px;
  bottom: -2px;  right: -2px;
  background: var(--gradient-color);
  content: ' ';
  z-index: -1;
  border-radius: 4px;
}

.button.secondary-button{
  background: white;
  background-clip: padding-box;
  transition: background .6s ease;
}

.button.secondary-button:hover{
  background: var(--gradient-color);
  color: whitesmoke;
  box-shadow: var(--box-shadow);
}

p.para{
  color: var(--text-color);
  font: normal 500 16px/ 25px var(--roboto);
}

.font-roboto{
  font-family: var(--roboto);
}

button:focus,
button:active
button:hover
.btn:active,
.btn.active{
  outline: 0px !important;
  box-shadow: none !important;
}

.title-h1{
  font: normal bold 39px/ 40px var(--roboto);
}

.navbar_fixed{
  position: fixed;
  width: 100%;
  top: -1px;
  left: 0; right: 0;
  background: #ffffff;
  box-shadow: var(--box-shadow);
  z-index: 999;
  transition: background 1s ease;
}

</style>
