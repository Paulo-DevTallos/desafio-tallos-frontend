<template>
	<div class="form-register-contact">
		<div class="icon-container">
			<font-awesome-icon :icon="['fas', 'user-plus']" />
			<span>Novo Usuário</span>
		</div>
		<form @submit.prevent="$emit('handleSubmit', user)">
			<div class="tag-form-info">
				<span @click="hiddenPersonalInfo">Informações pessoais</span>
				<div class="inputs-container" v-if="hiddenPersonal">
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
			<div class="tag-form-info">
				<span @click="hiddenAddressInfo">Enredeço</span>
				<div class="inputs-container" v-if="hiddenAddress">
					<div>
						<label>Rua</label>
						<BaseInput
							type="text"
							placeholder="Ex.: Av. Beira Mar, 1010"
						/>
					</div>
					<div>
						<label>Complemento</label>
						<BaseInput
							type="text"
							placeholder="Ex.: Casa, Ap, Sala"
						/>
					</div>
					<div>
						<label>CEP</label>
						<BaseInput
							type="text"
							placeholder="00.000-000"
						/>
					</div>
					<div>
						<label>Bairro</label>
						<BaseInput
							type="text"
							placeholder="Ex.: Centro"
						/>
					</div>
					<div>
						<label>Cidade</label>
						<BaseInput
							type="text"
							placeholder="Ex.: Fortaleza"
						/>
					</div>
					<div>
						<label>País</label>
						<BaseInput
							type="text"
							placeholder="Ex.: Brasil"
						/>
					</div>
				</div>
			</div>
			<div class="tag-form-info">
				<span @click="hiddenCompanyInfo">Organização</span>
				<div class="inputs-container" v-if="hiddenCompany">
					<div>
						<label>Cargo</label>
						<BaseInput
							type="text"
							placeholder="Ex.: Vendedor"
						/>
					</div>
					<div>
						<label>Departamento</label>
						<BaseInput
							type="text"
							placeholder="Ex.: Vendas"
						/>
					</div>
					<div>
						<label>E-mail corporativo</label>
						<BaseInput
							type="text"
							placeholder="Ex.: email@tallos.com"
						/>
					</div>
					<div>
						<label>Área de atuação (Micro-setor)</label>
						<BaseInput
							type="text"
							placeholder="Ex.: Tecnologia"
						/>
					</div>
				</div>
			</div>
			<div class="btn-spacing">
				<MainButton
					type="submit"
					class="success-btn"
					:title_btn="'Cadastrar'"
				/>
			</div>
		</form>
	</div>
</template>

<script>
import MainButton from "../Buttons/MainButton.vue";
import BaseInput from "../Inputs/BaseInput.vue";

export default {
	name: "FormRegister",
	components: { BaseInput, MainButton },
	emits: ['handleSubmit'],
	data() {
		return {
			hiddenPersonal: false,
			hiddenAddress: false,
			hiddenCompany: false,
		}
	},
	methods: {
		hiddenPersonalInfo() {
			this.hiddenPersonal = !this.hiddenPersonal

			if (this.hiddenPersonal) {
				this.hiddenAddress = false
				this.hiddenCompany = false
			}
		},
		hiddenAddressInfo() {
			this.hiddenAddress = !this.hiddenAddress

			if (this.hiddenAddress) {
				this.hiddenPersonal = false
				this.hiddenCompany = false
			}
		},
		hiddenCompanyInfo() {
			this.hiddenCompany = !this.hiddenCompany

			if (this.hiddenCompany) {
				this.hiddenPersonal = false
				this.hiddenAddress = false
			}
		}
	}
};
</script>
