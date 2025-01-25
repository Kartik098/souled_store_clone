<script setup>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="app">
    <Header /> <!-- Header is globally included -->
    <main class="main-content">
      <router-view /> <!-- Routes will render here -->
    </main>
    <Footer /> <!-- Footer is globally included -->
  </div>
</template>

<script>

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
