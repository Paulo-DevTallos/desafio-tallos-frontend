<template>
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
      <div 
        class="command-user" 
        v-if="accessLevel && this.$store.state.user.rules === 'admin'"
      >
        <font-awesome-icon @click="editUser(user._id)" :icon="['fas', 'user-pen']" />
        <font-awesome-icon @click="toggleHidden(user._id)" :icon="['fas', 'trash-can']" />
      </div>
      <ConfirmModal 
        v-if="hidden && id === user._id" 
        @delete-user="deleteUser(user.email)"
        @close-modal="closeModal"
      />
      <div class="modal-update" v-if="call_form && id === user._id">
        <UpdateForm 
          @update-user="(updateUser)"  
        />
      </div>
    </li>
  </ul>
</template>

<script>
import { io } from 'socket.io-client'
import Services from '../../services/axios-request';
import ConfirmModal from './ConfirmModal.vue';
import UpdateForm from './UpdateForm.vue';

const socket = io('http://localhost:3002')

export default {
  name: "CardUsers",
  components: {
    ConfirmModal,
    UpdateForm
  },
  data() {
    return {
      users: [],
      call_form: false,
      hidden: false,
      isCurrentUser: true,
      id: 0,
      teste_id: null,
      accessLevel: true,
    };
  },
  async created() {
    //register user
    await this.emitter.on('handleSubmitUser', (data) => {
      Services.createUser(data)
      return this.listUsers()
    })
    //search users
    await this.emitter.on('finduser', (user) => {
      Services.findOne(user).then(res => {
        return this.users = res.data
      })
    }),
    this.emitter.on('cleanAndUpdateList', (email) => {
      if(!email) {
        this.listUsers()
      }
    })
  },
  methods: {
    //list users 
    async listUsers() {
      await Services.listar().then(res => {
        const dataUser = this.users = res.data
        return this.users = dataUser.filter(user => user.name !== this.$store.state.user.name)
      })
    },
    //update user
    async updateUser(user) {
      const id = this.teste_id

      await Services.update(user, id)
      this.call_form = false
      this.listUsers()
    },
    //delete user
    async deleteUser(email) {
      await Services.removeUser(email).then(res => {
        if (res.status === 200) {
          this.listUsers()
        }
        this.hidden = false
      })
    },
    //toggle functions
    editUser(id) {
      this.call_form = !this.call_form
      this.id = id

      this.teste_id = id
    },
    toggleHidden(id) {
      this.hidden = true
      this.id = id
    },
    closeModal() {
      this.hidden = false
    },
  },
  mounted() {
    this.listUsers()

    socket.on('user-created', () => {
      this.listUsers()
    })

    socket.on('update-user', () => {
      this.listUsers()
    })

    socket.on('remove-user', () => {
      this.listUsers()
    })

  },
}
</script>

<style scoped>
  @import '../../assets/components/card-users.css';
  @import '../../assets/components/form-update.css';
</style>