<template>
  <div class="content">
    <BannerExperiencePage />
    <div class="columns is-desktop is-multiline">
      <div class="column is-one-third-desktop is-offset-2-desktop"> <figure class="image"><img src="@/assets/images/inclusion-image.png" alt="Inclusion"></figure></div>
      <div class="column is-one-third-desktop">
        <h6>Acessibilidade e Inclusao</h6>
        {{"Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!"}}
      </div>
    </div>
    <div class="columns is-desktop is-multiline">
      <div class="column is-one-third-desktop is-offset-2-desktop"> 
        <figure class="image"><img src="@/assets/images/sustentability-image.png" alt="CodeChella 2023"></figure>
      </div>
      <div class="column is-one-third-desktop">
        <h6>Sustentabilidade</h6>
        {{ "Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo." }}
      </div>
    </div>
    <div class="columns is-desktop is-multiline">
      <div class="column is-one-third-desktop is-offset-2-desktop"> <figure class="image"><img src="@/assets/images/artists-image.png" alt="CodeChella 2023"></figure></div>
      <div class="column is-one-third-desktop">
        <h6>Atracoes</h6>
        {{"Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!" }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperiencePage'
}
</script>

<style scoped>
.content{
  background: linear-gradient(180deg, #BFDAE6 0%, #FCF0DD 50%, #FACF9D 100%);
  padding: 3rem;
  text-align: center;
  margin-bottom: 0% !important;
}

.is-reversed {
  flex-direction: column-reverse;
}
</style>