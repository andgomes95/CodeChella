<template>
  <div class="columns is-multiline">
    <div class="column is-full-touch is-4-desktop is-offset-2-desktop">
      <figure class="image"><img src="@/assets/present-homepage.png" alt="CodeChella 2023 - present homepage"></figure>
    </div>
    <div class="column is-full-touch is-4-desktop">
      <h2><p>{{"< 11 e 12 de Marco >"}}</p>
      {{"Alurodromo de Sao Paulo"}}</h2>
      <div class="block contentAbout">
        Hora de programar nossa memoria com novas lembrancas! Uma nova experiencia sobre linguagens e, claro, tecnologia! Somos um festival diverso, com varios artistas e referencias. Divirta-se!
      </div>
      <button class="button">
        <div>
          {{"Comprar Ingresso!" }}
        </div>
        <font-awesome-icon class="icon" icon="fa-solid fa-ticket" />
      </button>
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
.button{
  color: white;
  background-color: #2E7BA2;
  border-radius: 0.5rem;
  border: 0;
  box-shadow: 0.1rem 0.1rem #444;
}
</style>