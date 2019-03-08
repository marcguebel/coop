<template>
  <div>
        <h2>Créer discussion</h2>
        <form @submit.prevent="newDiscussion">
            <div>
                <p>Titre de la discussion</p>
                <input v-model="titre" required>
            </div>
            <div>
                <p>Description de la discussion</p>
                <textarea rows="10" cols="100" v-model="description" required ></textarea>
            </div><br />
            <button>Créer la discussion</button>
        </form>
    </div>    
</template>

<script>
export default {
    name: 'newDiscussion',
    data(){
        return{
            titre: '',
            description: '',
        }
    },
    mounted(){
        this.setTokenAxios(this.$store.state.token)
        console.log(this.$store.state.member)
    },
    methods:{
        newDiscussion(){
            window.axios.post('channels',{
                label : this.titre,
                topic : this.description,
            }).then(response =>{
                this.$router.push('/discussions');
            }).catch(error =>{
                alert(error)
            });

        }
    }
}
</script>