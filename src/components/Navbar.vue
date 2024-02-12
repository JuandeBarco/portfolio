<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink to="/">
                                <a class="nav-link active" aria-current="page">Home</a>
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/about">
                                <a class="nav-link">About</a>
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/portfolio">
                                <a class="nav-link">Portfolio</a>
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/contact">
                                <a class="nav-link">Contact</a>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    // Your component's JavaScript logic goes here
}
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>
