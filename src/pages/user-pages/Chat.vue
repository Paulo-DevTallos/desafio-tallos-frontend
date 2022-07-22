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
          <div v-if="!joined">
            <form @submit.prevent="join">
              <label>Qual é o seu nome</label>
              <input type="text" v-model="name">
              <button>Iniciar Chat</button>
            </form>
          </div>
          <div class="messages" v-else>
            <div v-for="message in messages" :key="message" class="messages-container">
              teste
              [{{ message.name }}]: {{ message.text }}
            </div>
            <form @submit.prevent="sendMessage" class="write-field">
              <input type="text" v-model="messageText" placeholder="Digite uma mensagem">
              <button>
                <font-awesome-icon :icon="['fas', 'paper-plane']" />
              </button>
            </form>
          </div>
        </div>
        <!--<div class="messages-box">
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
        </div>-->
      </div>
    </Template>
  <FooterUser />
</template>

<script>
import { ref, onBeforeMount } from 'vue'
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
      name: '',
      messageText: '',
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
  setup() {
    const messages = ref([])

    onBeforeMount(() => {
      socket.emit('findAllChat', {}, res => {
        console.log(messages.value = res)
        messages.value = res
      })

      socket.on('message', (message) => {
        messages.value.push(message)
        console.log('message', message)
      })
    })
  }
}
</script>

<style scoped>
  @import '../../assets/chat.css';
</style>