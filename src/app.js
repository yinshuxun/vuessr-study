import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { sync } from 'vuex-router-sync'
import {createRouter} from './router'

export const createApp = () => {
	const router = createRouter()
	sync(store,router)

  const app = new Vue({
    render: h => h(App),
		router
  })

  return {
    app,
		router,
		store
  }
}
