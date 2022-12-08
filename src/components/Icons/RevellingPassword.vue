<template>
	<span @click="$emit('toggle')" class="viewer">
		<Icon icon="carbon:view" id="view-icon" v-if="isPassword"/>
		<Icon icon="carbon:view-off" id="view-icon" v-else/>
	</span>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
	name: 'RevellingPassword',
	components: { Icon },
	emits: ['toggle'],
	props: {
		isPassword: {
			type: Boolean,
		}
	}
}
</script>
