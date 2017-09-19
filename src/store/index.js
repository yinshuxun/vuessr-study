import Vue from 'vue'
import Vuex from 'vuex'
import http from 'axios'

Vue.use(Vuex)

const isProd = process.env.NODE_ENV === 'production'

const app = {
	ctx: ['http://localhost:3000', 'http://localhost.me:3000',][+isProd]
}

const state = {
	// TODO: 初始状态
	count: 0,
	steps: [],
	loading: 'ing',
	app,
	tvList: [],
	platforms: ['douyu', 'panda', 'longzhu'],
	categories: ['lol', 'dota2', 'cf', 'dnf', 'beauty']
}

const getters = {
	count(state) {
		return state.count
	},
	steps(state) {
		return state.steps
	},
	loading(state) {
		return state.loading
	},
	app(state) {
		return state.app
	},
	tvList(state) {
		return state.tvList
	},
	platforms({platforms}) {
		return platforms
	},
	categories({categories}) {
		return categories
	}
}

export const createStore = () => {
	return new Vuex.Store({
		state,
		mutations: {
			increment(state, num) {
				state.count += num
				state.steps.unshift('加上' + num)
			},
			reduce(state, num) {
				state.count -= num
				state.steps.unshift('减去' + num)
			},
			loading(state, lstate) {
				state.loading = lstate
			},
			getLiveList(state, list) {
				state.tvList = list
			}
		},
		actions: {
			increment({commit}, num) {
				commit('increment', num)
			},
			reduce({commit}, num) {
				commit('reduce', num)
			},
			loading({commit}, lstate) {
				commit('loading', lstate)
			},
			getLiveList({commit}, uri) {
				return new Promise((resolve, reject) => {
					http.get(`${app.ctx}${uri}`)
						.then((response) => {
							commit('getLiveList', response.data)
							resolve(response)
						})
				})
			}
		},
		getters
	})
}
