<template>
  <HeaderUser />
    <main id="bg-color">
      <Grettings />
      <NavMenuDash />
    </main>
  <FooterUser />
</template>

<script>
import HeaderUser from '../../components/components-users/HeaderUser.vue';
import Grettings from '../../components/components-users/Grettings.vue';
import FooterUser from '../../components/components-users/FooterUser.vue';
import NavMenuDash from '../../components/components-users/NavMenuDash.vue';

export default {
  name: "Dashboard",
  components: {
    HeaderUser,
    Grettings,
    FooterUser,
    NavMenuDash
}
}
</script>
