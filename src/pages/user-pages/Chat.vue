<template>
  <HeaderUser />
    <main id="bg-color">
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
                <div id="my-message">
                  mensagem
                </div>
              </li>
              <li>
                <div id="other-message">
                  mensagem
                </div> 
              </li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
              <li>mensagem</li>
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
    </main>
  <FooterUser />
</template>

<script>
import HeaderUser from '../../components/components-users/HeaderUser.vue'
import FooterUser from '../../components/components-users/FooterUser.vue'
import Typography from '../../components/components-users/Typography.vue'

export default {
  name: 'Chat',
  components: {
    HeaderUser,
    FooterUser,
    Typography
  },
  data() {
    return {
      title: 'Chat - Usuários'
    }
  }
}
</script>

<style scoped>
  @import '../../assets/chat.css';
</style>