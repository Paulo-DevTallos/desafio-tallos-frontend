<template>
	<div class="base-input">
		<input
			v-bind="$attrs"
			v-model="inputValue"
			@blur="handleValue"
		/>
	</div>
</template>

<script>
export default {
	name: 'BaseInput',
	emits: ['handleValue'],
	props: {
		currentValue: {
			type: String,
		},
	},

	data() {
		return {
			inputValue: '',
		}
	},

	methods: {
		handleValue(newValue) {
			this.$emit('handleValue', newValue)
		}
	},

	watch: {
		currentValue(value) {
			this.inputValue = value
		}
	}
}
</script>
