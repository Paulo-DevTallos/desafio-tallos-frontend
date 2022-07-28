<template>
  <div class="user-avaliable">
    <input type="text" v-model="email" placeholder="Digite um e-mail de usuário">
    <button @click="$emit('finduser', email)">listar usuario</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  emits: ['finduser'],
  data() {
    return {
      email: '',
    }
  }
}
</script>

<style scoped>
.user-avaliable input {
  padding: 3px 15px;
  border: 1px solid gray;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.user-avaliable button {
  padding: 4px 10px;
  background-color: #009acc;
  color: #fff;
  border: none;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>