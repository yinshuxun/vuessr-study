import Vue from 'vue'
import App from './App.vue'
import {sync} from 'vuex-router-sync'
import {createRouter} from './router'
import {createStore} from './store'

export const createApp = () => {
	const router = createRouter()
	const store = createStore()

	sync(store, router)

	const app = new Vue({
		render: h => h(App),
		router,
		store
	})

	return {
		app,
		router,
		store
	}
}
