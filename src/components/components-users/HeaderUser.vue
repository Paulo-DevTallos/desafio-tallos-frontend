<template>
  <header class="header-user">
      <div>
        conteudo 1
      </div>
      <div>
        <RouterLink to="/painel">
          <img src="/img/tallos-logo-(1).png" alt="botão do menu">
        </RouterLink>
      </div>
      <div class="user-icon">
        <div class="user-name">
          Usuário
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