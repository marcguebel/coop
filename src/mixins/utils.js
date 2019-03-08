export const Utils = {
	methods: {
		memberConnected(){
			if (this.store.state.member === false) {
				return false;
			}
			else {
				this.setTokenAxios(this.store.state.token);
				return true
			}
		},
		setTokenAxios(token){
			window.axios.defaults.params.token = token;
		},
	}
}