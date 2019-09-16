<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>
@font-face {
    font-family: 'cormorant';
    src: url('fonts/cormorant-mediumitalic-webfont.woff') format('woff'),
         url('fonts/cormorant-mediumitalic-webfont.woff2') format('woff2');
}

@font-face {
    font-family: 'italianno';
    src: url('fonts/italianno-regular-otf-webfont.woff') format('woff'),
         url('fonts/italianno-regular-otf-webfont.woff2') format('woff2');
}

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: #666;
  }

  body {
    margin: 0;
    background: url("assets/citron.jpg");
  }

  .container {
    max-width: 1152px;
    margin: 0 auto;
  }

  .centered {
    text-align: center;
  }

  .actions {
    margin-top: 1.4em;
  }

  /**
   * Styles pour un bouton
   */


  .btn.btn-small {
    padding: 0.15em 0.5em;
    font-size: 0.9em;
    text-decoration: none;
    color: #85B039;
  }

  .btn.btn-small:hover {
    font-size: 20px;
    transition: 0.5s;
  }

  /**
   * Style pour les formulaires
   */

  form input[type="text"],
  form input[type="search"],
  form input[type="password"],
  form input[type="date"],
  form input[type="url"],
  form select {
    padding: 0.5em 0.9em;
    border-radius: 2px;
    border: thin solid #c0c0c0;
    background: linear-gradient(to bottom, #e6e6e6 0%, transparent 20%);
  }
</style>
