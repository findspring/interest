// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import install from 'utils/install'
import axios from 'axios'
import router from './router'
import store from './store'
Vue.use(install)

import ElementUI from 'element-ui'
import {
	Message
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import './assets/css/reset.css'

router.beforeEach((to, from, next) => {
	//title变化
	if (to.meta.title) {
		document.title = to.meta.title
	}
	if (to.path === '/personal') {
		if (store.getters.getToken) {
			Vue.prototype.$http.defaults.headers['XX-Token'] = store.getters.getToken;
		}
	}
	next()
});

router.afterEach((to, from, next) => {
	window.scrollTo(0, 0)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})