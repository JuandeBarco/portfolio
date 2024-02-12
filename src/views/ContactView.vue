<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <Navbar />
  <div class="contact">
    <h1>This is a contact page</h1>
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
  .contact {
    min-height: 90vh;
    display: flex;
    align-items: center;
  }
}
</style>
