<template>
  <div class="conteneur-big centered">
    <h1>Bienvenue sur Cantina</h1>

    <RecipeDetail :recipe="recipe" v-if="recipe" @remove="removeRecipe"/>

    <div class="random">
      <a href="#" class="btn" @click.prevent="refreshPage">
        <i class="fa fa-random"/>Essayer une autre recette
      </a>
    </div>
  </div>
</template>

<script>
import RecipeDetail from "./RecipeDetail.vue";
import RecipeService from "../services/RecipeService.js";

export default {
  name: "Home",
  components: {
    RecipeDetail
  },
  data: function() {
    return {
      recipe: null
    };
  },
  methods: {
    getRandomRecipe: function() {
      this.recipe = this.recipe[Math.floor(Math.random() * this.recipe.length)];
    },
    refreshPage: function(){
        document.location.reload(true);
    },
    removeRecipe: function(recipeToDelete) {
      RecipeService.removeRecipe(recipeToDelete)
        .then(res => {
          this.$router.push('/list');
          this.$toasted.success(`Recette ${res.recette.titre} supprimée !`);
        })
        .catch(({ message }) => this.$toasted.error(message));
    }
    
  },
  created: function() {
    RecipeService.fetchAll()
      .then(usersList => {
        this.recipe = usersList;
        this.getRandomRecipe();
      })
      .catch(({ message }) => this.$toasted.error(message));
  }
};
</script>

<style>
.random a {
  text-decoration: none;
  color: #85B039;
  background-color: white;
  border-radius: 1em;
  border: 1px solid #85B039;
  padding: 0.15em 0.5em;
}
.conteneur-big{
width: 75%;
margin: 0 auto;
}

</style>
