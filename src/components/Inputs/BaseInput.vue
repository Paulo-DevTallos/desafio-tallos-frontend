<template>
	<div class="base-input">
		<input
			:type="inputType"
			v-if="!hiddenRevellingPassword ? inputType = 'text' : 'password'"
			v-bind="$attrs"
			v-model="inputValue"
			@blur="handleValue"
		/>
		<RevellingPassword
			@toggle="togglePassword"
			v-if="hiddenRevellingPassword"
			:isPassword="isPasswordVisible"
		/>
	</div>
</template>

<script>
import RevellingPassword from "../Icons/RevellingPassword.vue";

export default {
	name: "BaseInput",
	components: { RevellingPassword },
	emits: ["handleValue"],
	props: {
		currentValue: {
			type: String,
		},
		hiddenRevellingPassword: {
			type: Boolean
		},
	},
	data() {
		return {
			inputValue: '',
			inputType: 'password'
		};
	},
	computed: {
		isPasswordVisible() {
			return this.inputType === 'text'
		}
	},

	methods: {
		handleValue(newValue) {
			this.$emit("handleValue", newValue);
		},

		togglePassword() {
			this.inputType = this.isPasswordVisible ? 'password' : 'text'
		}
	},

	watch: {
		currentValue(value) {
			this.inputValue = value;
		},
	},
};
</script>
