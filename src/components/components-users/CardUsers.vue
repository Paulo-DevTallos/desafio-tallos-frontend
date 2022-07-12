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
        <font-awesome-icon @click="deleteUser(user.email)" :icon="['fas', 'trash-can']" />
      </div>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
import Services from '../../services/axios-request';

export default {
  name: 'CardUsers',
  data() {
    return {
      users: [],
    }
  },
  methods: {
    async deleteUser(email) {
      await axios.delete(`http://localhost:3001/api/remove/${email}`).then(res => {
        console.log(res.status)
        if(res.status === 200) {
          Services.listar().then(res => this.users = res.data)
        }
      })
    }

  },
  mounted() {
    Services.listar().then(res => this.users = res.data)
  },
}
</script>

<style scoped>
  @import '../../assets/components/card-users.css';
</style>