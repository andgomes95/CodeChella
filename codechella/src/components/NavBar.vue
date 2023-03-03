<template>
  <nav>
    <div class="columns is-multiline is-mobile is-desktop is-centered navbar">
      <div class="column is-one-quarter-desktop is-full-tablet is-8-mobile">
        <router-link to="/">
          <img src="@/assets/logo-codechella.png" alt="CodeChella 2023">
        </router-link>
      </div>
      <div class="column is-hidden-mobile is-8-desktop is-offset-1-desktop is-full-tablet">
        <OptionsNavBar />
      </div>
      <div class="is-hidden-tablet faBars is-2-mobile">
        <font-awesome-icon icon="fa-bars" />
      </div>

    </div>
  </nav>
</template>

<script>
import OptionsNavBar from './OptionsNavBar.vue';

export default {
  name: 'NavBar',
  components: {
    OptionsNavBar
  }
}
</script>

<style scoped>
.navbar{
  background-color: #2E7BA2;
  padding: 2rem;
  text-align: center;
  color: white;
}
.faBars{
  padding: 1.2rem;
  font-size: 2rem;
}
</style>