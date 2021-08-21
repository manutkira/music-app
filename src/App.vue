<template>
<!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <app-header/>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
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

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s ease-in;
}

.fade-leave-to {
  transition: all 0.5s ease-out;
  opacity: 0;
}
</style>
