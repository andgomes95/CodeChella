<template>
  <div>
    <NavBar />
    <BannerInitialPage />
    <HomePage />
    <FooterContacts />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterContacts from './components/FooterContacts.vue';
import BannerInitialPage from './components/BannerInitialPage.vue';
import HomePage from './pages/HomePage.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterContacts,
    BannerInitialPage,
    HomePage,
  }
}
</script>

<style>
#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
