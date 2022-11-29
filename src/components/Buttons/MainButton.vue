<template>
	<button class="btn">{{ title_btn }}</button>
</template>

<script>
export default {
	name: 'MainButton',
	props: {
		title_btn: {
			type: String,
		},
	},
}
</script>
