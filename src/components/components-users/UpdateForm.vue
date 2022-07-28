<template>
  <form @submit.prevent="$emit('update-user', user)">
    <div>
      <font-awesome-icon :icon="['fas', 'file-pen']" />
    </div>
    <div>
      <input type="text" v-model="user.name" placeholder="Digite um nome de usuário">
      <input type="text" v-model="user.email" placeholder="Digite o e-mail do usuário">
      <select name="permission" v-model="user.rules">
        <option value="" disabled>--Selecione a permissão--</option>
        <option value="operador">Operador</option>
        <option value="admin">Admin</option>
      </select>
      <button>
        {{ title }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "UpdateForm",
  emits: ['update-user'],
  data() {
    return {
      emits: ['update-user'],
      title: 'Atualizar',
      user: {
        name: "",
        email: "",
        rules: "",
      }
    }
  }
}
</script>

<style scoped>
  @import '../../assets/components/form-user.css';
</style>
