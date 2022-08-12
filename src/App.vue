<template>
  <RouterView />
  <PopUpWarn 
    :info_message="message"
    v-if="hiddenPopup"  
  />
</template>

<script>
import { io } from 'socket.io-client';
import PopUpWarn from './components/alert-popups/PopUpWarn.vue';
const socket = io('http://localhost:3002')
export default {
  name: 'App',
  components: {
    PopUpWarn,
  },
  data() {
    return {
      message: '',
      hiddenPopup: false,
    }
  },
  methods: {
    popupTimeout(msg) {
      this.hiddenPopup = true
      this.message = msg
      setTimeout(() => {
        this.hiddenPopup = false
      }, 5000)
    },
  },
  async mounted() {
    await socket.on('is-logged', (id) => {
      const sessionLogin = localStorage.getItem('session_id')
      const currentUserId = id._id.user._id

      if (currentUserId === sessionLogin) {
        this.popupTimeout(`Você será deslogado devido a um novo acesso`)
        setTimeout(() => {
          localStorage.clear()
          this.$router.push('/login')
        }, 5000)
      }
    })
  }
}
</script>

<style>
  @import './assets/base.css';
</style>