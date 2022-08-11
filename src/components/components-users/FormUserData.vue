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
  <PopUpOk 
    :info_message="message"
    v-if="hiddenPopup"
  />
</template>

<script>
import PopUpOk from '../alert-popups/PopUpOk.vue';
export default {
  name: "FormUserData",
  components: { PopUpOk },
  data() {
    return {
      title: "Cadastrar",
      message: "teste",
      hiddenPopup: false,
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
      await this.emitter.emit("handleSubmitUser", this.user);
      this.hiddenPopup = true
      this.message = `Usuário ${this.user.name} cadastrado com sucesso!`
      setTimeout(() => {
        this.hiddenPopup = false
      }, 3000)
    }
  },
}
</script>

<style scoped>
  @import '../../assets/components/form-user.css';
</style>