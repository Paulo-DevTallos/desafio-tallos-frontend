import userService from '../../services/axios-request'

export default {
	async login(context, data) {
		await userService.loginUser(data).then(res => {
			console.log(res)

			if (res.data.access_token) {
				localStorage.setItem('token', res.data.access_token)
				context.commit('LOGIN', res.data)

				window.location.replace('/painel')
			}
		})
	}
}
