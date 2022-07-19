<template>
  <form @submit.prevent="handleSubmitUser">
    <div>
      <font-awesome-icon :icon="['fas', 'user-plus']" />
    </div>
    <div>
      <input type="text" v-model="user.name" placeholder="Digite um nome de usuário">
      <input type="text" v-model="user.email" placeholder="Digite o e-mail do usuário">
      <select name="permission" v-model="user.rules">
        <option value="null" disabled>--Selecione a permissão--</option>
        <option value="operador">Operador</option>
        <option value="admin">Admin</option>
      </select>
      <input type="password" v-model="user.password" placeholder="Digite uma senha para o usuário">
      <button>Cadastrar</button>
    </div>
  </form>
</template>

<script>
import Services from '../../services/axios-request';

export default {
  name: 'FormUserData',
  data() {
    return {
      user: {
        name: '',
        email: '',
        rules: '',
        password: '',
      },
    }
  },
  methods: {
    async handleSubmitUser() {
      const response = await Services.createUser({
        name: this.user.name,
        email: this.user.email,
        rules: this.user.rules,
        password: this.user.password
      })

      console.log(response)
    }
  }
}
</script>

<style scoped>
  @import '../../assets/components/form-user.css';
</style>