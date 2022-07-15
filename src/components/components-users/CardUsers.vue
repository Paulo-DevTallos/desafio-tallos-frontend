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
        <ConfirmModal 
          v-if="hidden && id === user._id" 
          @delete-user="deleteUser(user.email)"
          @close-modal="closeModal"
        />
        <div class="command-user">
          <font-awesome-icon @click="editUser" :icon="['fas', 'user-pen']" />
          <font-awesome-icon @click="toggleHidden(user._id)" :icon="['fas', 'trash-can']" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
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
      isCurrentUser: true,
      id: 0,
    };
  },
  methods: {
    toggleHidden(id) {
      this.hidden = true
      this.id = id
    },

    closeModal() {
      this.hidden = false
    },
    //delete user
    async deleteUser(email) {
      await Services.removeUser(email).then(res => {
        if (res.status === 200) {
          Services.listar().then(res => {
            const renderList = this.users = res.data
            return this.users = renderList.filter(user => user.name !== this.$store.state.user.name)
          });
        }
        this.hidden = false
      })
    },

    //update user
    async editUser(email) {
      alert('ok')
    }
  },
  mounted() {
  //filtrando usuario logado na lista de usuarios
    Services.listar().then(res => {
      const dataUser = this.users = res.data
      return this.users = dataUser.filter(user => user.name !== this.$store.state.user.name)
    })
  },
}
</script>

<style scoped>
  @import '../../assets/components/card-users.css';
</style>