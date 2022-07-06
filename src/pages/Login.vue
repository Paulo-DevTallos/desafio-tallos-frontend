<template>
  <div class="page-login">
    <div class="banner"> 
    </div>
    <div class="login-container">
      <form>
        <div class="logo-container">
          <img src="/img/tallos-logo-(1).png" alt="Logo Tallos">
        </div>
        <div>
          <input type="text" placeholder="Digite seu e-mail">
          <input type="password" placeholder="Digite sua senha">
          <button>Login</button>
          <p>Desafio Tallos gerenciador de funcionários &copy;2022</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
  @import '../assets/login.css';
</style>