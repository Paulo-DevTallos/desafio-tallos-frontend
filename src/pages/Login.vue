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
          <ButtonSubmit 
            @submitUser="handleSubmitLogin"
            :btn_title="title"
          />
          <p>Desafio Tallos gerenciador de funcionários &copy;2022</p>
        </div>
      </form>
      <PopUpAlert 
        :info_alert="user_connected"
        v-if="isLoggedUser"/>
    </div>
  </div>
</template>

<script>
import PopUpAlert from '../components/alert-popups/PopUpAlert.vue';
import ButtonSubmit from '../components/components-users/ButtonSubmit.vue';

export default {
  name: "About",
  components: {
    PopUpAlert,
    ButtonSubmit
},
  data() {
    return {
      user_connected: '',
      isLoggedUser: false,
      title: 'Login',
      user: {
        email: "",
        password: "",
      }
    };
  },
  methods: {
    handleSubmitLogin() {
      const email = this.user.email
      const currentEmail = localStorage.getItem('email')

      if(email !== currentEmail) {
        this.$store.dispatch("handleSubmitLogin", this.user);
      } else {
        this.isLoggedUser = true
        this.user_connected = email
        setInterval(() => {
          this.isLoggedUser = false
        }, 4000)
      }
    }
  },
}
</script>

<style scoped>
  @import '../assets/login.css';
</style>