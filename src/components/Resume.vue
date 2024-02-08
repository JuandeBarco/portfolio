<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="vertical-center">
        <p class="first-line">Hi, my name is</p>
        <p class="second-line">Juan de Dios Barajas</p>
        <p class="third-line">Full Stack Developer</p>
        <p class="resume-text">I'm a passionate software developer specializing in building modern web applications using Laravel, Vue.js, and more!</p>
        <div class="text-center">
            <RouterLink to="/about">
                <button class="btn call-to-action">More about me</button>
            </RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Resume',
    // Your component's JavaScript logic goes here
}
</script>

<style scoped>
/* Your component's CSS styles go here */
.vertical-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;
}
.first-line {
    font-size: 2rem;
    font-weight: 800;
    margin-top: 0;
    text-align: center;
    color: #F9322C;
}

.second-line {
    font-size: 4rem;
    font-weight: 900;
    margin-top: 0;
    text-align: center;
    color: #6C6C6C;
}

.third-line {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 0;
    text-align: center;
    color: #6C6C6C;
}

.resume-text {
    font-size: 1.5rem;
    margin-top: 4rem;
    margin-left: 10vh;
    margin-right: 10vh;
    text-align: center;
    color: #6C6C6C;
}

.call-to-action {
    margin-top: 1rem;
    text-align: center;
    background-color: #F9322C;
    color: white;
    height: 3rem;
    width: auto;
    font-weight: 400;
}

.call-to-action:hover {
    background-color: #d73826;
    color: white;
}
</style>
