<template>
	<HeaderUser />
	<main class="main-container">
		<router-view></router-view>
	</main>
</template>

<script>
import HeaderUser from "./HeaderUser.vue";

export default {
	name: "Template",
	components: { HeaderUser },
};
</script>
