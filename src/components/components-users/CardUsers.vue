<template>
  <ul class="users">
    <li v-for="user in users" :key="user.id">
      <div>
        <div class="content-user">
          <span class="title-id">Nome:</span><span>{{ user.name }}</span>
        </div>
        <div class="content-user"> 
          <span class="title-id">Email:</span><span>{{ user.email }}</span>
        </div>
        <div class="content-user"> 
          <span class="title-id">Permissão:</span><span>{{ user.rules }}</span>
        </div>
      </div>
      <div class="command-user">
        <font-awesome-icon :icon="['fas', 'user-pen']" />
        <font-awesome-icon :icon="['fas', 'trash-can']" />
      </div>
    </li>
  </ul>
</template>

<script>
import Services from '../../services/axios-request';

export default {
  name: 'CardUsers',
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    Services.listar().then(res => this.users = res.data)
  } 
}
</script>

<style scoped>
  @import '../../assets/components/card-users.css';
</style>