<template>
  <div id="addEtape">
      <div class="form-group" v-for="(ingredient, index) in recipe.etapes" :key="index">
      <label for="ingredient">Etape :</label>
      <input type="text" id="quantite" placeholder="Exemple : peser la farine">
    </div>
    <div>Ajouter une étape
      <button class="button" @click.prevent="addRow">➕</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "addEtape",
    props: {
      recipe: {
        type: Object,
        default: function(){
          return {
            etapes: []
          }
        }
      }
  },
  data: function(){
    return{
      valeur: ""
    }
  },
  methods: {
    addRow: function () {
      this.recipe.etapes.push({
        value: "ingredient"});
    }
  }
}
</script>
<style scoped>
form input{
  background: white;
}
body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}

li {
  margin: 8px 0;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

del {
  color: rgba(0, 0, 0, 0.3);
}
</style>