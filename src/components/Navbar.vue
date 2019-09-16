<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link to="/home" class="navbar-titre">Cantina</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

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
  margin-bottom: 3em;
  border-bottom: 10px solid white;
}
.navbar-titre{
  font-family: 'cormorant';
  font-size: 60px;
}
.navbar > .container {
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
}

.navbar a:link,
.navbar a:visited {
  color:  #fff;
  text-decoration: none;
  display: inline-block;
  padding: 0.25em 1em;
  transition: all 150ms;
  transform: scale(1);
}
.navbar a:hover {
  background-color: #fff;
  color: black;
  transform: scale(1.05);
}
.navbar a.router-link-exact-active {
  background-color:#85B039;
}
.navbar-nav{
  min-width: 380px;
  
}
.nav-item{
  display: flex;
  flex-flow: row;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 10px 10px 20px;
}
.navbar a:active {
  transition: none;
  color:  rgb(0, 0, 0);
  background-color: #fff;
}

.navbar a:last-of-type {
  margin-left: auto;
}
</style>
