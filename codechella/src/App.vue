<template>
  <div>
    <NavBar />
    <figure class="image is-4by3 is-hidden-tablet"><img src="@/assets/banner-mobile.png" alt="CodeChella 2023"></figure>
    <figure class="image is-2by1 is-hidden-desktop is-hidden-mobile"><img src="@/assets/banner-tablet.png" alt="CodeChella 2023"></figure>
    <figure class="image is-4by1 is-hidden-touch"><img src="@/assets/banner-desktop.png" alt="CodeChella 2023"></figure>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  color:#fff;
}
</style>
