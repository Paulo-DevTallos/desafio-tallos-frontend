<template>
  <HeaderUser />
    <main>
      <Grettings />
      conteudo
    </main>
  <FooterUser />
</template>

<script>
import HeaderUser from '../../components/components-users/HeaderUser.vue';
import Grettings from '../../components/components-users/Grettings.vue';
import FooterUser from '../../components/components-users/FooterUser.vue';

export default {
  name: "Dashboard",
  components: {
    HeaderUser,
    Grettings,
    FooterUser,
  }
}
</script>

<style>

</style>