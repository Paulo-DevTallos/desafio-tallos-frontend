<template>
  <HeaderUser />
    <Template>
      <Grettings />
      <NavMenuDash />
      <PopUpWarn 
        :info_message="message"
        v-if="hiddenPopup"  
      />
    </Template>
  <FooterUser />
</template>

<script>
import { io } from 'socket.io-client';
const socket = io('http://localhost:3002')
import HeaderUser from '../../components/components-users/HeaderUser.vue';
import Grettings from '../../components/components-users/Grettings.vue';
import FooterUser from '../../components/components-users/FooterUser.vue';
import NavMenuDash from '../../components/components-users/NavMenuDash.vue';
import Template from '../../components/components-users/Template.vue';
import PopUpWarn from '../../components/alert-popups/PopUpWarn.vue';

export default {
  name: "Dashboard",
  components: {
    HeaderUser,
    Grettings,
    FooterUser,
    NavMenuDash,
    Template,
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
      }, 7000)
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
        }, 7000)
      }
  
    })
  }
}
</script>
