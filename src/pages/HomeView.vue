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
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: "Home",
  components: { 
    Header,
    Footer
  },
}
</script>
