<template>
  <b-container>
    <b-jumbotron class=" lander  p-3 mb-5 bg-light rounded">
      <section class="section">
        <div class="animated">
          <img src="../../assets/0.jpg" alt="Modamori Oluwayomi" class="rounded-circle">
          <h1 class="name"> MODAMORI OLUWAYOMI</h1>
          <h4 class="vue2">Full-Stack Dev 💻. JavaScript. VueJS. Tailwind.</h4>
          <p>I’m a software engineer and a full stack developer from Lagos, Nigeria.</p>
        </div>
      </section>
    </b-jumbotron>
  </b-container>
</template>
<script >
export default {
  name: 'lander.vue',
  components: {

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
 .lander{
   margin: 5px;
   position: relative;
 }
 .section{
    padding-top: 1%;
    padding-bottom: 1%;
   background-color: white;
   justify-content: center;
 }
.name{
  font-family: 'Roboto', sans-serif;
  padding: 10px;
}
.vue2{
  padding: 2px;
}
</style>
