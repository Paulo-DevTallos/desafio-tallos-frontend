<template>
  <HeaderUser />
    <main id="bg-color">
      <Typography :title="title" />
      <div class="container-contacts">
        <div class="container-form">
          <form action="">
            <div>
              <font-awesome-icon :icon="['fas', 'user-plus']" />
            </div>
            <div>
              <input type="text" placeholder="Digite um nome de usuário">
              <input type="text" placeholder="Digite o e-mail do usuário">
              <select name="" id="" >
                <option value="">Operador</option>
                <option value="">Admin</option>
              </select>
              <input type="text" placeholder="Digite uma senha para o usuário">
              <button>Cadastrar</button>
            </div>
          </form>
        </div>
        <div>
          listar usuarios
        </div>
      </div>
    </main>
  <FooterUser />
</template>

<script>
import HeaderUser from '../../components/components-users/HeaderUser.vue';
import FooterUser from '../../components/components-users/FooterUser.vue';
import Typography from '../../components/components-users/Typography.vue';

export default {
  name: "Contacts",
  components: {
    HeaderUser,
    FooterUser,
    Typography
  },
  data() {
    return {
      title: 'Cadastro de usuários'
    }
  }
}
</script>
<style scoped>
  @import '../../assets/contacts.css';
</style>