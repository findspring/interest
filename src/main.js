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
	// console.log(localStorage.getItem('token') || "");
	//title变化
	if (to.meta.title) {
		document.title = to.meta.title
	}
	// if (to.path === '/login') {
	// 	next();
	// } else {
	// 	let token = localStorage.getItem('authToken') || "";

	// 	if (token === 'null' || token === '') {
	// 		Message({
	// 			message: '请先登录后再访问页面',
	// 			showClose: true,
	// 			type: 'warning'
	// 		});
	// 		next('/login');
	// 	} else {
	// 		next();
	// 	}
	// }
	// 获取authToken
	// let authToken = localStorage.getItem("authToken") || "";
	// if (!authToken) {
	//   authToken = obj.getQueryString("authToken")
	//   if (authToken){
	//     localStorage.setItem("authToken", authToken)
	//   }
	// }
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