<template>
	<div class="card">
		<div class="icon">
			<font-awesome-icon :icon="['fas', `${icon_name}`]" />
		</div>
		<div class="card-descriptions">
			<p>{{ card_description }}</p>
			<span>25</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'InfoCardStatistic',
	props: {
		icon_name: {
			type: String,
		},
		card_description: {
			type: String,
		},
	},
}
</script>
