<template>
  <footer class="footer-user">
    Usuário <strong> {{ $store.state.user.email }} </strong> logado <span> - {{ data_time }}</span>
  </footer>
</template>

<script>
export default {
  name: 'FooterUser',
  data() {
    return {
      data_time: '',
    }
  },
  methods: {
    printCurrentTime() {
      return new Date().toLocaleTimeString()
    }
  },
  mounted: function() {
    setInterval(() => {
      this.data_time = this.printCurrentTime()
    }, 1000)
  }
}
</script>

<style scoped>
  @import '../../assets/components/footer-user.css';
</style>