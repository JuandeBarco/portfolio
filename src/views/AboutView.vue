<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <Navbar />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  mounted() {
    console.log('AboutView mounted. Access global property apiUrl:', this.$apiUrl)
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
