<template>
  <div class="page-login">
    <div class="banner"></div>
    <div class="login-container">
			<div class="logo-container">
				<img src="/img/tallos-logo-(1).png" alt="Logo Tallos">
			</div>
      <form @submit.prevent="handleSubmitLogin">
        <div>
          <input type="text" v-model="user.email" placeholder="Digite seu e-mail">
          <input type="password" v-model="user.password" placeholder="Digite sua senha">
          <ButtonSubmit
            @submitUser="handleSubmitLogin"
            :btn_title="title"
          />
        </div>
      </form>
			<FormLogin />
			<p>Desafio Tallos gerenciador de funcionários &copy;2022</p>
      <PopUpAlert
        :info_alert="user_connected"
        v-if="isLoggedUser"/>
    </div>
  </div>
</template>

<script>
import PopUpAlert from '../components/alert-popups/PopUpAlert.vue';
import ButtonSubmit from '../components/components-users/ButtonSubmit.vue';
import FormLogin from '../components/Forms/FormLogin.vue';

export default {
  name: "About",
  components: {
    PopUpAlert,
    ButtonSubmit,
    FormLogin
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
      this.$store.dispatch("handleSubmitLogin", this.user);
      alert('usuario logado')
    }
  },
}
</script>

<style scoped>
  @import '../assets/login.css';
</style>
