<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <FooterContacts />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterContacts from './components/FooterContacts.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterContacts
  }
}
</script>

<style>
#app {
  font-family: Raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
