import Vue from 'vue'
import Router from 'vue-router'
const login = r => require.ensure([], () => r(require('pages/login/login')), 'login');
const index = r => require.ensure([], () => r(require('pages/index/index')), 'index');
// const visitors = r => require.ensure([],() => r(require('pages/visitors/visitors')),'visitors');


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		redirect: 'index'
	}, {
		path: '/index',
		name: 'index',
		meta: {
			requireAuth: true,
			title: '365趣理财',
			flag: 'index',
			belongToGroup: '365趣理财',
			keepAlive: false,
		},
		component: index
	}, {
		path: "/login",
		name: 'login',
		meta: {
			title: '登录',
			flag: 'login',
			keepAlive: true,
		},
		component: login
	}]
})