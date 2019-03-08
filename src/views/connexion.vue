<template>
  <div class="connexion">
    <h1>Connexion</h1>
    <form @submit.prevent="connexion">
    	<div>
    		<p>Email : </p>
    		<input v-model="email" required>
    	</div><br />
    	<div>
    		<p>Mot de passe : </p>
    		<input v-model="password" required type="password">
    	</div><br />
    	<div>
    		<button>Se connecter</button>
    	</div>
    </form>
  </div>
</template>

<script>
export default {
	name : 'connexion',
	data(){
		return{
			email: '',
			password: '',
		}
	},
	methods:{
		connexion(){
			window.axios.post('members/signin',{
				email : this.email,
				password : this.password,
			}).then(response =>{
				this.$store.commit('setMember', {
					fullname: response.data.fullname,
					email: response.data.email,
					id: response.data._id
				});
				this.$store.commit('setToken', response.data.token)
				this.setTokenAxios(response.data.token)
				this.$router.push('/')
			}).catch(error =>{
				alert(error)
			});
		}
	}
}
</script>
