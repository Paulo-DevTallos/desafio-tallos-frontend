<template>
  <HeaderUser />
    <main>
      chat
    </main>
  <FooterUser />
</template>

<script>
import HeaderUser from '../../components/components-users/HeaderUser.vue'
import FooterUser from '../../components/components-users/FooterUser.vue'

export default {
  name: 'Chat',
  components: {
    HeaderUser,
    FooterUser
  }
}
</script>