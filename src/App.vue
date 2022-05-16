<template>
  <div id="app">
    <div id="nav">
<!--      Liens de page-->
      <router-link to="/">Accueil</router-link> |
      <router-link to="/informations">Informations</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'LaureDinateur',
};
</script>

<style>

</style>
