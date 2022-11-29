<template>
  <HeaderUser />
    <Template>
      <Typography :title="title" />
      <div class="container-contacts">
        <div class="container-form">
					<FormRegister @handleSubmit="createUser"/>
        </div>
        <div class="user-list">
          <header class="user-avaliable">
            <h4>Resultados de usuários</h4>
          </header>
          <SearchBar />
          <CardUsers />
        </div>
      </div>
    </Template>
  <FooterUser />
</template>

<script>
import socketModule from '../../services/socket'
import userService from '../../services/axios-request'
import HeaderUser from '../../components/components-users/HeaderUser.vue';
import FooterUser from '../../components/components-users/FooterUser.vue';
import Typography from '../../components/components-users/Typography.vue';
import CardUsers from '../../components/components-users/CardUsers.vue';
import Template from '../../components/components-users/Template.vue';
import SearchBar from '../../components/components-users/SearchBar.vue';
import FormRegister from '../../components/Forms/FormRegister.vue';

export default {
  name: "Contacts",
  components: {
    HeaderUser,
    FooterUser,
    Typography,
    CardUsers,
    Template,
    SearchBar,
    FormRegister
},
  emits: ['finduser'],
  data() {
    return {
      title: 'Cadastro de usuários',
    }
  },
  methods: {
		async createUser(user) {
			await userService.createUser(user).then(res => {
				if (res.status === 201) {
					console.log('Usuario criado!')
				}
			})
		}
  },

	mounted() {
		socketModule.connectionSocket().on(
			'user-created', () => {
				console.log('teste')
			}
		)
	}
}
</script>
<style scoped>
  @import '../../assets/contacts.css';
</style>
