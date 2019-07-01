import Vue from 'vue'
import Router from 'vue-router'
import shouye from './views/shouye.vue'
import find from './views/find.vue'
import contac from './views/contac.vue'
import myset from './views/myset.vue'
import login from './views/login.vue'
import xingzou from './components/shouye/xingzou.vue'
import jianshen from './components/shouye/jianshen.vue'
import paobu from './components/shouye/paobu.vue'
import shiping from './components/newWeb/shiping.vue'
import barcode from './components/newWeb/Barcode.vue'
import qixing from './components/shouye/qixing.vue'
import hit from './components/find/hit.vue'
import guanzu from './components/find/guanzu.vue'
import fujin from './components/find/fujin.vue'
import zhuce from './views/zhuce.vue'
import search from './components/search.vue'
import help from './components/myset/help.vue'
import myfrend from './components/myset/myfrend.vue'
import myshouchang from './components/myset/myshouchang.vue'
import qiandao from './components/myset/qiandao.vue'
import qianbao from './components/myset/qianbao.vue'
import bofang from './components/newWeb/bofang'
import zhifu from './views/zhifu'
import ditu from './components/pb.vue'
import paobude from './components/paobuWe.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/shouye',
			name: 'shouye',
			component: shouye,
			children: [
				{
					path: '/shouye/',
					component: xingzou,
				},
				{
					path: '/shouye/paobu',
					component: paobu
				},
				{
					path: '/shouye/qixing',
					component: qixing
				}
			]
		},
		{
			path: '/find',
			name: 'find',
			component: find,
		},
		{
			path: '/zhifu',
			name: 'zhifu',
			component: zhifu,
		},
		{
			path: '/contac',
			name: 'contac',
			component: contac,
			children: [
				{
					path: '/contac/',
					component: hit,
				},
				{
					path: '/contac/guanzu',
					component:  guanzu
				},
				{
					path: '/contac/paobu',
					component: fujin
				}
			]
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		
		{
			path: '/myset',
			name: 'myset',
			component: myset,
		},
		{
			path: '/help',
			component: help,
		},
		{
			path: '/myfrend',
			component:  myfrend
		},
		{
			path:'/qianbao',
			component:qianbao
		},
		{
			path:'/qiandao',
			component:qiandao
		},
		{
			path: '/myshouchang',
			component: myshouchang
		},
		{
			path: '/shiping',
			name: 'shiping',
			component: shiping
		},
		{
			path: '/barcode',
			name: 'barcode',
			component: barcode
		},
		{
			path: '/zhuce',
			name: 'zhuce',
			component: zhuce
		},
		{
			path: '/ditu',
			name: 'ditu',
			component: ditu
		},
		{
			path: '/search',
			name: 'search',
			component: search
		},
		{
			path:'/bofang',
			component:bofang
		},
		{
			path:'/paobude',
			component:paobude
		},
		{
			path:'*',
			redirect: '/shouye'
		}
	]
})
