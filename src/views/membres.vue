<template>
    <div id="membres">
    <h2>Liste des Membres :</h2>
    <div class="membres" v-for="membre in membres">
    	<span class="name" v-on:click="detailMembre(membre._id)">{{membre.fullname}}</span>
    </div> 
</div>
</template>

<script>
export default {
    name: 'membres',
    data(){
        return{
            membres : []
        }
    },
    props: {
        msg: String
    },
    mounted(){
        this.setTokenAxios(this.$store.state.token)
        this.listMembres();
    },
    methods:{
        listMembres(){
            window.axios.get('members').then(response =>{
                this.membres = response.data 
            }).catch(error =>{
                alert(error)
            });
        },
        detailMembre(id){
        	this.$router.push('/membre/'+id)
        }
    }
}
</script>

<style lang="scss">
    .name{
        text-decoration: underline;
    }
    .name:hover{
        cursor: pointer;
                color : #008fb7;
    }
    .membres{
        margin-top: 20px;
        font-size: 18px;
        text-decoration: none;

    }
</style>
