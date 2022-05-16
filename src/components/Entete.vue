<template>
  <header>
    <!-- Logo du site -->
    <router-link class="logo" to="/">
      <div class="nom">Laure Dinateur</div>
      <div class="metier">Graphiste</div>
    </router-link>
    <nav><!-- Menu de navigation -->
      <ul>
        <li>
          <!-- Lien actif : On ajoute la classe .actif au lien
          représentant la page actuelle -->
          <router-link to="/">Accueil</router-link>
        </li>
        <li>
          <router-link to="/informations">Informations</router-link>
        </li>
        <li>
          <router-link to="/contact">Me contacter</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Entete',
};
</script>

<style scoped>

</style>
