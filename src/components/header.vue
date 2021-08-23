<template>
<!-- eslint-disable-next-line vue/max-attributes-per-line -->
    <!-- Header -->
  <header id="header" class="bg-gray-500">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link class="text-white font-bold uppercase text-4xl mr-2 mt-0" :to="{ name: 'home' }" exact-active-class="no-active">{{$t('header.music')}}</router-link>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <router-link class=" px-2 text-white fs mr-0 ml-5 m-2" :to="{ name: 'about' }">{{$t('header.about')}}</router-link>
          </li>
          <li v-if="!userLoggedIn">
            <a class=" px-2 text-white fs ml-6" href="#" @click.prevent="toggleAuthModal">
               Login / Register
                </a>
          </li>
          <template v-else>
          <li>
            <router-link class=" px-2 text-white fs mr-0 ml-5 m-2" :to="{ name: 'manage' }">{{$t('header.manage')}}</router-link>
          </li>
          <li>
            <a class=" px-4 text-white fs" href="#" @click.prevent="signout">{{$t('header.logOut')}}</a>
          </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>

import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState(['userLoggedIn']),
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
    signout() {
      this.$store.dispatch('signout');

      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: 'home' });
      }
    },
  },
};
</script>
