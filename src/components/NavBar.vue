<template>
  <header class="header_area">
    <div class="main-menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"><img src="../assets/ClipartKey_1511670.png" class="image-logo" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
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

.image-logo{
  height: 50px;
}
.navbar-brand{
  padding: 0 2rem 0 5rem;
}
.navbar{
  padding: 1rem 20rem ;
}
.nav-link{
  font: normal 500 15px/2px var(--roboto);
  text-transform: uppercase;
  padding: 1.7rem;

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
