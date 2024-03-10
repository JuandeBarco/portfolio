<script setup>
import Navbar from '../components/Navbar.vue';
import ContactItem from '@/components/ContactItem.vue';
</script>

<template>
  <Navbar />
  <div>
    <h1 class="text-center">Contact</h1>
  </div>
  <div class="contact">
    <ContactItem
      :contactName="'LinkedIn'"
      :contactLogo="'linkedin.png'"
    />
    <ContactItem
      :contactName="'GitHub'"
      :contactLogo="'github.png'"
    />
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  mounted() {
    console.log('AboutView mounted. Access global property apiUrl:', this.$apiUrl)
  },
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
