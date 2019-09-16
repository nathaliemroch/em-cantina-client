<template>
<div class="conteneur">
   <div class="recipeDetail" >
      <RecipeDetail :recipe="recipe" v-if="recipe"></RecipeDetail>
    </div>
</div>
</template>
<script>
import RecipeDetail from "./RecipeDetail.vue";
import UserService from '../services/UserService.js';

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

  created: function(){
    UserService.fetchOne(this.$route.params.id)
    .then(recipe => {
      console.log(recipe);
      this.recipe = recipe;
    })
  }
};

</script>
<style scoped>
.recipeDetail{
  width: 80%;
  margin: 0 auto;
}
</style>