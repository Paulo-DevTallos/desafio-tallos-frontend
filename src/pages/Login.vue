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
        :info_message="message"
        v-if="hiddenPopup"/>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import PopUpAlert from '../components/alert-popups/PopUpAlert.vue';
import ButtonSubmit from '../components/components-users/ButtonSubmit.vue';

const socket = io('http://localhost:3002')

export default {
  name: "About",
  components: {
    PopUpAlert,
    ButtonSubmit
},
  data() {
    return {
      message: '',
      hiddenPopup: false,
      title: 'Login',
      user: {
        email: "",
        password: "",
      }
    };
  },
  methods: {
    handleSubmitLogin() {
      this.$store.dispatch("handleSubmitLogin", this.user)
    }
  },
}
</script>

<style scoped>
  @import '../assets/login.css';
</style>