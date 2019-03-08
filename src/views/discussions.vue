<template>
    <div id="discussions">
    <router-link to="/newDiscussion">Créer discussion</router-link>
    <h2>Liste des discussions :</h2>
    <div class="discussion" v-for="discussion in discussions">
        <div v-on:click="detailDiscussion(discussion._id)" >
            <p><span>Titre : </span>{{discussion.label}}</p>
            <p><span>Sujet : </span>{{discussion.topic}}</p>
        </div>
    </div>
    </div>    
</template>

<script>
export default {
    name: 'discussions',
    data(){
        return{
            discussions : [],
            users : []
        }
    },
    props: {
        msg: String
    },
    mounted(){
        this.setTokenAxios(this.$store.state.token)
        this.listDiscussions();
    },
    methods:{
        listDiscussions(){
            window.axios.get('channels').then(response =>{
                this.discussions = response.data 
            }).catch(error =>{
                alert(error)
            });
        },
        detailDiscussion(id){
            this.$router.push('/discussion/'+id)
        },
    }
}
</script>

<style lang="scss">
    .discussion{
        border-top: 2px black solid;
        border-bottom: 2px black solid;
        margin-top: 30px;
        transition: all 0.3s;
        font-size: 14px;
        width: 60%;
        margin-left: 20%;
    }
    .discussion:hover{
        background-color: #f3f3f3;
        cursor: pointer;
    }
</style>
