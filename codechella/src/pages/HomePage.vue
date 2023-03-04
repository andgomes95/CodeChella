<template>
  <div class="home">
    <BannerInitialPage />
    <div class="content">
      <AboutEvent />
      <LineUp />
    </div>
    <figure class="image"><img src="@/assets/images/footer-image.png" alt="CodeChella 2023"></figure>
  </div>
</template>

<script>
import LineUp from '../components/HomePage/LineUp.vue';
import AboutEvent from '../components/HomePage/AboutEvent.vue';
import BannerInitialPage from '../components/BannerInitialPage.vue';

export default {
  name: 'HomePage',
  components: {
    LineUp,
    AboutEvent,
    BannerInitialPage
  }
}
</script>

<style scoped>
.content{
  background: linear-gradient(180deg, #BFDAE6 0%, #FCF0DD 50%, #FACF9D 100%);
  padding: 3rem;
  text-align: center;
  margin-bottom: 0% !important;
}
</style>