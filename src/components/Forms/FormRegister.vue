<template>
	<div class="form-register-contact">
		<div class="icon-container">
			<font-awesome-icon :icon="['fas', 'user-plus']" />
			<span>Novo Usuário</span>
		</div>
		<form @submit.prevent="$emit('handleSubmit', user)">
			<div class="tag-form-info">
				<span>Informações pessoais</span>
				<div class="inputs-container">
					<div>
						<label>Nome Completo</label>
						<BaseInput
							type="text"
							placeholder="Ex.: Joao Carlos Silveira"
						/>
					</div>
					<div>
						<label>E-mail</label>
						<BaseInput
							type="text"
							placeholder="Ex.: meuemail@example.com"
						/>
					</div>
					<div>
						<label>Contato</label>
						<BaseInput
							type="text"
							placeholder="Ex.: Somente número"
						/>
					</div>
					<div>
						<label>CPF</label>
						<BaseInput
							type="text"
							placeholder="Ex.: 000.000.000-00"
						/>
					</div>
					<div>
						<label>Matricula</label>
						<BaseInput
							type="text"
							placeholder="Ex.: Somente números"
						/>
					</div>
					<div>
						<label>Descrição</label>
						<textarea class="textarea-field" placeholder="Informações sobre o contato"></textarea>
					</div>
					<div>
						<label>Senha</label>
						<BaseInput
							type="password"
							placeholder="*****"
						/>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import BaseInput from "../Inputs/BaseInput.vue";

export default {
	name: "FormRegister",
	components: { BaseInput },
	emits: ['handleSubmit'],
};
</script>
