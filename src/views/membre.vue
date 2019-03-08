<template>
  <div class="membre">
    <h2>Détail du membre </h2>
    <div v-for="membre in membres">
    	<div v-if="membre._id == id">
            <v-gravatar :email="membre.email"/>
    		<p>{{membre.fullname}}</p>
    		<p>{{membre.email}}</p>
            <form @submit.prevent="delmember(id)" style="margin-left:12px" v-if="membre._id != idCo">
                <button style="padding:5px; background-color: #af0000;"><img src="../assets/suppresion.png" width="25px"></button>
            </form>
            <p>10 derniers posts :</p>
            <div v-for="lastMessage in orderMessage">
                <span v-if="id == lastMessage.member_id">
                    <div class="dernierMessage"  v-on:click="detailDiscussion(lastMessage.channel_id)" >
                    {{lastMessage.message}}
                    </div>
                </span>
            </div>
    	</div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  	name: 'membre',
  	data(){
        return{
            membres : [],
            membre : [],
            allMessage : [],
            tenMessage : [],
            id : this.$route.params.id,
            idCo : this.$store.state.member.id
        }
    },
    computed: {
      orderMessage: function () {
        this.tenMessage = _.orderBy(this.allMessage, 'updated_at')
        return this.tenMessage.slice(-10);
      }
    },
 	mounted(){
        this.setTokenAxios(this.$store.state.token)
        this.detailMembre();
        this.getAllMessages();
   	},
    methods:{
        detailMembre(){
            window.axios.get('members').then(response =>{
                this.membres = response.data 
            }).catch(error =>{
                alert(error)
            });
        },
        getAllMessages(){
            let Messages = []
            window.axios.get('channels').then(response =>{
                response.data.forEach(function (element){
                   window.axios.get('channels/'+element._id+'/posts').then(response2 =>{
                        response2.data.forEach(function(element2){
                            Messages.push(element2)
                        })
                    }).catch(error =>{
                        alert(error)
                    })
                })        
            }).catch(error =>{
                alert(error)
            });
            this.allMessage = Messages
        },
        detailDiscussion(id){
            this.$router.push('/discussion/'+id)
        },
        delmember(id){
            if (confirm("Etes vous sur de vouloir supprimer ce compte ?")){
                window.axios.delete('/members/'+this.id).then(response =>{
                    this.$router.push('/membres/');
                }).catch(error =>{
                    console.log(error)
                });
            }
        }
    }
}

</script>


<style>
    .dernierMessage{
        border-top: 2px black solid;
        border-bottom: 2px black solid;
        margin-top: 30px;
        transition: all 0.3s;
        font-size: 14px;
        width: 60%;
        margin-left: 20%;
    }
    .dernierMessage:hover{
        background-color: #f3f3f3;
        cursor: pointer;
    }
</style>