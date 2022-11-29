<template>
	<button
		@click="$emit('action')"
		class="btn"
	>
		{{ title_btn }}
	</button>
</template>

<script>
export default {
	name: 'MainButton',
	emits: ['action'],
	props: {
		title_btn: {
			type: String,
		},
	},
}
</script>
