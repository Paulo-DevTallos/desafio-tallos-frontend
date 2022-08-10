<template>
  <HeaderUser />
    <Template>
      <Grettings />
      <NavMenuDash />
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

export default {
  name: "Dashboard",
  components: {
    HeaderUser,
    Grettings,
    FooterUser,
    NavMenuDash,
    Template,
  },
  mounted() {
    socket.on('is-logged', () => {
      const sessionLogin = localStorage.getItem('session_id')
      console.log(sessionLogin)
      alert('um novo usuario logou')
      console.log('um novo usuario logou')
      
    })
  }
}
</script>
