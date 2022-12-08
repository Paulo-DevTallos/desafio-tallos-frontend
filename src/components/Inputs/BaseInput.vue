<template>
	<div class="base-input">
		<input v-bind="$attrs" v-model="inputValue" @blur="handleValue" />
		<RevellingPassword v-if="hiddenRevellingPassword" />
	</div>
</template>

<script>
import RevellingPassword from "../Icons/RevellingPassword.vue";

export default {
	name: "BaseInput",
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
			inputValue: "",
		};
	},
	methods: {
		handleValue(newValue) {
			this.$emit("handleValue", newValue);
		},
	},
	watch: {
		currentValue(value) {
			this.inputValue = value;
		},
	},
	components: { RevellingPassword },
};
</script>
