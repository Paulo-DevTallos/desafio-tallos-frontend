<template>
  <HeaderUser />
    <main>
      <div class="container-contacts">
        <div>
          formulario de cadastro
        </div>
        <div>
          listar usuarios
        </div>
      </div>
    </main>
</template>

<script>
import HeaderUser from '../../components/components-users/HeaderUser.vue';
export default {
    name: "Contacts",
    components: { HeaderUser }
}
</script>
<style>
  @import '../../assets/contacts.css';
</style>