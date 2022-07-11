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
        <div class="user-list">
          <div>
            <header class="user-avaliable">
              <h4>Resultados de usuários</h4>
            </header>
          </div>
          <ul class="users">
            <li>
              <div>
                <div class="content-user">
                  <span class="title-id">Nome:</span><span>Paulo Sérgio</span>
                </div>
                <div class="content-user"> 
                  <span class="title-id">Email:</span><span>email@email.com</span>
                </div>
                <div class="content-user"> 
                  <span class="title-id">Permissão:</span><span>User</span>
                </div>
              </div>
              <div class="command-user">
                <font-awesome-icon :icon="['fas', 'user-pen']" />
                <font-awesome-icon :icon="['fas', 'trash-can']" />
              </div>
            </li>
          </ul>
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