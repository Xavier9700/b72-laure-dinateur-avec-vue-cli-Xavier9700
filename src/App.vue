<template>
  <div id="app">
    <entete/>
    <router-view/>
    <pied-de-page/>
  </div>
</template>

<script>
import Entete from '@/components/Entete.vue';
import PiedDePage from '@/components/PiedDePage.vue';

export default {
  name: 'LaureDinateur',
  components: { PiedDePage, Entete },
};
</script>

<style>

</style>
