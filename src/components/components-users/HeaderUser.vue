<template>
	<header class="header-user">
		<div class="useful-links">
			<div class="menu-mobile">
				<font-awesome-icon :icon="['fas', 'bars']" />
			</div>
			<div>
				<a href="https://tallos.com.br/blog/" target="_blank"> Tallos blog </a>
				<a href="https://help.tallos.com.br/" target="_blank"> FAQ </a>
			</div>
		</div>
		<div>
			<RouterLink to="/app/dashboard">
				<img src="/img/tallos-logo-(1).png" alt="botão do menu" />
			</RouterLink>
		</div>
		<div @click="toggleCardInfo" class="user-card">
			<div class="user-name">
				{{ $store.state.userStore.userName }}
			</div>
			<img src="/img/user.svg" class="icon" alt="icone do usuário" />
			<CardInfo v-if="status" />
		</div>
	</header>
</template>

<script>
import CardInfo from "./CardInfo.vue";
export default {
	name: "HeaderUser",
	components: { CardInfo },
	data() {
		return {
			status: null,
		};
	},
	methods: {
		toggleCardInfo() {
			this.status = !this.status;
		},
	},
};
</script>
