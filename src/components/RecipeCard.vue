<template>
<div class="conteneur_g">
  <div class="card">
   <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`">
  <div class="card-body">
    <h4 class="card-title">{{recipe.titre}}</h4>
    <p class="card-text">{{recipe.description}}</p>
  </div>
  <ul class="list-group list-group-flush" style="text-align: left">
    <li class="list-group-item">Temps de préparation : {{recipe.tempsPreparation}} min</li>
    <li class="list-group-item">Nombre de convives : {{recipe.personnes}} personne(s)</li>
    <li class="list-group-item">Niveau : {{recipe.niveau}}</li>
  </ul>
  <div class="card-body">
    <router-link :to="`/read/${recipe.id}`" class="btn btn-small">Lire</router-link>
    <router-link :to="`/edit/${recipe.id}`" class="btn btn-small">Modifier</router-link>
    <a href="#" class="btn btn-small" @click.prevent="onRemove">Supprimer</a>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: {
      type: Object
    }
  },
  computed : {
    DEFAULT_PHOTO: function(){
      return "https://cdn.pixabay.com/photo/2019/09/15/14/42/14-42-27-793_960_720.png"
    }
  },
  methods: {
    onRemove: function(){
      console.log("onRemove");
      this.$emit("remove",this.recipe);
    }
  }
}
</script>
<style scoped>
.card{
  padding: 20px;
  min-height: 665px;
  border-radius: 1rem;
  -webkit-box-shadow: 8px 8px 30px -19px rgba(0,0,0,0.54);
  -moz-box-shadow: 8px 8px 30px -19px rgba(0,0,0,0.54);
  box-shadow: 8px 8px 30px -19px rgba(0,0,0,0.54);
  background-color: white;
}

.card-title {
  color: #85B039;
  font-size: 25px;
  font-family: 'cormorant';
}

img{
    width: 100%;
    height: auto;
}
h3, p{
    text-align: left;
}
.card-text-col-3-big{
    width: 40%;
    display: inline-block;
}
.card-text-col-3-small{
    width: 20%;
    display: inline-block;
}
.boutons{
    width: 100%;
    display: flex;
    justify-content: flex-start;
}
.data-v-0ce62faa{
  margin: 0;
}
</style>