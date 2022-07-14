<template>
	<nav class="container-dash">
		<ul class="menu">
			<li>
				<RouterLink to="/chat">
					<font-awesome-icon :icon="['fas', 'headset']" />
					<span>Acessar Chat</span> 
				</RouterLink>
			</li>
			<li>
				<RouterLink to="/contacts">
					<font-awesome-icon :icon="['fas', 'list-check']" />
					<span>Acessar Contatos</span>
				</RouterLink>
			</li>
			<li>
				<RouterLink to="#">
					<font-awesome-icon icon="fa-solid fa-circle-info" />
					<span>Falar com Suporte</span>
				</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'NavMenuDash',
}
</script>

<style scoped>
	@import '../../assets/components/menu-dashboard.css';
</style>