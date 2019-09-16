<template>
  <div class="box-card">
    <div class="col-md-5">
      <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`" />
    </div>
    <div>
      <div class="card">
        <h3 class="title">{{recipe.titre}}</h3>
        <p class="text">{{recipe.description}}</p>
        <ul class="list-group list-group-flush" style="text-align: left">
          <li class="list-group-item"><b>Temps de préparation :</b> {{recipe.tempsPreparation}} min</li>
          <li class="list-group-item"><b>Nombre de convives :</b> {{recipe.personnes}} personne(s)</li>
          <li class="list-group-item"><b>Niveau :</b> {{recipe.niveau}}</li>
          <span class="ingredients-title"><p><b>Ingrédients :</b></p></span>
          <ul id="ingredients-list">
            <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">
              {{ingredient[0]}} {{ingredient[1]}}
            </li>
          </ul>
        </ul>
         <li class="list-group-item">
        <p><b>Étapes :</b></p>
         <ol id="etapes-list">
            <li v-for="(etapes) in recipe.etapes" :key="etapes.id">
              {{index}} {{etapes}}
            </li>
          </ol>
         </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecipeDetail",
  props: {
    recipe: {
      type: Object
    }
  },
  computed: {
    DEFAULT_PHOTO: function() {
      return "https://s1.qwant.com/thumbr/0x0/2/2/6788a08a24aefe72817478982ee2e6/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fgurucul.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fdefault-user-icon-profile.png&q=0&b=1&p=0&a=1";
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
.conteneur {
  width: 100%;
}
.title{
  padding-top: 2%;
  font-family: 'cormorant';
  font-size: 40px;
  color: #85b039;
}
ol {
  list-style: none;
  counter-reset: my-awesome-counter;
  padding-left: 0px;
}
ol li {
  counter-increment: my-awesome-counter;
}
ol li::before {
  content: counter(my-awesome-counter) ". ";
  font-family: 'cormorant';
}
.box-card {
  width: 100%;
  border: 1px solid rgb(233, 233, 233);
  display: flex;
  flex-flow: row;
  background-color: #fff;
}
img {
  width: 100%;
  height: auto;
}
.data-v-0ce62faa {
  margin: 0;
}
.card {
  width: 100%;
}
.col-md-5{
  padding: 0;
  margin: 0;
}
.text, .title, h4{
  padding-left: 3%;
}
h4{
  padding-top: 2%;
}
.ingredients-title{
  padding: 2% 0 0 3%;
}
#ingredients-list{
  padding-bottom: 2%;
}
#etapes-list{
  text-align: left;
}
</style>