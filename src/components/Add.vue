<template>
  <div class="container centered">
    <h1>Ajouter une recette</h1>
    <Form @send="addRecipe"></Form>
  </div>
</template>

<script>
import Form from "./Form";
import RecipeService from "../services/RecipeService.js";

export default {
  name: "Add",
  components: {
    Form
  },
  methods: {
    addRecipe: function(recipe) {
      // Le formulaire est valide, on prépare donc l'envoi des données au serveur
      RecipeService.addRecipe(recipe)
        .then(() => {
          // Redirige le visiteur vers la page de listing
          this.$router.replace("/list");
          this.$toasted.success("Recette ajoutée !");
        })
        .catch(({ message }) => this.$toasted.error(message));
    }
  }
};
</script>

<style scoped>
h1{
  font-family: 'italianno';
  font-size: 80px;
  color: #85B039;
}
</style>