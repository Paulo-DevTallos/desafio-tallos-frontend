<template>
  <RouterView />
</template>

<script>
import SocketModules from './services/socket'

export default {
  name: 'App',
  created() {
    SocketModules.setupSocketConncection()
  }
}
</script>

<style>
  @import './assets/base.css';
</style>