<template>
  <div class="page-login">
    <div class="banner"></div>
    <div class="login-container">
			<div class="logo-container">
				<img src="/img/tallos-logo-(1).png" alt="Logo Tallos">
			</div>
			<FormLogin
				@handleLogin="submitLogin"
			/>
			<p>Desafio Tallos gerenciador de funcionários &copy;{{ year }}</p>
      <PopUpAlert
        :info_alert="user_connected"
        v-if="isLoggedUser"/>
    </div>
  </div>
</template>

<script>
import PopUpAlert from '../components/alert-popups/PopUpAlert.vue';
import FormLogin from '../components/Forms/FormLogin.vue';

export default {
  name: "About",
  components: {
    PopUpAlert,
    FormLogin
},
  data() {
    return {
      user_connected: '',
      isLoggedUser: false,
      title: 'Login',
			year: '',
      user: {
        email: "",
        password: "",
      }
    };
  },
  methods: {
    submitLogin(user) {
			this.$store.dispatch('userStore/login', user);
      alert('usuario logado')
    },

		loardCurrentDate() {
			const currentDate = new Date()
			this.year = currentDate.getFullYear().toLocaleString()
		}
  },

	created() {
		this.loardCurrentDate()
	}
}
</script>
