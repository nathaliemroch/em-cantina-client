<template>
  <div class="conteneur-big centered">
    <h1>Bienvenue sur Cantina</h1>
    <p>Une appli pour les cuisiner tous</p>
    <hr>
    <h3>Avez vous déjà essayé de cuisiner...</h3>

    <RecipeDetail :recipe="recipe" v-if="recipe" @remove="removeRecipe"/>

    <div class="actions">
      <a href="#" class="btn" @click.prevent="refreshPage">
        <i class="fa fa-random"/>Essayer une autre recette
      </a>
    </div>
  </div>
</template>

<script>
import RecipeDetail from "./RecipeDetail.vue";
import UserService from "../services/UserService.js";

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
      UserService.removeRecipe(recipeToDelete)
        .then(() => {
          let index = this.recipe(recipeToDelete);
          if (index > -1) {
            this.recipe.splice(index, 1);
          }
          this.$toasted.success("Collaborateur supprimé ! 💪");
          this.getRandomRecipe();
        })
        .catch(({ message }) => this.$toasted.error(message));
    }
  },
  created: function() {
    UserService.fetchAll()
      .then(usersList => {
        this.recipe = usersList;
        this.getRandomRecipe();
      })
      .catch(({ message }) => this.$toasted.error(message));
  }
};
</script>

<style>
.conteneur-big{
width: 75%;
margin: 0 auto;
}

</style>
