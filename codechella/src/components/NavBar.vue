<template>
  <nav>
    <div class="columns is-multiline is-mobile is-desktop is-centered navbar">
      <div class="column is-one-quarter-desktop is-12-tablet is-10-mobile">
        <a href="https://bulma.io">
          <img src="@/assets/logo-codechella.png" alt="CodeChella 2023">
        </a>
      </div>
      <div class="column is-hidden-mobile is-6-desktop is-offset-1-desktop is-full-tablet">
        <OptionsNavBar />
      </div>
      <div class="is-hidden-tablet is-1-offset-mobile">
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
}
.fa-bars{
  padding: 2rem;
  font-size: 20px;
}
</style>