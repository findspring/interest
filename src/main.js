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
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import './assets/css/reset.css'

router.beforeEach((to, from, next) => {
	// 获取authToken
	let authToken = localStorage.getItem("authToken") || "";
	// if (!authToken) {
	//   authToken = obj.getQueryString("authToken")
	//   if (authToken){
	//     localStorage.setItem("authToken", authToken)
	//   }
	// }
	//title变化
	if (to.meta.title) {
		document.title = to.meta.title
	}
	// Vue.prototype.$http.defaults.headers['common']=httpHead;
	// Vue.prototype.$http.defaults.headers['common']['authToken']= localStorage.getItem("authToken")||"";
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