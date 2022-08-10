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
    </div>
  </form>
</template>

<script>
export default {
  name: "FormUserData",
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
    async handleSubmitUser() {
      await this.emitter.emit('handleSubmitUser', this.user)
    }
  },
}
</script>

<style scoped>
  @import '../../assets/components/form-user.css';
</style>