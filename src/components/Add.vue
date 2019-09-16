<template>
  <div class="container centered">
    <h1>Ajouter une recette</h1>
    <Form @send="addRecipe"></Form>
  </div>
</template>

<script>
import Form from "./Form";
import UserService from "../services/UserService.js";

export default {
  name: "Add",
  components: {
    Form
  },
  methods: {
    addRecipe: function(recipe) {
      // Le formulaire est valide, on prépare donc l'envoi des données au serveur
      UserService.addRecipe(recipe)
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
  font-family: 'cormorant';
  font-size: 60px;
  color: #85B039;
}
</style>