<template>
<main>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</main>
</template>

<script>
import DummyModule from '../store/modules/dummy';

export default {
  created() {
    this.$store.registerModule('dummy', DummyModule);
  },
};
</script>
