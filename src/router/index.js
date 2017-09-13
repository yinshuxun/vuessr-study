import Vue from 'vue'
import Router from 'vue-router'
import CA from '../views/Calculator.vue'
import LIVE from '../views/Live.vue'

Vue.use(Router)

export function createRouter() {
	return new Router({
		mode: 'history',
		scrollBehavior: () => ({y: 0}),
		routes: [
			{path: '/live', component: LIVE},
			{path: '/', component: CA}
		]
	})
}
