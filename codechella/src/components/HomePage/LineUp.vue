<template>
  <div class="lineup">
    <h1>{{"/Line-Up/"}}</h1>
    <div class="columns">
      <h3 class="festivalDays column is-2 is-offset-5">{{"SABADO <11/03>"}}</h3>
    </div>
    <h2>System of a DOM</h2>
    <div class="columns is-multiline is-hidden-desktop">
      <h5 class="column is-full-mobile is-half-tablet">Python Maiden</h5>
      <h5 class="column is-full-mobile is-half-tablet">Apollo Client 2001</h5>
      <h5 class="column is-full-mobile is-half-tablet">Bon Java</h5>
      <h5 class="column is-full-mobile is-half-tablet">NickCallback</h5>
    </div>
    <div class="columns is-multiline is-hidden-touch">
      <h5 class="column">Python Maiden</h5>
      <h5 class="column">Apollo Client 2001</h5>
      <h5 class="column">Bon Java</h5>
      <h5 class="column">NickCallback</h5>
    </div>
    <div class="columns is-multiline is-hidden-touch">
      <h6  class="column is-offset-1-desktop">Linkin Promises</h6>
      <h6 class="column">Fullstack Fighters</h6>
      <h6 class="column">Papa React</h6>
      <h6 class="column">Angular in Chains</h6>
      <div class="column is-1-desktop"></div>
    </div>
    <div class="columns is-multiline is-hidden-desktop">
      <h6  class="column is-full-mobile is-half-tablet">Linkin Promises</h6>
      <h6 class="column is-full-mobile is-half-tablet">Fullstack Fighters</h6>
      <h6 class="column is-full-mobile is-half-tablet">Papa React</h6>
      <h6 class="column is-full-mobile is-half-tablet">Angular in Chains</h6>
    </div>
    <div class="columns is-hidden-touch">
      <text  class="column is-offset-2-desktop">Agnostic Front-end</text>
      <text class="column">SlipkNode</text>
      <text class="column">Pink Flutter</text>
      <text class="column">Kiss</text>
      <div class="column is-2-desktop"></div>
    </div>

    <div class="columns is-multiline is-hidden-desktop">
      <text  class="column is-full-mobile is-half-tablet">Agnostic Front-end</text>
      <text class="column is-full-mobile is-half-tablet">SlipkNode</text>
      <text class="column is-full-mobile is-half-tablet">Pink Flutter</text>
      <text class="column is-full-mobile is-half-tablet">Kiss</text>
    </div>

    <div class="columns">
      <h3 class="festivalDays column is-2 is-offset-5">{{"DOMINGO <12/03>"}}</h3>
    </div>
    <h2>Lana Del Ploy</h2>
    <div class="columns is-multiline is-hidden-touch">
      <h5 class="column">Dua Lib</h5>
      <h5 class="column">The Backnd</h5>
      <h5 class="column">CSS Styles</h5>
      <h5 class="column">ArrayAna Grande</h5>
      <h5 class="column">DJ Query</h5>
    </div>
    <div class="columns is-multiline is-hidden-desktop">
      <h5 class="column is-full-mobile is-one-third-tablet">Dua Lib</h5>
      <h5 class="column is-full-mobile is-one-third-tablet">The Backnd</h5>
      <h5 class="column is-full-mobile is-one-third-tablet">CSS Styles</h5>
      <h5 class="column is-full-mobile is-half-tablet">ArrayAna Grande</h5>
      <h5 class="column is-full-mobile is-half-tablet">DJ Query</h5>
    </div>
    <div class="columns is-multiline is-hidden-touch">
      <h6 class="column is-offset-1">Miley Cypress</h6>
      <h6 class="column">The Bootstrap Boys</h6>
      <h6 class="column">Json Derulo</h6>
      <h6 class="column">CloudPlay</h6>
      <h6 class="column">Dev Lovato</h6>
      <div class="column is-1"></div>
    </div>
    <div class="columns is-multiline is-hidden-desktop">
      <h6 class="column is-full-mobile is-half-tablet">Miley Cypress</h6>
      <h6 class="column is-full-mobile is-half-tablet">The Bootstrap Boys</h6>
      <h6 class="column is-full-mobile is-one-third-tablet">Json Derulo</h6>
      <h6 class="column is-full-mobile is-one-third-tablet">CloudPlay</h6>
      <h6 class="column is-full-mobile is-one-third-tablet">Dev Lovato</h6>
    </div>
    <div class="columns">
      <text class="column  is-offset-2">Kylie MiLOG</text>
      <text class="column">Jenking Brother</text>
      <text class="column">Rubycat Dolls</text>
      <div class="column is-2"></div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'LineUp'
}
</script>

<style scoped>
h1 {
  font-family: Calistoga;
}
.lineup {
  align-items: center;
}
.columns{
  padding: 0.5rem;
  margin-bottom: 0 !important;
}
.column{
  margin-bottom: 0 !important;
}
.festivalDays {
  font-family: Calistoga;
  background-color: #DF9010;
  color: white;
  padding: 1rem;
}
</style>