<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link to="/home" class="navbar-titre">Cantina</router-link>
  <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> -->

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to="/list">Liste des recettes</router-link>
        <router-link to="/add">Ajouter une recette</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: #FDE166;
  overflow: hidden;
  display: flex;
  font-family: 'italianno';
}
.navbar-titre{
  font-size: 58px !important;
}
.navbar > .container {
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
}

.navbar a {
  font-size: 30px;
}

.navbar a:link,
.navbar a:visited {
  background-color:  #fff;
  color: #85B039;
  text-decoration: none;
  display: inline-block;
  padding: 0.25em 1em;
  transition: all 150ms;
  transform: scale(1);
  margin: 0 10px 0 0;
}
.navbar a:hover {
  background-color: #85B039;
  color: #FDE166;
  transform: scale(1.05);
}
.navbar a.router-link-exact-active {
  background-color:#85B039;
  color: #FDE166;
}
.navbar-nav{
  min-width: 380px;
  
}
.nav-item{
  width: 100%;
  padding: 10px 10px 10px 20px;
  list-style-type: none;
}

</style>
