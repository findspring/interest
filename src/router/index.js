import Vue from 'vue'
import Router from 'vue-router'
const register = r => require.ensure([], () => r(require('pages/register/register')), 'register');
const login = r => require.ensure([], () => r(require('pages/login/login')), 'login');
const index = r => require.ensure([], () => r(require('pages/index/index')), 'index');
const about = r => require.ensure([], () => r(require('pages/about/about')), 'about');
const noCardPay = r => require.ensure([], () => r(require('pages/noCardPay/noCardPay')), 'noCardPay');
const pos = r => require.ensure([], () => r(require('pages/pos/pos')), 'pos');
const creditCard = r => require.ensure([], () => r(require('pages/creditCard/creditCard')), 'creditCard');
const loan = r => require.ensure([], () => r(require('pages/loan/loan')), 'loan');
const personal = r => require.ensure([], () => r(require('pages/personal/personal')), 'personal');
const creditInfo = r => require.ensure([], () => r(require('pages/creditInfo/creditInfo')), 'creditInfo');
const newsInfo = r => require.ensure([], () => r(require('pages/newsInfo/newsInfo')), 'newsInfo');
const loanInfo = r => require.ensure([], () => r(require('pages/loanInfo/loanInfo')), 'loanInfo');
const forgetPwd = r => require.ensure([], () => r(require('pages/forgetPwd/forgetPwd')), 'forgetPwd');


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
			title: '365趣推，专注推广，因为专注所以专业',
			flag: 'index',
			belongToGroup: '365趣推',
			keepAlive: false,
		},
		component: index
	}, {
		path: "/register",
		name: 'register',
		meta: {
			title: '365趣推，专注推广，因为专注所以专业',
			flag: 'register',
			keepAlive: true,
		},
		component: register
	}, {
		path: "/login",
		name: 'login',
		meta: {
			title: '365趣推，专注推广，因为专注所以专业',
			flag: 'login',
			keepAlive: false,
		},
		component: login
	}, {
		path: "/about",
		name: 'about',
		meta: {
			title: '365趣推，专注推广，因为专注所以专业',
			flag: 'about',
			keepAlive: true,
		},
		component: about
	}, {
		path: "/noCardPay",
		name: 'noCardPay',
		meta: {
			title: '365趣推，专注推广，因为专注所以专业',
			flag: 'noCardPay',
			keepAlive: true,
		},
		component: noCardPay
	}, {
		path: "/pos",
		name: 'pos',
		meta: {
			title: '365趣推，专注推广，因为专注所以专业',
			flag: 'pos',
			keepAlive: true,
		},
		component: pos
	}, {
		path: "/loan",
		name: 'loan',
		meta: {
			title: '365趣推，专注推广，因为专注所以专业',
			flag: 'loan',
			keepAlive: true,
		},
		component: loan
	}, {
		path: "/creditCard",
		name: 'creditCard',
		meta: {
			title: '365趣推，专注推广，因为专注所以专业',
			flag: 'creditCard',
			keepAlive: true,
		},
		component: creditCard
	}, {
		path: "/personal",
		name: 'personal',
		meta: {
			title: '365趣推，专注推广，因为专注所以专业',
			flag: 'personal',
			keepAlive: true,
		},
		component: personal
	}, {
		path: "/creditInfo",
		name: 'creditInfo',
		meta: {
			title: '365趣推，专注推广，因为专注所以专业',
			flag: 'creditInfo',
			keepAlive: true,
		},
		component: creditInfo
	}, {
		path: "/newsInfo",
		name: 'newsInfo',
		meta: {
			title: '365趣推，专注推广，因为专注所以专业',
			flag: 'newsInfo',
			keepAlive: true,
		},
		component: newsInfo
	}, {
		path: "/loanInfo",
		name: 'loanInfo',
		meta: {
			title: '365趣推，专注推广，因为专注所以专业',
			flag: 'loanInfo',
			keepAlive: true,
		},
		component: loanInfo
	}, {
		path: "/forgetPwd",
		name: 'forgetPwd',
		meta: {
			title: '365趣推，专注推广，因为专注所以专业',
			flag: 'forgetPwd',
			keepAlive: true,
		},
		component: forgetPwd
	}]
})