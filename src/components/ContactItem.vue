<script setup>

</script>

<template>
    <div class="divContactItem d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
            <img :src="contactLogo" class="card-img-top p-4" alt="...">
            <div class="card-body text-center">
                <h1 class="card-title p-1">{{ contactName }}</h1>
                <!-- <p class="card-text">ID: {{ userInstanceId }}</p> -->
                <a :href="contactURL" target="_blank" class="btn btn-primary">
                    <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
                    Go to {{ contactName }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactItem',
    mounted() {
        console.log('ContactItem mounted. Linked in URL:'+ this.linkedInURL+ 'GitHub URL:'+ this.githubURL);
        if (this.contactName === 'LinkedIn') {
            this.contactURL = this.$linkedinUrl;
        } else if (this.contactName === 'GitHub') {
            this.contactURL = this.$githubUrl;
        }
    },
    props: {
        contactName: String,
        contactLogo: String,
    },
    data() {
        return {
            contactURL: '',
        }
    },
}
</script>

<style scoped>
.divContactItem {
    margin: 0 auto;
    width: 100%;
    padding: 5vh;
}
</style>
