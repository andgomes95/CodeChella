<template>
  <div class="columns">
    <div class="column"><router-link to="/experience">A experiencia</router-link></div>
    <div class="column"><router-link to="/sectionMap">Mapa de Setores</router-link></div>
    <div class="column"><router-link to="/info">Informacoes</router-link></div>
    <div class="column"><router-link to="/tickets">Ingresso</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'OptionsNavBar'
}
</script>

<style scoped>
.column {
  padding-top: 2rem;
}
a {
  color: #fff;
  font-family: Raleway;
  font-style: Bold;
  font-size: 20px;
}
</style>