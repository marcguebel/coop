<template>
    <div id="discussion">
    <div id="information">
        <p><h2>{{discussion.label}}</h2></p>
        <p style="line-height: 20px">{{discussion.topic}}</p><br />
        <p style="font-size: 12px"><span>Créer le : </span>{{discussion.created_at}}</p>
        <p style="font-size: 12px">Par : 
            <span v-for="user in users">
                <router-link style="padding: unset; font-weight: bold;" :to="{ name: 'membre', params: { id: user._id }}" v-if="discussion.member_id == user._id">{{user.fullname}}</router-link>
            </span>
        </p>
        <p style="font-size: 12px"><span>Mise à jour le : </span>{{discussion.updated_at}}</p>
        <div style="display: flex;">
            <router-link :to="{ name: 'editChannel', params: { idChannel:discussion._id}}" v-if="discussion.member_id == idCurrent"><img src="../assets/modif.png" width="25px"></router-link><br /><br /><br />
            <form @submit.prevent="delconv(discussion._id)" style="margin-left:12px" v-if="discussion.member_id == idCurrent">
                <button style="padding:5px; background-color: #af0000;"><img src="../assets/suppresion.png" width="25px"></button>
            </form>
        </div>
    </div><br />
    <div class="message" v-for="comment in comments">
        
        
        <p style="font-size: 12px; width:100px;">le : {{comment.created_at}} <br />par : 
            <span v-for="user in users">
                
                <router-link style="padding: unset; font-weight: bold;" :to="{ name: 'membre', params: { id: user._id }}" v-if="comment.member_id == user._id">{{user.fullname}}<br /><br /><v-gravatar :email="user.email"/></router-link>
                <div v-if="comment.member_id == user._id">
                    </div>
            </span>
        </p>
        <p class="text" style="margin-left:30px; width:2000px;">{{comment.message}}</p>
        <div style="display : flex;">
            <router-link style="padding: unset; font-weight: bold;" :to="{ name: 'edit', params: { idChannel:discussion._id ,idMessage: comment._id }}" v-if="comment.member_id == idCurrent"><img src="../assets/modif.png" width="25px"></router-link>
            <form @submit.prevent="delMessage(id ,comment._id)">
                <button style="padding:5px; background-color: #af0000;" v-if="comment.member_id == idCurrent" ><img src="../assets/suppresion.png" width="25px"></button>
            </form>
        </div>
    </div>
    <form @submit.prevent="postMessage">
        <p>Écrire:</p>
        <textarea  v-model="newComment" id="newComment" required="required"></textarea><br/><br/>
        <button>Poster le message</button>
    </form>
    </div>  
</template>

<script>
export default {
    name: 'discussion',
    data(){
        return{
            newComment : '',
            discussion : [],
            comments : [],
            id : this.$route.params.id,
            users : [],
            idCurrent : this.$store.state.member.id
        }
    },
    props: {
        msg: String
    },
    mounted(){
        this.setTokenAxios(this.$store.state.token)
        this.detailDiscussion()
        this.commentDiscussion()
        this.user()
    },
    methods:{
        detailDiscussion(){
            window.axios.get('channels/'+this.id).then(response =>{
                response.data.created_at = response.data.created_at.substring(0,response.data.created_at.length-19) + ' à ' + response.data.created_at.substring(11,response.data.created_at.length-10);
                response.data.updated_at = response.data.updated_at.substring(0,response.data.updated_at.length-19) + ' à ' + response.data.updated_at.substring(11,response.data.updated_at.length-10);
                this.discussion = response.data 
            }).catch(error =>{
                alert(error)
            });
        },
        postMessage(id){
            window.axios.post('channels/'+this.id+'/posts',{
                message : this.newComment,
            }).then(response =>{
                this.commentDiscussion();
            }).catch(error =>{
                alert(error)
            });
            
        },
        commentDiscussion(){
            window.axios.get('channels/'+this.id+'/posts').then(response =>{
                response.data.forEach(function(comment){
                    comment.created_at = comment.created_at.substring(0,comment.created_at.length-19) + ' à ' + comment.created_at.substring(11,comment.created_at.length-10);
                    comment.updated_at = comment.updated_at.substring(0,comment.updated_at.length-19) + ' à ' + comment.updated_at.substring(11,comment.updated_at.length-10);
                });
                this.comments = response.data
            }).catch(error =>{
                alert(error)
            });
        },
        user(){
            window.axios.get('/members').then(response =>{
                this.users = response.data 
            }).catch(error =>{
                alert(error)
            });
        },
        delMessage(id, idMessage){
            if (confirm("Etes vous sur de vouloir supprimer votre message ?")){
                window.axios.delete('/channels/'+this.id+'/posts/'+idMessage).then(response =>{
                    this.commentDiscussion();
                }).catch(error =>{
                    console.log(error)
                });
            }
        },
        delconv(id){
            if (confirm("Etes vous sur de vouloir supprimer la conversation ?")){
                window.axios.delete('/channels/'+this.id).then(response =>{
                    this.$router.push('/discussions/');
                }).catch(error =>{
                    console.log(error)
                });
            }
        }
    }
}
</script>


<style lang="scss">
    .message{
        border: 1px gray solid;
        margin-top: 10px;
        width: 60%;
        margin-left: 20%;
        text-align: left;
        padding: 10px;
        display: flex;
        flex-direction: raw;
    }
    .text{
        font-size:20px;
    }
    #newComment
    {
        width: 60%;
        height: 100px;
    }
    #information
    {
        line-height: 10px;
        width: 60%;
        margin-left: 20%;
        text-align: left;
        padding: 10px;  
    }
        a:hover{
            border: none
        }
    
</style>
