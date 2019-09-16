<template>
<div class="conteneur">
   <div class="recipeDetail" >
      <RecipeDetail :recipe="recipe" v-if="recipe"></RecipeDetail>
    </div>
</div>
</template>
<script>
import RecipeDetail from "./RecipeDetail.vue";
import RecipeService from '../services/RecipeService.js';

export default {
  name: "Read",
  components: {
    RecipeDetail
  },
  
  data: function() {
    return {
      recipe: null
    };
  },

   methods: {
    removeRecipe: function(recipeToDelete) {
      console.log(recipeToDelete);
      RecipeService.removeRecipe(recipeToDelete)
        .then(res => {
          this.$router.push('/list');
          this.$toasted.success(`Recette ${res.recette.titre} supprimée !`);
        })
        .catch(({ message }) => this.$toasted.error(message));
    }
  },
  created: function(){
    RecipeService.fetchOne(this.$route.params.id)
    .then(recipe => {
      console.log(recipe);
      this.recipe = recipe;
    })
      .catch(({ message }) => {
        this.$toasted.error(message);
        this.$router.replace("/");
      });
  }
};

</script>
<style scoped>
.recipeDetail{
  width: 80%;
  margin: 0 auto;
}
</style>