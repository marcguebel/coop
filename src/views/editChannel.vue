<template>
  <div class="connexion">
    <h1>Modifier votre Channel :</h1>
    <form @submit.prevent="updatePost" style="width: 60%; margin-left: 20%;">
    	<label>Titre : </label><br />
    	<input type="text" v-model="labbel" style="width: 100%; box-sizing: border-box;"/><br />
    	<label>Sujet : </label><br />
    	<textarea v-model="topic" style="width: 100%">{{topic}}</textarea><br /><br />
    	<button>Modifier </button>
    </form>
  </div>
</template>

<script>
export default {
	name : 'edit',
	data(){
		return{
			labbel : '',
			topic : '',
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
            window.axios.get('channels/'+this.idChannel).then(response =>{
                this.labbel = response.data.label
                this.topic = response.data.topic
            }).catch(error =>{
                alert(error)
            });
        },
        updatePost(idChannel, idMessage){
            window.axios.put('channels/'+this.idChannel,{ 
            	label : this.labbel,
            	topic : this.topic,
            }).then(response =>{
            	this.$router.push('/discussion/'+this.idChannel);
            }).catch(error =>{
                alert(error)
            });
            
        },
	},
	
}
</script>