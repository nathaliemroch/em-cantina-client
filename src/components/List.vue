<template>
  <div class="container centered">
    <h1>Liste des recettes</h1>

    <form class="filterform" @submit.prevent> <!-- submit.prevent évite d'envoyer des informations-->
      <input type="search" placeholder="Tapez un nom..." v-model="searchText">
      <label for="filter">Filtrer par :</label>
      <select name="filterBy" v-model="filterValue">
        <option value="name">Nom</option>
        <option value="niveau">Niveau</option>
      </select>
    </form>

    <div class="userlist" v-if="recipesList">
      <RecipeCard v-for="recipe in filteredList" :recipe="recipe" :key="recipe.id" @remove="removeRecipe"/>
    </div>
  </div>
</template>
<script>
import RecipeCard from './RecipeCard.vue';
import UserService from '../services/UserService.js';
export default {
  name: "List",
  components: {
    RecipeCard
  },
  data: function(){
    return{
      recipesList: null,
      searchText: "",
      filterValue: "name",
    }
  },
  computed: {
    filteredList: function() {
      return this.recipesList.filter(({ titre, description, niveau }) => {
        let searchText = this.searchText.toLowerCase();
        titre = titre.toLowerCase();
        description = description.toLowerCase();

        if(this.filterValue === 'name'){ // si l'input dans le champ text est à "nom"  (filtrer par nom)

        return ( // afficher les résulats des noms qui correspondent à l'input
          `${titre}`.includes(searchText)          
        )}

        else if (this.filterValue === 'niveau'){ // si l'input dans le champ text est à "niveau"  (filtrer par localistation)
          return `${niveau}`.includes(searchText);// afficher les résulats des niveaux qui correspondent à l'input
        }
      });
    }
  },
  methods: {
    removeRecipe: function(recipeToDelete) {
      UserService.removeRecipe(recipeToDelete)
        .then(res => {
          console.log(res);
          let index = this.recipesList.indexOf(recipeToDelete);
          if (index > -1) {
            this.recipesList.splice(index,1);
          }
          this.$toasted.success(
            `Recette "${res.recette.titre}" supprimée! 💪`
          );
        })
        .catch(({ message }) => this.$toasted.error(message));
    }
  },
  created: function(){
    UserService.fetchAll().then(recipesList => {
        this.recipesList = recipesList;
    })
  }
};

</script>
<style scoped>
h1{
  font-family: 'cormorant';
  font-size: 60px;
  color: #85B039;
}
form input, form select{
  background: white;
}
.userlist {
  display: flex;
  flex-wrap: wrap;
}

.userlist > * {
  box-sizing: border-box;
  width: calc(94% / 3);
  margin: 1%;
}

.filterform {
    width: 40%;
  margin: 2em 0;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
.container{
    width: 100%;
    margin: 0 auto;
}
</style>