import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Gravatar from 'vue-gravatar';

Vue.component('v-gravatar', Gravatar);



import {Utils} from '@/mixins/utils.js'
Vue.mixin(Utils)

//API KEY : b8c19545fa3f43d298cfb0b7f15a5ff1

store.subscribe((mutation, state)=>{
	localStorage.setItem('store', JSON.stringify(state));
})

Vue.config.productionTip = false

window.axios = axios.create({ 
	baseURL: 'http://coop.api.netlor.fr/api', 
	params : { 
		token : false 
	}, 
	headers: { 
		Authorization: 'Token token=b8c19545fa3f43d298cfb0b7f15a5ff1' 
	} 
});


new Vue({
	beforeCreate(){
		this.$store.commit('initialiseStore');
	},
	mounted(){
		//console.log(Utils)
  	},
  router,
  store,
  render: h => h(App)
}).$mount('#app')
