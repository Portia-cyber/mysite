<template>
  <header class="header_area">
    <div class="main-menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"><img src="../assets/ClipartKey_1511670.png" class="image-logo" alt="logo"></a>
        <div class="collapse navbar-collapse" id="navbarNav">
        </div>
      </nav>
      </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>

@media (max-width:700px){
  .navbar-brand img {
    float: right;
  }

}

@media (min-width:1000px) {
  .navbar-brand img {
  }
}

.image-logo{
  height: 50px;
}
.navbar-brand{
  padding: 0 2rem 0 5rem;
}
.navbar{
  padding: 1rem 20rem ;
}

.active a{
  background: var(--gradient-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar-nav a:hover{
  background: var(--gradient-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

</style>
