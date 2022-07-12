<template>
  <header class="header-user">
      <div class="useful-links">
        <a href="https://tallos.com.br/blog/" target="_blank">
          Tallos blog
        </a>
        <a href="https://help.tallos.com.br/" target="_blank">
          FAQ
        </a>
      </div>
      <div>
        <RouterLink to="/painel">
          <img src="/img/tallos-logo-(1).png" alt="botão do menu">
        </RouterLink>
      </div>
      <div class="user-icon">
        <div class="user-name">
          {{ $store.state.user.name }}
        </div> 
        <img src="/img/user.svg" class="icon" alt="icone do usuário">
      </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderUser',
}
</script>

<style scoped>
  @import '../../assets/components/header-user.css';
</style>