<template>
  <div class="card">
    <div class="id">
      {{ $store.state.user.name }}
    </div>
    <div class="card-id">
      {{ $store.state.user.email }}
    </div>
    <div class="card-id">
      {{ $store.state.user.rules }}
    </div>
    <div id="click" class="card-id" @click="logout">
      Logout
      <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

const socket = io('http://localhost:3002')
export default {
  name: 'CardInfo',
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      localStorage.removeItem('idUserLogin')
      localStorage.removeItem('vuex')
      this.$router.push('/login')
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
  @import '../../assets/components/card-info.css';
</style>