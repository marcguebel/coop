<template>
  <div class="inscription">
    <h1>Formulaire d'inscription</h1>
    <form @submit.prevent="creationCompte">
    	<div>
    		<p>Nom</p>
    		<input v-model="nom" required>
    	</div><br/>
    	<div>
    		<p>Prénom</p>
    		<input v-model="prenom" required>
    	</div><br/>
    	<div>
    		<p>Email</p>
    		<input v-model="email" required>
    	</div><br/>
    	<div>
    		<p>Mot de passe</p>
    		<input v-model="password" required type="password">
    	</div><br/>
    	<div>
    		<p>Verification Mot de passe</p>
    		<input v-model="passwordVerif" required type="password">
    	</div><br/>
    	<div>
    		<button>Valider</button>
    	</div>
    </form>
  </div>
</template>

<script>
export default {
	name : 'CreerCompte',
	data(){
		return{
			nom: '',
			prenom: '',
			email: '',
			password: '',
			passwordVerif: ''
		}
	},
	methods:{
		creationCompte(){
			if (this.password == this.passwordVerif) 
			{
				window.axios.post('members',{
					fullname : this.nom + ' ' + this.prenom,
					email : this.email,
					password : this.password,
				}).then(response =>{
					this.$router.push('/')
				}).catch(error =>{
					alert (error.response.data.error.join("\n"))
				});
			}
			else{
				alert ('Les mots de passe ne sont pas identiques ! ')
			}
		}
	}
}
</script>