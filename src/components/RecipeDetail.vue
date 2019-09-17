<template>
  <div>
    <main>
      <div class="wrapper">
        <section>
          <figure class="img-recette">
            <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`" />
          </figure>
        </section>

        <section class="description">
         
          <div class="titre-recette">
            <h2>{{recipe.titre}}</h2>
            <p>{{recipe.description}}</p>
          </div>

          <br />

          <div class="detail">
            <div class="border-right box">
              <p class="conditions">Niveau :</p>
              <span>{{recipe.niveau}}</span>
            </div>

            <div class="border-right box">
              <p class="conditions">Personnes :</p>
              <span>{{recipe.personnes}}</span>
            </div>

            <div class="box">
              <p class="conditions">Temps :</p>
              <span>{{TempsPreparation}}</span>
            </div>
          </div>

  
        </section>
      </div>
      <div class="wrapper2">
        <section class="ingredient">
          <p>Les ingrédients:</p>
          <ul class="list-ingredient">
            <li
              v-for="ingredient in recipe.ingredients"
              :recipe="ingredient"
              :key="ingredient.id"
            >{{ingredient[0]}}-{{ingredient[1]}}</li>
          </ul>
        </section>
        <section class="w-500 ingredient">
          <p>Etapes de préparation :</p>
          <ul class="list-ingredient">
            <li v-for="etape in recipe.etapes" :recipe="etape" :key="etape.id">{{etape}}</li>
          </ul>
        </section>
      </div>
      <div class="btn-recette">
        <a href="#" class="btn btn-small" @click.prevent="onRemove">Supprimer cette recette</a>&nbsp;
        <router-link :to="`/edit/${recipe.id}`" class="btn btn-small">Modifier</router-link>
      </div>
      
    </main>
  </div>
</template>

<script>
import RecipeService from "../services/RecipeService.js";
export default {
  name: "RecipeDetail",
  props: {
    recipe: {
      type: Object
    }
  },
  computed: {
    TempsPreparation: function() {
      var min = this.recipe.tempsPreparation;
      var hours = Math.floor(min / 60);
      var minutes = min % 60;
      return hours + "h" + minutes;
    }
  },
  methods: {
    onRemove: function() {
      this.$emit("remove", this.recipe);
    }
  }
};
</script>

<style scoped>
.btn-recette {
  margin: 20px auto;
  text-align: center;
}
@media screen and (max-width: 880px) {
  .wrapper, .wrapper2{
    display: flex;
    flex-direction: column;
    width:100% !important;
  }

  .detail{
    align-items: baseline;
  }

  ul, li{
    padding:0;margin:0;
  }
 
}

.wrapper, .wrapper2{
  width:900px;
  align-items: center;
}


.wrapper {
  display: flex;
  justify-content: space-between;
   margin: 40px auto;
}
.wrapper2 {
  display: flex;
  -ms-flex-pack: center;
  margin: auto;
  justify-content: space-between;
  background: #fff;
  align-items: baseline;
  border-radius: 1rem;
  box-shadow: 8px 8px 30px -19px rgba(0,0,0,0.54);
}

.img-recette {
  margin: 0 0 30px !important;
}

ul li{
  margin-bottom: 5px;
}
@media screen and (min-width: 880px) {
.w-500 {
  width: 50%;
}}

.ingredient{
   padding: 2em;
   margin-top: 5px;
}


.ingredient p {
  text-align: left;
}

li {
  text-align: left;
}

.baseline {
  align-items: baseline;
}

.conditions{
  margin-bottom: 5px;
}

.box {
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 8px 8px 30px -19px rgba(0,0,0,0.54);
}

.detail {
  display: flex;
  justify-content: space-between;
  align-self: normal;
  text-align: center;
  
}
.detail div:nth-child(odd),.detail div:nth-child(even) {
  padding: 0.5em;
  margin: 0 5px;
}
.detail div:nth-child(odd) {
  width: 100%;
}

.detail div:nth-child(even) {
  width: 100%;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.titre-recette {
  color: #908f8f;
  background: #fff;
  display: inline-flex;
  flex-direction: column;
  padding: 0 2em 2em;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 8px 8px 30px -19px rgba(0,0,0,0.54);
}

.titre-recette h2 {
  font-family: 'italianno';
  color: #85B039;
  font-size: 60px;
}
figure img {
  display: block;
  max-width: 350px ;
  padding: 15px;
  background-color: white;
  border-radius: 1em;
  box-shadow: 8px 8px 30px -19px rgba(0,0,0,0.54);
}
</style>
