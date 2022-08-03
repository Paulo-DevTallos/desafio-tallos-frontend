<template>
  <form @submit.prevent="handleSubmitUser">
    <div>
      <font-awesome-icon :icon="['fas', 'user-plus']" />
    </div>
    <div>
      <input type="text" v-model="user.name" placeholder="Digite um nome de usuário">
      <input type="text" v-model="user.email" placeholder="Digite o e-mail do usuário">
      <select name="permission" v-model="user.rules">
        <option value="" disabled>--Selecione a permissão--</option>
        <option value="operador">Operador</option>
        <option value="admin">Admin</option>
      </select>
      <input type="password" v-model="user.password" placeholder="Digite uma senha para o usuário">
      <button type="submit">
        {{ title }}
      </button>
      <!--<ButtonSubmit 
        @submitUser="handleSubmitUser"
        :btn_title="title"
      />-->
    </div>
  </form>
</template>

<script>
import Services from '../../services/axios-request';
import ButtonSubmit from './ButtonSubmit.vue';

export default {
  name: "FormUserData",
  components: { 
    ButtonSubmit 
  },
  data() {
    return {
      title: 'Cadastrar',
      user: {
        name: "",
        email: "",
        rules: "",
        password: "",
      }
    };
  },
  methods: {
    //handleSubmitUser() {
      //this.user = ''
      /*this.emitter.emit('handleSubmitUser', this.user)
    }*/
    async handleSubmitUser() {
      const response = await Services.createUser({
        name: this.user.name,
        email: this.user.email,
        rules: this.user.rules,
        password: this.user.password
      });

      console.log(response)
      this.user = ''
    }
  },
}
</script>

<style scoped>
  @import '../../assets/components/form-user.css';
</style>