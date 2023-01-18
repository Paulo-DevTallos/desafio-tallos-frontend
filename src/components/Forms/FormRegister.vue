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
							v-model="user.name"
							placeholder="Ex.: Joao Carlos Silveira"
						/>
					</div>
					<div>
						<label>E-mail</label>
						<BaseInput
							type="text"
							v-model="user.email"
							placeholder="Ex.: meuemail@example.com"
						/>
					</div>
					<div>
						<label>Contato</label>
						<BaseInput
							type="text"
							v-model="user.contact"
							placeholder="Ex.: Somente número"
						/>
					</div>
					<div>
						<label>CPF</label>
						<BaseInput
							type="text"
							v-model="user.cpf"
							placeholder="Ex.: 000.000.000-00"
						/>
					</div>
					<div>
						<label>Matricula</label>
						<BaseInput
							type="text"
							v-model="user.register_code"
							placeholder="Ex.: Somente números"
						/>
					</div>
					<div>
						<label>Descrição</label>
						<textarea
							class="textarea-field"
							v-model="user.description"
							placeholder="Informações sobre o contato"
						></textarea>
					</div>
					<div>
						<label>Senha</label>
						<BaseInput
							@keydown.tab="tabPress"
							type="password"
							v-model="user.password"
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
							v-model="user.location.address.street"
							placeholder="Ex.: Av. Beira Mar, 1010"
						/>
					</div>
					<div>
						<label>Complemento</label>
						<BaseInput
							type="text"
							v-model="user.location.address.complement"
							placeholder="Ex.: Casa, Ap, Sala"
						/>
					</div>
					<div>
						<label>CEP</label>
						<BaseInput
							type="text"
							v-model="user.location.address.zipcode"
							placeholder="00.000-000"
						/>
					</div>
					<div>
						<label>Bairro</label>
						<BaseInput
							type="text"
							v-model="user.location.address.neighborhood"
							placeholder="Ex.: Centro"
						/>
					</div>
					<div>
						<label>Cidade</label>
						<BaseInput
							type="text"
							v-model="user.location.address.city"
							placeholder="Ex.: Fortaleza"
						/>
					</div>
					<div>
						<label>País</label>
						<BaseInput
							@keydown.tab="tabPress"
							type="text"
							v-model="user.location.address.country"
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
							v-model="user.corparative_info.office"
							placeholder="Ex.: Vendedor"
						/>
					</div>
					<div>
						<label>Departamento</label>
						<BaseInput
							type="text"
							v-model="user.corparative_info.dept"
							placeholder="Ex.: Vendas"
						/>
					</div>
					<div>
						<label>E-mail corporativo</label>
						<BaseInput
							type="text"
							v-model="user.corparative_info.corporative_mail"
							placeholder="Ex.: email@tallos.com"
						/>
					</div>
					<!--Cadastro de setores para criar relação com DB-->
					<div>
						<label>Área de atuação (Micro-setor)</label>
						<BaseInputs
							type="text"
							v-model="user.corparative_info.sub_dept"
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
			user: {
				name: '',
				email: '',
				contact: '',
				cpf: '',
				register_code: '',
				description: '',
				password: '',
				location: {
					address: {
						street: '',
						complement: '',
						zipcode: '',
						neighborhood: '',
						city: '',
						country: '',
					},
				},
				corparative_info: {
					office: '',
					dept: '',
					corporative_mail: '',
					sub_dept: '',
				},
			}
		}
	},
	methods: {
		hiddenPersonalInfo() {
			this.hiddenPersonal = !this.hiddenPersonal

			if (this.hiddenPersonal ) {
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
		},
		//IMPLEMENTAR PARAMETROS PARA IDENTIFICAR OS CAMPOS DE ACORDO COM O INPUT
		//COLOCAR ICONE DE INFORMAÇÃO PARA REPASSAR AO USUARIO
		tabPress(event, fieldOpen, filedClose) {
			if (event.keyCode === 9) {
				fieldOpen = false
				filedClose = true
			}
		}
	}
};
</script>
