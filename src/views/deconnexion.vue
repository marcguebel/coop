<template>
</template>

<script>
export default {
	name : 'deconnexion',
	mounted(){
        this.setTokenAxios(this.$store.state.token);
		this.deconnexion();
	},
	methods:{
		deconnexion(){
			window.axios.delete('members/signout').then(response =>{
				this.$store.commit('setMember', false);
				this.$store.commit('setToken', false);
				this.setTokenAxios(false);
				this.$router.push('/');
			}).catch(error =>{
				alert(error)
			});
		}
	}
}
</script>