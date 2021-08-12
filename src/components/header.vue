<template>
<!-- eslint-disable-next-line vue/max-attributes-per-line -->
    <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-4xl mr-2 mt-0" href="#">Music</a>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!userLoggedIn">
            <a class="text-pink-400 px-2 text-white fs ml-6" href="#" @click.prevent="toggleAuthModal">
               Login / Register
                </a>
          </li>
          <template v-else>
          <li>
            <a class="text-pink-400 px-2 text-white fs mr-0 ml-5 m-2" href="#">Manage</a>
          </li>
          <li>
            <a class="text-pink-400 px-4 text-white fs" href="#" @click.prevent="signout">Log Out</a>
          </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>

import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState(['userLoggedIn']),
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
    ...mapActions(['signout']),
  },
};
</script>
