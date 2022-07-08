<template>
  <div>
    <Header />
      <main>
        Pagina Home
        novo teste de pagina novo teste
        <RouterLink to="/login">
          to login
        </RouterLink>
      </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  name: "Home",
  components: { 
    Header 
  },
}
</script>
