<template>
  <footer class="footer">
    <div class="content has-text-left	columns">
      <div class="column column is-half is-offset-2 our-networks">
        <p><img src="@/assets/images/logo-footer.png" alt="logo codechella" /></p>
        Acesse nossas redes:
        <font-awesome-icon class="icon" icon="fa-brands fa-whatsapp" />
        <font-awesome-icon class="icon" icon="fa-brands fa-twitch" />
        <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
        <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
      </div>
      <div class="column is-4">
        <p></p>
        <p>Desenvolvido por Andre Gomes</p>
        <p>Projeto ficticio sem fins comerciais</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterContacts'
}
</script>

<style scoped>
.footer{
  background-color: #FACF9D;
}
.content{
  color: #444444;
}
.our-networks{
  font-size: 1rem;
}
.icon{
  padding: 0.25rem;
}
</style>