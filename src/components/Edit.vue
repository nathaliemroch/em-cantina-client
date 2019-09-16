<template>
  <div class="container centered">
    <h1>Editer la recette</h1>
    <Form :recipe="recipe" v-if="recipe" @send="update"/>
  </div>
</template>

<script>
import Form from "./Form";
import UserService from "../services/UserService.js";

export default {
  name: "Edit",
  components: {
    Form
  },
  data: function() {
    return {
      recipe: null
    };
  },
  created: function() {
    UserService.fetchOne(this.$route.params.id)
      .then(recipe => {
        console.log(recipe);
        this.recipe = recipe;
      })
      .catch(({ message }) => {
        this.$toasted.error(message);
        this.$router.replace("/");
        console.log(message);
      });
  },
  methods: {
    update: function(recipe) {
      UserService.updateRecipe(recipe)
        .then(() => {
          this.$toasted.success("Recette mise à jour ! 😉");
          this.$router.replace("/list");
        })
        .catch(({ message }) => this.$toasted.error(message));
    }
  }
};
</script>

<style>
h1{
  font-family: 'cormorant';
  font-size: 60px;
  color: #85B039;
}
</style>
