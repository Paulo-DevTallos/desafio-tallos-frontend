<template>
  <div>
    <ul class="users">
      <li v-for="user in users" :key="user._id">
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
          <font-awesome-icon @click="toggleHidden(user._id)" :icon="['fas', 'trash-can']" />
        </div>
        <ConfirmModal 
          v-if="hidden && id === user._id" 
          @delete-user="deleteUser(user.email)"
          @close-modal="closeModal"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Services from '../../services/axios-request';
import ConfirmModal from './ConfirmModal.vue';

export default {
  name: "CardUsers",
  components: {
    ConfirmModal,
  },
  data() {
    return {
      users: [],
      hidden: false,
      id: 0,
    };
  },
  methods: {
    toggleHidden(id) {
      this.hidden = true
      this.id = id
      console.log(id)
    },
    closeModal() {
      this.hidden = false
    },
    async deleteUser(email) {
      await axios.delete(`http://localhost:3001/api/remove/${email}`).then(res => {
        console.log(res.status);
        if (res.status === 200) {
          Services.listar().then(res => this.users = res.data);
        }
        this.hidden = false
      });
    }
  },
  mounted() {
    Services.listar().then(res => this.users = res.data);
  },
}
</script>

<style scoped>
  @import '../../assets/components/card-users.css';
</style>