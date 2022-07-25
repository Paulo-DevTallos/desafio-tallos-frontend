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
        <div class="message-box">
          <form v-if="!joined" @submit.prevent="join" class="form-user-chat">
            <label>Usuário:</label>
            <input type="text" v-model="name" disabled>
            <button>Iniciar Chat</button>
          </form>
          <div class="messages" v-else>
            <div class="chat-box">
              <div v-for="message in messages" :key="message" class="messages-container">
                [{{ message.name }}]: {{ message.text }}
              </div>
            </div>
            <form @submit.prevent="sendMessage" class="write-field">
              <input type="text" v-model="messageText" placeholder="Digite uma mensagem">
              <button>
                <font-awesome-icon :icon="['fas', 'paper-plane']" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Template>
  <FooterUser />
</template>

<script>
import { io } from 'socket.io-client'

const socket = io('http://localhost:3002')
import HeaderUser from '../../components/components-users/HeaderUser.vue'
import FooterUser from '../../components/components-users/FooterUser.vue'
import Template from '../../components/components-users/Template.vue'
import Typography from '../../components/components-users/Typography.vue'

export default {
  name: 'Chat',
  data() {
    return {
      title: 'Chat',
      joined: false,
      name: this.$store.state.user.name,
      messageText: '',
      messages: [],
    }
  },
  components: {
    HeaderUser,
    FooterUser,
    Typography,
    Template,
  },
  methods: {
    join() {
      socket.emit('join', { name: this.name }, () => {
        this.joined = true
      })
    },
    sendMessage() {
      socket.emit('createChat', {text: this.messageText }, () => {
        this.messageText = ''
      })
    }
  },
  mounted() {
    socket.emit('findAllChat', {}, res => {
      this.messages = res
    })

    socket.on('message', (message) => {
      this.messages.push(message)
    })
  }
}
</script>

<style scoped>
  @import '../../assets/chat.css';
</style>