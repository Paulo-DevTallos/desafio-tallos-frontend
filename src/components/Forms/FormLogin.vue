<template>
	<form>
		<div>
			<BaseInput />
			<BaseInput />
		</div>
	</form>
</template>

<script>
import BaseInput from "../Inputs/BaseInput.vue";

export default {
	name: "FormLogin",
	components: { BaseInput },
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
