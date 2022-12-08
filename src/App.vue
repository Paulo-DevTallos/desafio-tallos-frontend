<template>
  <RouterView />
</template>

<script>
export default {
  name: 'App',
	mounted() {
		console.log(this.$store.state)
	}
}
</script>
