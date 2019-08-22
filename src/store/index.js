import Vue from 'vue'
import Vuex from 'vuex'
import storage from 'good-storage'
Vue.use(Vuex);
const state = {
	token: storage.get("token", ""),
	isLogin: sessionStorage.getItem("isLogin") ? JSON.parse(sessionStorage.getItem("isLogin")) : false,
}

const getters = {
	getToken: state => state.token,
	isLogin: state => state.isLogin,
}

const actions = {

}

const mutations = {
	addToken(state, val) {
		state.token = val;
		storage.set("token", val)
	},
	addLogin(state, val) {
		state.isLogin = val;
		sessionStorage.setItem("isLogin", val);
	},
	removeToken(state) {
		state.token = "";
		storage.set("token", "")
	}
}
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
});