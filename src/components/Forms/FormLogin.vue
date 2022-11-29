<template>
	<form @submit.prevent="$emit('handleLogin', user)">
		<div>
			<BaseInput
				type="text"
				v-model="user.email"
				placeholder="Digite seu e-mail"
			/>
			<BaseInput
				type="password"
				v-model="user.password"
				placeholder="Digite sua senha"
			/>
		</div>
		<div>
			<MainButton
				type="submit"
				:title_btn="'Login'"
			/>
		</div>
	</form>
</template>

<script>
import MainButton from "../Buttons/MainButton.vue";
import BaseInput from "../Inputs/BaseInput.vue";

export default {
	name: "FormLogin",
	components: { BaseInput, MainButton },
	data() {
		return {
			user: {
				email: '',
				password: '',
			}
		}
	}
};
</script>
