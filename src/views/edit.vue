<template>
  <div class="connexion">
    <h1>Modifier votre Message :</h1>
    <form @submit.prevent="updatePost">
    	<textarea v-model="message">{{message}}</textarea><br /><br />
    	<button>Modifier </button>
    </form>
  </div>
</template>

<script>
export default {
	name : 'edit',
	data(){
		return{
			message : '',
			idChannel : this.$route.params.idChannel,
            idMessage : this.$route.params.idMessage,
		}
	},
	mounted(){
        this.setTokenAxios(this.$store.state.token)
        this.getMessage(this.idChannel, this.idMessage);
    },
	methods:{
		getMessage(idChannel, idMessage){
            window.axios.get('channels/'+this.idChannel+'/posts/'+this.idMessage).then(response =>{
                this.message = response.data.message
            }).catch(error =>{
                alert(error)
            });
        },
        updatePost(idChannel, idMessage){
        	console.log(this.message)
            window.axios.put('channels/'+this.idChannel+'/posts/'+this.idMessage,{ 
            	message : this.message,
            }).then(response =>{
            	this.$router.push('/discussions');
            }).catch(error =>{
                alert(error)
            });
            
        },
	},
	
}
</script>

<style lang="scss">
    textarea{
    	width: 60%;
    	height: 200px;
    }
</style>