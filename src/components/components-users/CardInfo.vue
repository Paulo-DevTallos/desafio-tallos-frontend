<template>
  <div class="card">
    <div class="id">
      {{ $store.state.user.email }}
    </div>
    <div class="card-id">
      {{ $store.state.user.rules }}
    </div>
    <div class="card-id" id="click" @click="updateUser">
      Atualizar cadastro
    </div>
    <div id="click" class="card-id" @click="logout">
      Logout
      <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardInfo',
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  @import '../../assets/components/card-info.css';
</style>