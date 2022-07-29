<template>
  <HeaderUser />
    <Template>
      <Typography :title="title" />
      <div class="container-chat">
        <div class="online-users">
          <h3>Usuários online</h3>
          <div>
            <ul class="users">
              <li v-for="user in users" :key="user">
                <div class="status"></div>
                {{ user }}
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
                <div class="chat-ballom">
                  <span>{{ message.name }}</span>
                  <p>{{ message.text }}</p>
                </div>
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
    <PopUpWarn v-if="hiddenPopup" :info_message="message"/>
  <FooterUser />
</template>

<script>
import { io } from 'socket.io-client'

const socket = io('http://localhost:3002')
import HeaderUser from '../../components/components-users/HeaderUser.vue'
import FooterUser from '../../components/components-users/FooterUser.vue'
import Template from '../../components/components-users/Template.vue'
import Typography from '../../components/components-users/Typography.vue'
import PopUpWarn from '../../components/alert-popups/PopUpWarn.vue'

export default {
  name: 'Chat',
  data() {
    return {
      title: 'Chat',
      name: this.$store.state.user.name,
      messageText: '',
      users: '',
      message: '',
      messages: [],
      hiddenPopup: false,
      joined: false,
    }
  },
  components: {
    HeaderUser,
    FooterUser,
    Typography,
    Template,
    PopUpWarn,
  },
  methods: {
    join() {
      socket.emit('join', { name: this.name }, () => {
        this.joined = true  
      })
    },
    sendMessage() {
      if(this.messageText === '') {
        this.message = 'Digite uma mensagem!'
        this.hiddenPopup = true
        setTimeout(() => {
          this.hiddenPopup = false
        }, 3000)
      } else {
        socket.emit('createChat', { text: this.messageText, type: 0 }, () => {
          this.messageText = ''
        })
      }
    }
  },
  mounted() {
    socket.emit('findAllChat', {}, res => {
      this.messages = res
    })

    socket.on('message', (message) => {
      this.messages.push(message)
      console.log('testando evento')
    })    

    socket.on('join-room', res => {
      this.users = res
    })
  }
}
</script>

<style scoped>
  @import '../../assets/chat.css';
</style>