<template>
  <div class="columns about">
    <div class="column is-4 is-offset-2 is-full-mobile">
      <figure class="image is-square-mobile"><img src="@/assets/present-homepage.png" alt="CodeChella 2023 - present homepage"></figure>
    </div>
    <div class="column is-4 is-full-mobile">
      <h2><p>{{"< 11 e 12 de Marco >"}}</p>
      {{"Alurodromo de Sao Paulo"}}</h2>
      <div class="block contentAbout">
        Hora de programar nossa memoria com novas lembrancas! Uma nova experiencia sobre linguagens e, claro, tecnologia! Somos um festival diverso, com varios artistas e referencias. Divirta-se!
      </div>
      <p><button class="button">Comprar Ingresso!</button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutEvent'
}
</script>

<style scoped>
.contentAbout{
  text-align: justify;
  padding: 0.3rem;
}
</style>