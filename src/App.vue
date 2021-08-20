<template>
<!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <app-header/>
  <router-view/>
  <!-- Player -->
  <player/>
  <auth-modal/>
</template>

<script>
import AppHeader from './components/header.vue';
import AuthModal from './components/auth.vue';
import Player from './components/player.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal,
    Player,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>
