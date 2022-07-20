<template>
  <HeaderUser />
    <Template>
      <Typography :title="title" />
      <div class="container-contacts">
        <div class="container-form">
          <FormUserData />
        </div>
        <div class="user-list">
          <header class="user-avaliable">
            <h4>Resultados de usuários</h4>
          </header>
          <div class="user-avaliable">
            <input type="text" v-model="email" placeholder="Digite um e-mail de usuário">
            <button @click="findUser(email)">ok</button>
          </div>
          <CardUsers />
        </div>
      </div>
    </Template>
  <FooterUser />
</template>

<script>
import Services from  '../../services/axios-request'

import HeaderUser from '../../components/components-users/HeaderUser.vue';
import FooterUser from '../../components/components-users/FooterUser.vue';
import Typography from '../../components/components-users/Typography.vue';
import CardUsers from '../../components/components-users/CardUsers.vue';
import Template from '../../components/components-users/Template.vue';
import FormUserData from '../../components/components-users/FormUserData.vue';

export default {
  name: "Contacts",
  components: {
    HeaderUser,
    FooterUser,
    Typography,
    CardUsers,
    Template,
    FormUserData,
},
  data() {
    return {
      title: 'Cadastro de usuários',
      email: '',
    }
  },
  methods: {
    async findUser(email) {
      await Services.findOne(email)
        .then(res => console.log(res.data))
    }
  }
}
</script>
<style scoped>
  @import '../../assets/contacts.css';
</style>