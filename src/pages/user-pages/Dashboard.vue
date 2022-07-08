<template>
  <HeaderUser />
    <main>
      <Grettings />
      conteudo
    </main>
</template>

<script>
import HeaderUser from '../../components/components-users/HeaderUser.vue';
import Grettings from '../../components/components-users/Grettings.vue';

export default {
  name: "Dashboard",
  components: {
    HeaderUser,
    Grettings
}
}
</script>

<style>

</style>