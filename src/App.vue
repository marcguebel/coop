<template>
  <div id="app" v-if="applicationActive">
    <div id="nav">
      <router-link to="/">Accueil</router-link>
      <span v-if="this.$store.state.token == false"  >
        <router-link to="/inscription">Inscription</router-link>
        <router-link to="/connexion">Connexion</router-link>
      </span>
      <span v-else >
        <router-link to="/discussions">Liste des channels</router-link>
        <router-link to="/membres">Liste des membres</router-link>
        <router-link to="/deconnexion">Deconnexion</router-link>
      </span>
    </div>
    <router-view/>

  </div>
</template>
<script>
export default{
  name : 'App',
  data(){
    return {
      applicationActive : false
    }
  },
  mounted() {
    window.axios.get('ping').then((response)=>{
      this.applicationActive = true
    }).catch((error)=>{
      this.applicationActive = false
      console.log(error.message);
    })
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #008fb7;
    }
  }
}
a{
  text-decoration: none;
  margin: 10px;
  padding : 10px;
  color: #2c3e50;
}
a:hover{
  border-bottom-style : solid;
  border-color : #008fb7;
}
html{
  font-size : 18px;
}
button{
  padding : 10px;
  background-color : #2c3e50;
  color : white;
  box-sizing : border-box;
  border-radius : 10px;
  transition: all 0.5s;
}
button:hover{
  box-shadow: 1px 3px 3px gray;
  cursor:pointer;

}
</style>
