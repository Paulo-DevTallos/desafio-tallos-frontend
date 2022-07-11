<template>
  <HeaderUser />
    <main id="bg-color">
      <Typography :title="title" />
      <div class="container-contacts">
        <div class="container-form">
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
        </div>
        <div class="user-list">
          <div>
            <header class="user-avaliable">
              <h4>Resultados de usuários</h4>
            </header>
          </div>
          <CardUsers />
        </div>
      </div>
    </main>
  <FooterUser />
</template>

<script>
import Services from '../../services/axios-request';

import HeaderUser from '../../components/components-users/HeaderUser.vue';
import FooterUser from '../../components/components-users/FooterUser.vue';
import Typography from '../../components/components-users/Typography.vue';
import CardUsers from '../../components/components-users/CardUsers.vue';

export default {
  name: "Contacts",
  components: {
    HeaderUser,
    FooterUser,
    Typography,
    CardUsers
},
  data() {
    return {
      title: 'Cadastro de usuários',
      user: {
        name: '',
        email: '',
        rules: '',
        password: '',
      }
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
  @import '../../assets/contacts.css';
</style>