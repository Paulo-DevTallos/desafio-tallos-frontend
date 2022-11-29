<template>
	<HeaderUser />
	<Template>
		<Grettings />
		<Typography :title="'Dashboard'"/>
		<div class="container-interactions">
			<InfoCardStatistic :icon_name="'users'" :card_description="description" />
			<NavMenuDash />
		</div>
	</Template>
	<FooterUser />
</template>

<script>
import { io } from "socket.io-client";
const socket = io("http://localhost:3002");
import HeaderUser from "../../components/components-users/HeaderUser.vue";
import Grettings from "../../components/components-users/Grettings.vue";
import FooterUser from "../../components/components-users/FooterUser.vue";
import NavMenuDash from "../../components/Menus/NavMenuDash.vue";
import Template from "../../components/components-users/Template.vue";
import InfoCardStatistic from "../../components/Cards/InfoCardStatistic.vue";
import Typography from "../../components/components-users/Typography.vue";

export default {
	name: "Dashboard",
	components: {
    HeaderUser,
    Grettings,
    FooterUser,
    NavMenuDash,
    Template,
    InfoCardStatistic,
    Typography
},
	data() {
		return {
			description: 'Quantidade de usuários cadastrados na plataforma',
		}
	},
	mounted() {
		socket.on("is-logged", () => {
			alert(`um novo usuario logou`);
		});
	},
};
</script>

<style scoped>
.container-interactions {
	display: flex;
	margin: 10px 0 30px;
}
</style>
