<template>
  <div class="page-login">
    <div class="banner"> 
    </div>
    <div class="login-container">
      <form @submit.prevent="handleSubmitLogin">
        <div class="logo-container">
          <img src="/img/tallos-logo-(1).png" alt="Logo Tallos">
        </div>
        <div>
          <input type="text" v-model="user.email" placeholder="Digite seu e-mail">
          <input type="password" v-model="user.password" placeholder="Digite sua senha">
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
  data() {
    return {
      user: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    handleSubmitLogin() {
      this.$store.dispatch('handleSubmitLogin', this.user)
    }
  }
}
</script>

<style scoped>
  @import '../assets/login.css';
</style>