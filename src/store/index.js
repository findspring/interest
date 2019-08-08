import Vue from 'vue'
import Vuex from 'vuex'
import storage from 'good-storage'
Vue.use(Vuex);
const state = {
	token: storage.get("token", ""),
}

const getters = {
	getToken: state => state.token,
}

const actions = {

}

const mutations = {
	addToken(state, val) {
		state.token = val;
		storage.set("token", val)
	},
	removeToken(state) {
		state.token = "";
		storage.set("token", "")
	}
}
const store = new Vuex.Store({
	state,
	getters,
	mutations
});

export default {
	store
}