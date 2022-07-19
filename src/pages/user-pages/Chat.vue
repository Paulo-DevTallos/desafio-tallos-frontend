<template>
  <HeaderUser />
    <Template>
      <Typography :title="title" />
      <div class="container-chat">
        <div class="online-users">
          <h3>Usuários online</h3>
          <div>
            <ul class="users">
              <li>
                <div class="status"></div>
                Paulo Sérgio
              </li>
              <li>
                <div class="status"></div>
                Usuário Teste
              </li>
              <li>
                <div class="status"></div>
                Usuário Cadastrado
              </li>
            </ul>
          </div>
        </div>
        <div class="messages-box">
          <div class="messages">
            <ul>
              <li>
                <div class="ballon">
                  <span class="user-name">Paulo Sérgio</span>
                  <p>Texto de teste para chat</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="write-field">
            <input type="text" placeholder="Digite uma mensagem">
            <button>
              <font-awesome-icon :icon="['fas', 'paper-plane']" />
            </button>
          </div>
        </div>
      </div>
    </Template>
  <FooterUser />
</template>

<script>
//import { SocketModule } from '../../services/socket'

import HeaderUser from '../../components/components-users/HeaderUser.vue'
import FooterUser from '../../components/components-users/FooterUser.vue'
import Typography from '../../components/components-users/Typography.vue'
import Template from '../../components/components-users/Template.vue'

export default {
  name: 'Chat',
  components: {
    HeaderUser,
    FooterUser,
    Typography,
    Template,
},
  data() {
    return {
      title: 'Chat - Usuários'
    }
  },
  setup() {
    const teste = 'Paulo'
    console.log(teste)
  }
}
</script>

<style scoped>
  @import '../../assets/chat.css';
</style>